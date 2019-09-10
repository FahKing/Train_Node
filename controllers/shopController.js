const Shop = require('../models/shop')

exports.index = async (req,res,next) => {
    const findshop = await Shop.find()

    res.status(200).json({
        data:findshop 
    })

}