const router = require("express").Router();
const translate = require("../controllers/Translate")
router.post("/", translate.Information);

module.exports = router;
