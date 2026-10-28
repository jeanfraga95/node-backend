import express, { json } from "express";
const app = express();
const port = 3000;
import pet from "./pets.js";

app.get("/pets", (req, res) => {
  app.use(json);
  res.send(pet);
});
app.use((req, res) => {
  res.send("Pagina não encontrada");
});

app.listen(port, () => {
  console.log(`Backend Rodando na porta ${port}`);
});
