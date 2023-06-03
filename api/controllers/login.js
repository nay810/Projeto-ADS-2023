import { db } from "../db.js";

export const validateUser = (req, res) => {

const query = "SELECT * FROM usuarios WHERE `email` = ? AND `password` = ?";
    console.log(query);
const values = [req.body.email, req.body.password];
    console.log(values);
    db.query(query, values, (err, data) => {
        if (err) {
            return res.status(500).json({ error: "Erro ao realizar a consulta no banco de dados." });
        }
        if (data.length > 0) {
            res.status(200).json({ message: "Login realizado com sucesso!" });
        } else {
            console.log("aquii");

            res.status(401).json({ error: "Credenciais inválidas!" });
        }
    });
};