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

app.use('/properties', require('./routes/property.router.js'));
app.use('/users', require('./routes/users.router.js'));
app.use('/bio', require('./routes/bio.router.js'));

app.listen(port, () => {
  console.log(`Escuchando en puerto ${port}`);
});
