const express = require("express")
const { getAllrooms, createrooms, updaterooms } = require("../controller/Hotelcontorller")
// const { getAllProducts,createproduct, updateproduct } = require("../controller/productcontorller")

const router = express.Router()

router.route("/products").get(getAllrooms)
router.route("/products/new").post(createrooms)
router.route("/products/id").get(updaterooms)

module.exports = router