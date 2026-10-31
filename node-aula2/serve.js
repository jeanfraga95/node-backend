import express, { json } from "express";
const app = express();
const port = 3000;
import pets from "./pets.js";

app.use(express.json());

app.get("/pets", (req, res) => {
  app.use(json);
  res.send(pets);
});

app.get("/:nome", (req, res) => {
  const nomeInformado = req.params.nome.toLowerCase();
  const pet = pets.find((infoPet) => infoPet.nome === nomeInformado);

  if (pet === undefined) {
    res.status(404).send("Pets não existe");
  }
  res.send(pet);
});

app.put("/:nome", (req, res) => {
  const nomeInformado = req.params.nome.toLowerCase();
  const nomeSelecionado = pets.find((pet) => pet.nome === nomeInformado);
  const campos = Object.keys(req.body);

  for (let campo of campos) {
    nomeSelecionado[campo] = req.body[campo];
  }
  res.status(200).send(nomeSelecionado);
});

app.use((req, res) => {
  res.send("Pagina não encontrada");
});

app.listen(port, () => {
  console.log(`Backend Rodando na porta ${port}`);
});
