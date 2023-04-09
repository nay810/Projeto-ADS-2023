import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // verificar as credenciais do usuário e gerar um token de autenticação
  // ...

  res.cookie('token', authToken);
  res.redirect('/dashboard');
});

app.get('/dashboard', (req, res) => {
    const { token } = req.cookies;
  
    // verificar se o usuário está autenticado
    // ...
  
    res.send('Welcome to the dashboard!');
  });
  
