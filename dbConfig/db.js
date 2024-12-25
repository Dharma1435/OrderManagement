const { connect } = require("mongoose");

const doConnect = async () => {
  try {
    await connect(
      "mongodb+srv://dharma:Dharma1435@cluster0.xzgr3.mongodb.net/"
    );
    console.log("Database Connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = doConnect;
