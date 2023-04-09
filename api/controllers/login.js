// const express = require('express');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');

// const app = express();

// app.use(cors());
// app.use(bodyParser.json());

// // Usuário fictício para fins de demonstração
// const user = {
//   id: 1,
//   username: 'admin',
//   password: '$2a$10$jsuwX9fYJzkQ0gURwzZ0H.GGqUkF6gQk6Uc4sU3X6lBd12TGRn6hi' // Senha: "senha123"
// };

// // Rota de login
// app.post('/login', (req, res) => {
//   const { username, password } = req.body;

//   // Verifica se o usuário existe
//   if (username !== user.username) {
//     return res.status(404).send({ message: 'Usuário não encontrado' });
//   }

//   // Verifica se a senha está correta
//   if (!bcrypt.compareSync(password, user.password)) {
//     return res.status(401).send({ message: 'Senha incorreta' });
//   }

//   // Gera um token de autenticação
//   const token = jwt.sign({ id: user.id }, 'minha_chave_secreta', { expiresIn: '1h' });

//   // Retorna o token
//   res.send({ token });
// });

// app.listen(3001, () => console.log('Servidor iniciado na porta 3001'));
