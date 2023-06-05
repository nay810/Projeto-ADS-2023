import { db } from "../db.js";

export const validateUser = (req, res) => {

const query = "SELECT * FROM usuarios WHERE `email` = ? AND `password` = ?";
const values = [req.body.email, req.body.password];
    db.query(query, values, (err, data) => {
        if (err) {
            return res.status(500).json({ error: "Erro ao realizar a consulta no banco de dados." });
        }
        if (data.length > 0) {
            res.status(200).json({ status: 200, message: "Login realizado com sucesso!" });
        } else {
            res.status(401).json({ status: 401, error: "Credenciais inválidas!" });
        }
            
    });
};