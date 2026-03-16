const express = require("express");

const productController = require("../controllers/productController");
const { requireAuth, requireSeller } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/products", requireAuth, productController.listProducts);
router.get("/product/:id", requireAuth, productController.productDetails);
router.get("/product/add", requireAuth, requireSeller, productController.renderAddProduct);
router.post("/product/add", requireAuth, requireSeller, productController.addProduct);
router.get("/product/edit/:id", requireAuth, requireSeller, productController.renderEditProduct);
router.post("/product/edit/:id", requireAuth, requireSeller, productController.editProduct);
router.post("/product/delete/:id", requireAuth, requireSeller, productController.deleteProduct);

module.exports = router;
