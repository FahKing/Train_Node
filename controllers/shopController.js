const Shop = require('../models/shop')
const config = require('../config/index')
const Menu = require('../models/menu')
exports.index = async (req,res,next) => {
    const shop = await Shop.find().select('name photo location').sort({_id:-1})
    const shopWithPhotoDomain = await shop.map((shop,index) => {
        
        return {
        id: shop._id,
        name: shop.name,
        photo: config.DOMAIN + '/images/' + shop.photo,
        location: shop.location
    }
    })
    
    return res.status(200).json({
        data:shopWithPhotoDomain
    })

}

exports.menu = async (req,res,next) => {
    // const menu = await Menu.find()
    // const menu = await Menu.find().select('+name -price') 
    // const menu = await Menu.find().where('price').lte(50) 
    // const menu = await Menu.find().where('price').gte(50) 
    // const menu = await Menu.find({ price: {$gte:50} })
    // const menu = await Menu.find().populate('shop','name location')
    const menu = await Menu.find().populate('shop','name location').sort({price:-1}) //1 = น้อยไปมาก, -1 = มากไปน้อย

    return res.json({
        data:menu
    })
}

exports.getShopWithMenu = async (req,res,next) => {

    const shopWithMenu = await Shop.findOne({_id: req.params.id}).populate('menus');

    return res.json({
        data:shopWithMenu
    })
}

exports.store = async (req,res,next) => {

    let shop = new Shop(req.body)

    await shop.save()

    res.status(201).json({
        message: 'Save Success'
    })
}