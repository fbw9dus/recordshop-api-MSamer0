const express = require("express");
const router = express.Router();
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("data/db.json");
const auth = require("../middleware/authenticator")
const isAdmin = require('../middleware/rolesAuthenticator')
const db = low(adapter);
const {
  getRecords,
  getRecord,
  updateRecord,
  deleteRecord,
  addRecord
} = require("../controllers/recordsController");

router
  .route("/")
  .get(getRecords)
  .post(auth,isAdmin, addRecord);

router
  .route("/:id")
  .get(getRecord)
  .delete(auth,isAdmin, deleteRecord)
  .put(auth,isAdmin, updateRecord);

module.exports = router;

