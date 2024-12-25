const { response } = require("express");
const { handleDataValidation } = require("../helpers/responseHandler");
const {
  createOrdersService,
  getOrdersByIdService,
  calculateTotalRevenueService,
  createOrderService,
  getAllOrdersByService,
} = require("../Service/ordersService");

const z = require("zod");
const createOrdersController = async (req, res) => {
  try {
    const { error, data } = z
      .object({
        productName: z.string().min(1, "Product name is required"),
        quantity: z
          .number()
          .int()
          .positive("Quantity must be a positive integer"),
        price: z.number().positive("Price must be a positive number"),
      })
      .safeParse(req.body);

    if (error) {
      return res.status(401).json(
        handleDataValidation(
          error.issues?.map((i) => {
            return `${i.path[0]} ${i.message}`;
          })
        )
      );
    }
    const { code, response } = await createOrderService({
      ...req.body,
      ...data,
    });
    return res.status(code).json(response);
  } catch (error) {
    console.log(error);
    return {
      code: 500,
      message: "Internal Server Error",
    };
  }
};

const getOrdersController = async (req, res) => {
  try {
    const { code, response } = await getOrdersByIdService(req.params);
    return res.status(code).json(response);
  } catch (error) {
    console.log(error);
    return {
      code: 500,
      message: "Internal Server Error",
    };
  }
};

const getAllOrdersController = async (req, res) => {
  try {
    const { code, response } = await getAllOrdersByService(req);
    return res.status(code).json(response);
  } catch (error) {
    console.log(error);
    return {
      code: 500,
      message: "Internal Server Error",
    };
  }
};

const calculateTotalRevenueController = async (req, res) => {
  try {
    const { code, response } = await calculateTotalRevenueService();
    res.status(code).json(response);
  } catch (error) {
    return {
      code: 500,
      message: "Internal Server Error",
    };
  }
};
// const createordersController = async (req, res) => {
//   try {
//     const { code, data } = await createordersService(req.body);
//     return res.status(code).json(data);
//   } catch (error) {
//     console.log(error);
//   }
// };
// const createordersController = async (req, res) => {
//   try {
//     const { code, data } = await createordersService(req.body);
//     return res.status(code).json(data);
//   } catch (error) {
//     console.log(error);
//   }
// };

module.exports = {
  createOrdersController,
  getOrdersController,
  calculateTotalRevenueController,
  getAllOrdersController,
};
