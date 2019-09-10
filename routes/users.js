var express = require('express');
var router = express.Router();
const usercontroller = require('../controllers/usercontroller')
const {body} = require('express-validator')
/* GET users listing. */

router.post('/register', 
    body('name').not().isEmpty().withMessage('Please input Name'),
    body('email').not().isEmpty().withMessage('Please input Email')
        .isEmail().withMessage('Please format Email'),
    body('password').not().isEmpty().withMessage('Please input Password')
        .isLength({min:5}).withMessage('Please input Password more then 5 charecter'),
    usercontroller.register);

module.exports = router;
