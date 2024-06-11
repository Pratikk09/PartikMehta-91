const express = require("express");
const categoryControlar  = require("../controllers/categoryControlar");
const productControlar = require("../controllers/productConterolar");
const router = express.Router();

router.post("/product",productControlar.store);
router.get("/product",productControlar.index);
router.delete("/product",productControlar.delete);

router.post("/Pratik", categoryControlar.store);
router.get("/Pratik", categoryControlar.index);
router.delete("/Pratik", categoryControlar.delete);
module.exports = router;