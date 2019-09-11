var express = require('express');
var router = express.Router();
const usercontroller = require('../controllers/usercontroller')
const {body} = require('express-validator')
const passportJWT = require('../middlewares/passportJWT')
/* GET users listing. */

router.post('/register', 
    body('name').not().isEmpty().withMessage('Please input Name'),
    body('email').not().isEmpty().withMessage('Please input Email')
        .isEmail().withMessage('Please format Email'),
    body('password').not().isEmpty().withMessage('Please input Password')
        .isLength({min:5}).withMessage('Please input Password more then 5 charecter'),
    usercontroller.register);
    
router.post('/login', usercontroller.login)
router.get('/me',passportJWT.isLogin, usercontroller.me)
module.exports = router;
