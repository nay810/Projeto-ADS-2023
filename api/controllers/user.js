import { db } from "../db.js";

export const getUsers = (_, res) => {

  const q = "SELECT * FROM usuarios";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const addUser = (req, res) => {

  const email = req.body.email;
  const checkQuery = "SELECT * FROM usuarios WHERE email = ?";

  db.query(checkQuery, email, (checkErr, checkResult) => {
    if (checkErr) {
      return res.status(500).json({ error: "Erro ao consultar o banco de dados." });
    }

    if (checkResult.length > 0) {
      return res.status(400).json({ error: "Este email já está cadastrado." });
    }

    const q = "INSERT INTO usuarios(`nome`, `email`, `cargo`, `fone`, `password`) VALUES(?)";
    const values = [[req.body.nome, req.body.email, req.body.cargo, req.body.fone, req.body.password]];

    db.query(q, values, (err) => {
      if (err) {
        return res.status(400).json({ error: "Erro ao inserir o novo usuário no banco de dados." });
      }
      return res.status(200).json({ message: "Usuário criado com sucesso." });
    });
  });
}
export const updateUser = (req, res) => {
  const q =
    "UPDATE usuarios SET `nome` = ?, `email` = ?, `fone` = ?, `cargo` = ?, `password` = ? WHERE `id` = ?";

  const values = [req.body.nome, req.body.email, req.body.fone, req.body.cargo, req.body.password];
  db.query(q, [...values, req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Usuário atualizado com sucesso.");
  });
};

export const deleteUser = (req, res) => {
  const q = "DELETE FROM usuarios WHERE `id` = ?";

  db.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Usuário deletado com sucesso.");
  });
};