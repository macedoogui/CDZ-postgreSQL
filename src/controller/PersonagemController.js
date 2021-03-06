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

export const getEditar = async (req, res) => {
  try {
    const personagem = await personagens.findByPk(req.params.id);
    res.render("editar.ejs", {
      personagem,
    });
  } catch (err) {
    res.send({
      err: err.message,
    });
  }
};

export const postEditar = async (req, res) => {
  const {
    nome,
    imagem,
    classificaçao,
    armadura,
    constelaçao,
    divindade,
    aniversario,
    signo,
    habilidade,
    descriçao,
  } = req.body;
  try {
    await personagens.update(
      {
        nome: nome,
        imagem: imagem,
        classificaçao: classificaçao,
        armadura: armadura,
        constelaçao: constelaçao,
        divindade: divindade,
        aniversario: aniversario,
        signo: signo,
        habilidade: habilidade,
        descriçao: descriçao,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    res.redirect("/");
  } catch (err) {
    res.status(500).send(err.message);
  }
};

export const getCriar = (req, res) => {
  res.status(200).render("criar.ejs" , {mensagem,type});
};

export const postCriar = async (req, res) => {
  try {
    const {
      nome,
      imagem,
      classificaçao,
      armadura,
      constelaçao,
      divindade,
      aniversario,
      signo,
      habilidade,
      descriçao,
    } = req.body;

/*    console.log(personagens);
      if (!personagens.nome || !personagens.imagem || !personagens.classificaçao || !personagens.armadura || !personagens.constelaçao || !personagens.divindade || !personagens.aniversario || !personagens.signo|| !personagens.habilidade || !personagens.descriçao ){
        
        mensagem:("Preencha todos os campos para concluir !")
 
        return res.redirect ('/');

      }*/
    
    await personagens.create({
      nome,
      imagem,
      classificaçao,
      armadura,
      constelaçao,
      divindade,
      aniversario,
      signo,
      habilidade,
      descriçao,
    });

    res.status(200).redirect("/");
  } catch (err) {
    res.send(err.message);
  }
};
