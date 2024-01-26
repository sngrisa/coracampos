const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const { connectionDatabase } = require("./config/mongoDB.config");

connectionDatabase();

app.use(express.json());
app.use(cors({ origin: "http://localhost:4200" }));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/api/users", require("./routes/users.router"));
app.use("/api/clients", require("./routes/clients.router"));
app.use("/api/houses", require("./routes/houses.router"));
app.use("/api/terrains", require("./routes/terrains.router"));
app.use("/api/business", require("./routes/business.router"));

app.listen(port, () => {
  console.log(`Escuchando en puerto ${port}`);
});
