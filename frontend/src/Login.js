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

const Description = styled.h4``;

function Login() {

  const validateUser = (email, password) => {
    return axios.post("http://localhost:8800/", {
      email: email,
      password: password,
    });
  };

  const handleLogins = async (email, password) => {
    try {
      const response = await validateUser(email, password);
  
      if (response.data.status === 200) {
        console.log(response.data.status);
        return true;
      }
    } catch (error) {
      if (error.response) {
        const status = error.response.status;
        if (status === 500) {
          console.error("Erro interno do servidor:", error);
        } else if (status === 401) {
          console.error("Credenciais inválidas:", error);
      }
    }
  };
}

  return (
    <>
      <Container>
        <Title>LOGIN</Title>
        <FormLogin handleLogins={handleLogins} />
        <Description>Caso não tenha cadastro entre em contato com o RH.</Description>
      </Container>
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
      <GlobalStyle />
    </>
  );
}

export default Login;
