import { personagens } from "../model/personagens.js";

export const getIndex = async (req, res) => {
  try {
    const cavaleiros = await personagens.findAll();
    res.render("index.ejs", {
      cavaleiros
    });
  } catch (err) {
    console.log(err.message);
  }
};
