const express = require("express");
const app = express();
const doConnect = require("./dbConfig/db");
const orders=require('./routes/ordersRoute')
app.use(express.json());
doConnect();

app.use("/order",orders)


app.listen(3001, () => {
  console.log("Server is Connected");
});
