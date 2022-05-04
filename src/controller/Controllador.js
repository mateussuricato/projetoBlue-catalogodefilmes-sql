import { connection } from "../database/connection.js";
import { filmes } from "../model/filmes.js";

export const getIndex = async (req, res) => {
  try {
    const locadora = await filmes.findAll();
    res.render("index", { locadora });
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};
