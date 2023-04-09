import { db } from "../db.js";

export const getUsers = (_, res) => {
  const q = "SELECT * FROM funcionarios";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const addUser = (req, res) => {
  const q = "INSERT INTO funcionarios(`nome`, `email`, `fone`, `cargo`) VALUES(?)";

  const values = [req.body.nome, req.body.email, req.body.fone, req.body.cargo];

  db.query(q, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Funcionário criado com sucesso.");
  });
};

export const updateUser = (req, res) => {
  const q =
    "UPDATE funcionarios SET `nome` = ?, `email` = ?, `fone` = ?, `cargo` = ? WHERE `id` = ?";

  const values = [req.body.nome, req.body.email, req.body.fone, req.body.cargo];

  db.query(q, [...values, req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Funcionário atualizado com sucesso.");
  });
};

export const deleteUser = (req, res) => {
  const q = "DELETE FROM funcionarios WHERE `id` = ?";

  db.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Funcionário deletado com sucesso.");
  });
};
