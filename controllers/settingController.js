const ScSetting = require('../models/setting')

exports.index = async (req,res,next) => {
    
    // const {name,age,created} = req.body
    
    const findsetting = await ScSetting.find()

    res.status(200).json({
        data:findsetting
    })

}