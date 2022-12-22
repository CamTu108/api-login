const bookController = require("../controller/bookController");

const getAllbooks = require("../controller/bookController")

const router = require("express").Router();

// Add book
router.post("/add", bookController.addBook);
// Get All Book
router.get("/get", getAllbooks.getAllbooks);

module.exports = router;
