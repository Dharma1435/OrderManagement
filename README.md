# OrderManagement

1:-The Order Management System (OMS) is a platform designed for managing product orders, applying discounts dynamically based on order criteria, and calculating the total revenue. The system supports creating orders, fetching order details, and calculating the total revenue generated from all orders. Discounts are applied based on order amount and the number of items, with additional functionality for managing orders in memory.

Key Features:
Create Orders with dynamic pricing and discount logic.
Apply a 10% discount if the total order amount exceeds ₹10,000.
Apply an additional ₹500 flat discount if more than 5 items are ordered.
Calculate the total revenue generated from all placed orders.

2:- Setup and Usage

Before running the application, ensure you have the following:

Node.js installed.
Git for version control.
Steps to Set Up:
1.Clone the repository:-
Copy code:1.git clone https://github.com/Dharma1435/OrderManagement.git
          2.cd OrderManagement


2.Install dependencies: Run the following command to install all the required packages:
Copy code:- npm install
Run the application: After installing the dependencies, you can start the application by running:

Copy code:-npm run start
This will start the application on http://localhost:3001.




 Sample input/output showing how discounts are applied.

1.For creating orders:-

postman :-http://localhost:3001/order/createOrders

body:
{
    "productName":"Fridge",
    "quantity":1,
    "price":40000
}


output:-
{
    "msg": "Order created successfully",
    "data": {
        "productName": "Fridge",
        "quantity": 1,
        "price": 40000,
        "totalAmount": 40000,
        "discount": 4000,
        "finalAmount": 36000,
        "_id": "676bde3f02d41f59d8b8b0d3",
        "createdAt": "2024-12-25T10:28:15.475Z",
        "updatedAt": "2024-12-25T10:28:15.475Z"
    }
}

2.For getting specific OrderById
postman:-http://localhost:3001/order/getOrders/676bd39de0bd6a7547959f94

output:-
{
    "msg": "Orders fetch successfully",
    "getOrders": {
        "_id": "676bd39de0bd6a7547959f94",
        "productName": "Tv",
        "quantity": 2,
        "price": 10000,
        "totalAmount": 20000,
        "discount": 2000,
        "finalAmount": 18000,
        "createdAt": "2024-12-25T09:42:53.740Z",
        "updatedAt": "2024-12-25T09:42:53.740Z"
    }
}


3.GetAllOrders
postman:-http://localhost:3001/order/getAllOrders
output:-
{
    "msg": "Orders fetch successfully",
    "getOrders": [
        {
            "_id": "676bd39de0bd6a7547959f94",
            "productName": "Tv",
            "quantity": 2,
            "price": 10000,
            "totalAmount": 20000,
            "discount": 2000,
            "finalAmount": 18000,
            "createdAt": "2024-12-25T09:42:53.740Z",
            "updatedAt": "2024-12-25T09:42:53.740Z"
        },
        {
            "_id": "676bd3fce0bd6a7547959f97",
            "productName": "Tv",
            "quantity": 2,
            "price": 10000,
            "totalAmount": 20000,
            "discount": 2000,
            "finalAmount": 18000,
            "createdAt": "2024-12-25T09:44:28.412Z",
            "updatedAt": "2024-12-25T09:44:28.412Z"
        },
        {
            "_id": "676bd57e061ae7c3e09700b0",
            "productName": "Tv",
            "quantity": 1,
            "price": 20000,
            "totalAmount": 20000,
            "discount": 2000,
            "finalAmount": 18000,
            "createdAt": "2024-12-25T09:50:54.276Z",
            "updatedAt": "2024-12-25T09:50:54.276Z"
        },
        {
            "_id": "676bd687597a632b4807e5b9",
            "productName": "Tv",
            "quantity": 5,
            "price": 20,
            "totalAmount": 100,
            "discount": 0,
            "finalAmount": 100,
            "createdAt": "2024-12-25T09:55:19.518Z",
            "updatedAt": "2024-12-25T09:55:19.518Z"
        },
        {
            "_id": "676bd699597a632b4807e5bb",
            "productName": "Tv",
            "quantity": 6,
            "price": 20,
            "totalAmount": 120,
            "discount": 500,
            "finalAmount": -380,
            "createdAt": "2024-12-25T09:55:37.928Z",
            "updatedAt": "2024-12-25T09:55:37.928Z"
        },
        {
            "_id": "676bd9436284fb44b169b3d6",
            "productName": "Tv",
            "quantity": 6,
            "price": 2000,
            "totalAmount": 12000,
            "discount": 1700,
            "finalAmount": 10300,
            "createdAt": "2024-12-25T10:06:59.852Z",
            "updatedAt": "2024-12-25T10:06:59.852Z"
        },
        {
            "_id": "676bd9de6ab8a536b3797235",
            "productName": "Tv",
            "quantity": 6,
            "price": 2000,
            "totalAmount": 12000,
            "discount": 1700,
            "finalAmount": 10300,
            "createdAt": "2024-12-25T10:09:34.030Z",
            "updatedAt": "2024-12-25T10:09:34.030Z"
        }
    ],
    "totalOrders": 7
}

4.TotolRevenvue
postman:-http://localhost:3001/order/getRevenue

output:-{
    "msg": "Successfully fetch total revenue",
    "totalRevenue": 74320
}