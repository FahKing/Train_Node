const User = require('../models/user')
const {validationResult} = require('express-validator')
exports.register = async (req,res,next) => {
    
   try {
        const {name,email,password} = req.body
        
        const errorValidation = validationResult(req)
        if(!errorValidation.isEmpty()){
            const error = new Error('Please input required information')
            error.statusCode = 422;
            error.validation =errorValidation.array()
            throw error
        }

        const exitMail = await User.findOne({email:email})
         
        if(exitMail){
            const error = new Error("This Email is not Avalible")
            error.statusCode = 403
            throw error        
        }

        let user = new User

        user.name = name
        user.email = email
        user.password = await user.encryptPassword(password)

        await user.save()

        res.status(201).json({
            data:user
        })

   } catch (error) {
       next(error)
   }

}