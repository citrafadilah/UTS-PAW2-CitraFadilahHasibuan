var express = require('express');
var router = express.Router();

const CitraController = require("../controller/citra")
/* GET users listing. */
// router.get('/', function(req, res, next) {
// res.send('respond dari Citra router');
// });

//insert
router.post('/', CitraController.createCitra);

//select
router.get("/", CitraController.readCitra);

//delete
router.delete('/:id', CitraController.deleteCitra);

//update
router.put('/:id', CitraController.updateCitra);

module.exports = router;

// nama github : citrafadilah
// nama proyek : UTS-PAW2-CitraFadilahHasibuan


