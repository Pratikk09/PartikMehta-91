const express = require("express");
const categoryControlar  = require("../controllers/categoryControlar");
const router = express.Router();

router.post("/Pratik", categoryControlar.store);
router.get("/Pratik", categoryControlar.index);
router.delete("/Pratik", categoryControlar.delete);
module.exports = router;