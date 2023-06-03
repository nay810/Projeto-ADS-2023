import styled from "styled-components";
import { toast } from "react-toastify";
import React, { useState } from "react";
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
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


    const handleLogin = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            return toast.warn("Preencha todos os campos!");
        }
        if (validateUser) {
            try {
                console.log("Resposta do servidor:");
                const isValidUser = await validateUser(email, password);
        
                if (isValidUser) {
                    toast.success("Login bem-sucedido!");
                    navigate("/cadastro");
                } else {
                    toast.error("Credenciais inválidas!");
                }
            } catch (error) {
            toast.error("Erro ao fazer login!");
            }
        }
    };
        
    return (
        <>
        <FormContainer onSubmit={handleLogin}>
            <InputArea>
                <Label>E-mail</Label>
                <Input name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </InputArea>
            <InputArea>
                <Label>Senha</Label>
                <Input name="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </InputArea>
    
            <Button type="submit">Entrar</Button>
        </FormContainer>
        </>
    );
};

export default FormLogin;
