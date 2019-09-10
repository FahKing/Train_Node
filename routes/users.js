var express = require('express');
var router = express.Router();
const usercontroller = require('../controllers/usercontroller')
const {body} = require('express-validator')
/* GET users listing. */

router.post('/register', 
    body('name').not().isEmpty().withMessage('Please input required Name'),
    body('password').not().isEmpty().withMessage('Please input required Password'),
    usercontroller.register);

module.exports = router;
