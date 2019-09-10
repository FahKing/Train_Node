const User = require('../models/user')

exports.register = async (req,res,next) => {
    
    const {name,email,password} = req.body

    let user = new User

    user.name = name
    user.email = email
    user.password = await user.encryptPassword(password)

    await user.save()

    res.status(201).json({
        data:user
    })

}