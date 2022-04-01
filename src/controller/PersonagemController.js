import { personagens } from "../model/personagens.js";

export const getIndex = async (req, res) => {
  try {
    const cavaleiros = await personagens.findAll();
    res.render("index.ejs", {
      cavaleiros,
    });
  } catch (err) {
    console.log(err.message);
  }
};

export const getDetalhes = async (req, res) => {
  try {
    const personagem = await personagens.findByPk(req.params.id);
    res.render("detalhes.ejs", {
      personagem,
    });
  } catch (err) {
    res.send({
      err: err.message,
    });
  }
};

export const getDeletar = async (req, res) => {
  try {
    await personagens.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).redirect("/");
  } catch (err) {
    res.send({ err: err.message });
  }
};
