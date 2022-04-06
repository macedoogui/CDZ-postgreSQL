import Sequelize from "sequelize";
import { connection } from "../database/connection.js";

export const personagens = connection.define(
  "personagens",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    nome: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    imagem: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    classificaçao: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    armadura: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    constelaçao: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    divindade: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    aniversario: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    signo: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    habilidade: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    descriçao: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    createdAt: false,
    updateAt: false,
    timestamps: false,
  }
);

      const initTable = async () => {
        await personagnes.sync();
      };

      initTable();
