import Sequelize from "sequelize";
import { connection } from "../database/connection.js";

export const Filmes = connection.define(
  "filmes",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    nome: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    diretor: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    img: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    duracao: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    anos: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    iframe: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false,
    timestamps: false,
  }
);

const initTable = async () => {
  await Filmes.sync();
};

initTable();