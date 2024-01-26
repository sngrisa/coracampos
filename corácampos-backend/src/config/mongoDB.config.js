const { connect } = require("mongoose");

const url = "mongodb://localhost:27017/carocampos";

let connectionDatabase = async () => {
  try {
    return await connect(`${url}`);
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = { connectionDatabase };
