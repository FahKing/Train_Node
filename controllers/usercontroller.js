const User = require('../models/user')

exports.register = async (req,res,next) => {
    
   try {
        const {name,email,password} = req.body

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