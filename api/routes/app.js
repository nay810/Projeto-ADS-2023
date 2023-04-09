import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());


app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // verificar as credenciais do usuário e gerar um token de autenticação
  // ...

  res.cookie('token', authToken);
  res.redirect('/dashboard');
});
