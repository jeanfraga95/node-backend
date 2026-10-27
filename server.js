import express from "express";
const app = express();
const porta = 3000;

app.get("/", (req, res) => {
  res.send(
    "<h1>Serviço Backend</h1><p>Bem-vindo ao meu servidor Node.js com Express.</p>",
  );
});
app.use(express.json());
app.use((req, res) => {
  res.status(404).send("Página não encontrada meu chapa");
});

app.listen(porta, () => {
  console.log(`Servidor rodando na porta ${porta}`);
});
