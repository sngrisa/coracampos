const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");

app.use(express.json());
app.use(cors({ origin: "http://localhost:4200" }));

app.use("/api/users", require("./routes/users.router"));

app.listen(() => {
  console.log(`Escuchando en puerto ${port}`);
});
