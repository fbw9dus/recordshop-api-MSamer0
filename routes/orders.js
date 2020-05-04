const express = require("express");
const router = express.Router();
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("data/db.json");
const auth = require('../middleware/authenticator')
const isAdmin = require('../middleware/rolesAuthenticater')
const db = low(adapter);
const {
  getOrders,
  getOrder,
  updateOrder,
  deleteOrder,
  addOrder
} = require("../controllers/ordersController");

router
  .route("/")
  .get(auth,isAdmin, getOrders)
  .post(auth, addOrder);

router
  .route("/:id")
  .get(auth, getOrder)
  .delete(auth, deleteOrder)
  .put(updateOrder);

module.exports = router;

