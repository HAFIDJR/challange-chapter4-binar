const express = require("express");
const router = express.Router();
const {
  createUser,
  getAllUsers,
  getUserDetail,
} = require("../handler/v1/user");
const {
  createAccount,
  getAllAccount,
  getAccountDetail,
} = require("../handler/v1/account");
const {
  createTransaction,
  getTransactions,
  getTransactionDetail,
} = require("../handler/v1/transactions");

router.get("/", (req, res) => {
  res.status(200).json({
    status: true,
    message: "welcome to CHALLANGE BINAR prisma api",
  });
});

// Endpoin Users
router.post("/users", createUser);
router.get("/users", getAllUsers);
router.get("/users/:userId", getUserDetail);

// Endpoint Accounts
router.post("/accounts", createAccount);
router.get("/accounts", getAllAccount);
router.get("/accounts/:accountsId", getAccountDetail);

// Endpoint Transactions
router.post("/transaction", createTransaction);
router.get("/transaction", getTransactions);
router.get("/transaction/:idTransaction", getTransactionDetail);

module.exports = router;
