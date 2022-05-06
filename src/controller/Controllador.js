import express from "express";
import { Filmes } from "../model/filmes.js";

export const getIndex = async (req, res) => {
  try {
    const listFilmes = await Filmes.findAll();
    res.render("index", { listFilmes });
  } catch (error) {
    res.send(error.message);
  }
};

export const cadastro = (req, res) => {
  try {
    res.render("cadastro");
  } catch (error) {
    res.send(error.message);
  }
};

export const postar = async (req, res) => {
  try {
    const teste = req.body;
    console.log(teste);
    await Filmes.create(teste);
    res.redirect("/");
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};
