const express = require("express");
const {
  createOrdersController,
  getOrdersController,
  calculateTotalRevenueController,
  getAllOrdersController,
} = require("../Controller/ordersController");
const routes = express.Router();

routes.post("/createOrders", createOrdersController);
routes.get("/getOrders/:id", getOrdersController);
routes.get("/getRevenue", calculateTotalRevenueController);
routes.get("/getAllOrders", getAllOrdersController);

module.exports = routes;
