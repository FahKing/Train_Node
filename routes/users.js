var express = require('express');
var router = express.Router();
const usercontroller = require('../controllers/usercontroller')
/* GET users listing. */
router.post('/register', usercontroller.register);

module.exports = router;
