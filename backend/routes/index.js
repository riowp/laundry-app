const router = require("express").Router();
const { getCategories } = require("../controllers/category");
const { getProducts, getProduct, createProduct } = require('../controllers/product');
const multer = require("multer");


const imageFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb("You need to upload Image", false);
  }
}
const upload = multer({
  fileFilter: imageFilter,
  limits: {
    fieldSize: 25 * 1024 * 1024
  }
})


router.get("/products", getProducts);
router.get("/products/:id", getProduct);
router.post("/products",upload.single("image"), createProduct);
router.get("/categories", getCategories);

module.exports = router;