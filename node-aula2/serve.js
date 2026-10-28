import express from "express";

const app = express();

app.use((req, res) => {
  res.send("Pagina não encontrada");
});

app.get("/", (req, res) => {
  res.send("pagina inicial");
});

app.listen(3000);
