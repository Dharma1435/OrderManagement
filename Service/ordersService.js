const { response } = require("express");
const { ordersModel } = require("../Model/ordersModel");

const createOrderService = async (data) => {
  try {
    const { productName, quantity, price } = data;

    const totalAmount = quantity * price;
    let discount = 0;

    if (totalAmount > 10000) {
      discount += totalAmount * 0.1;
    }
    if (quantity > 5) {
      discount += 500;
    }

    const finalAmount = totalAmount - discount;

    const order = new ordersModel({
      productName,
      quantity,
      price,
      totalAmount,
      discount,
      finalAmount,
    });

    const savedOrder = await order.save();

    return {
      code: 201,
      response: { msg: "Order created successfully", data: savedOrder },
    };
  } catch (error) {
    console.error(error);
    return {
      code: 500,
      response: "Internal Server Error",
    };
  }
};

const getOrdersByIdService = async (data) => {
  const { id } = data;
  try {
    const getOrders = await ordersModel.findOne({
      _id: id,
    });
    if (!getOrders) {
      return {
        code: 404,
        response: "Data not found",
      };
    }
    return {
      code: 200,
      response: { msg: "Orders fetch successfully", getOrders },
    };
  } catch (error) {
    console.log(error);
    return {
      code: 501,
      response: "Internal Server Error",
    };
  }
};

const getAllOrdersByService = async () => {
  try {
    const getOrders = await ordersModel.find();
    if (!getOrders) {
      return {
        code: 404,
        response: "Data not found",
      };
    }
    return {
      code: 200,
      response: {
        msg: "Orders fetch successfully",
        getOrders,
        totalOrders: getOrders.length,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      code: 501,
      response: "Internal Server Error",
    };
  }
};

const calculateTotalRevenueService = async () => {
  try {
    const orders = await ordersModel.find();

    if (!orders || orders.length === 0) {
      return {
        code: 404,
        response: "No orders found",
      };
    }

    const totalRevenue = orders.reduce(
      (total, order) => total + order.finalAmount,
      0
    );

    return {
      code: 200,
      response: {
        msg: "Successfully fetch total revenue",
        totalRevenue: totalRevenue,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      code: 500,
      response: "Internal Server Error",
    };
  }
};

module.exports = {
  createOrderService,
  getOrdersByIdService,
  getAllOrdersByService,
  calculateTotalRevenueService,
};
