import express from "express";
const app = express();
const port = 3000;

app.get("/index", (req, res) => {
  res.send("Rodando o servidor");
});
app.use((req, res) => {
  res.send("Pagina não encontrada");
});
app.listen(port, () => {
  console.log(`Backend Rodando na porta ${port}`);
});
