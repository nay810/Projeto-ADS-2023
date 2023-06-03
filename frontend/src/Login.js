import React from "react";
import GlobalStyle from "./styles/global";
import styled from "styled-components";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FormLogin from './componentes/FormLogin.js';
import axios from "axios";

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const Title = styled.h2``;

function Login() {

  const validateUser = async (email, password) => {

    try {
      const response = await axios.post("http://localhost:8800", {
        email: email,
        password: password,
      });
      
      if (response.data.status === 200) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error("Erro ao validar usuário:", error);
      throw error;
    }
  };

  return (
    <>
      <Container>
        <Title>LOGIN</Title>
        <FormLogin validateUser={validateUser} />
      </Container>
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
      <GlobalStyle />
    </>
  );
}

export default Login;
