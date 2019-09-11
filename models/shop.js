const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: {type: String, required:true},
    photo: {type: String},
    location: {
        lat:{type:Number},
        lon:{type:Number}
    }
},
{
    timestamp:true,
    collection: 'shops',
    toJSON:{virtuals:true},
    toObject:{virtuals:true}
})

    schema.virtual('menus',{
        ref:'Menu',
        localField:'_id',
        foreignField:'shop'
    })

const Shop = mongoose.model('shop', schema,"shops")

module.exports = Shop