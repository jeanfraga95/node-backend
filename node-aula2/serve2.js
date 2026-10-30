import express, { json } from "express";
const app = express();
const port = 3000;
import pets from "./pets.js";

app.get("/pets", (req, res) => {
  app.use(json);
  res.send(pets);
});

app.get("/:tutor", (req, res) => {
  const tutorInformado = req.params.tutor.toLowerCase();
  const tutor = tutor.find((infotutor) => infotutor.tutor === tutorInformado);
  res.send(tutor);
});

app.use((req, res) => {
  res.send("Pagina não encontrada");
});

app.listen(port, () => {
  console.log(`Backend Rodando na porta ${port}`);
});
