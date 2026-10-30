import express, { json } from "express";
const app = express();
const port = 3000;
import pets from "./pets.js";

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

app.use((req, res) => {
  res.send("Pagina não encontrada");
});

app.listen(port, () => {
  console.log(`Backend Rodando na porta ${port}`);
});
