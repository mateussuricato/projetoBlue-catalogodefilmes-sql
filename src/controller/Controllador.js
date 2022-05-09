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


export const postCriar = async (req, res) => {
  const { nome, diretor, img, duracao, anos, iframe } = req.body;
  try {
    if (!nome || !diretor || !img || !duracao || !anos || !iframe) {
      res.send("Todos os campos são obrigatórios!");
    } else {
      await Filmes.create({ nome, diretor, img, duracao, anos, iframe });
    }
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

export const deletar = async (req, res) => {
  try {
    await Filmes.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.redirect("/");
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

export const getEditar = async (req, res) => {
  try {
    const filmesAtual = await Filmes.findByPk(req.params.id);
    res.render("editar.ejs", {
      filmesAtual,
    });
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

export const postEditar = async (req, res) => {
  try {
    const { nome, diretor, img, duracao, ano, iframe } = req.body;
    await Filmes.update(
      {
        nome: nome,
        diretor: diretor,
        img: img,
        duracao: duracao,
        ano: ano,
        iframe: iframe,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

export const getDetalhes = async (req, res) => {
  try {
    const filmesDetalhes = await Filmes.findByPk(req.params.id)
    res.render('detalhes.ejs', {
      filmesDetalhes
    })
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
}