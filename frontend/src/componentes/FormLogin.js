import styled from "styled-components";
import { toast } from "react-toastify";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";


const FormContainer = styled.form`
    display: flex;
    align-items: flex-end;
    gap: 10px;
    flex-wrap: wrap;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 5px;
`;

const InputArea = styled.div`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    width: 699px;
    padding: 0 10px;
    border: 1px solid #bbb;
    border-radius: 5px;
    height: 40px;
`;

const Label = styled.label``;

const Button = styled.button`
    padding: 10px;
    cursor: pointer;
    border-radius: 5px;
    border: none;
    background-color: #2c73d2;
    color: white;
    height: 42px;
`;


const FormLogin = ({validateUser}) => {
    const ref = useRef();
    const navigate = useNavigate();


    const handleLogin = async (e) => {

        e.preventDefault();

        const user = ref.current;

        const email = user.email.value;
        const password = user.password.value;
        
        if (!email || !password) {
            return toast.warn("Preencha todos os campos!");
        }
        
        ref.current.email.value = "";
        ref.current.password.value = "";
        



        if (validateUser) {
            try {
                console.log("Resposta do servidor:");
                const isValidUser = await validateUser(email, password);

            if (isValidUser) {
                toast.success("Login bem-sucedido!");
                // navigate("/"); 
            } else {
                toast.error("Credenciais inválidas!");
            }
            } catch (error) {
                toast.error("Erro ao fazer login!");
            }
        }
        navigate("/"); 
        
    };

    return (
        <>
        <FormContainer ref={ref} onSubmit={handleLogin}>
            <InputArea>
                <Label>E-mail</Label>
                <Input name="email" type="email" />
            </InputArea>
            <InputArea>
                <Label>Senha</Label>
                <Input name="password" />
            </InputArea>

            <Button type="submit">Entrar</Button>
        </FormContainer>
        </>
    );
};

export default FormLogin;
