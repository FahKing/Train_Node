const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    name: {type: String, required:true},
    photo: {type: String},
    location: {
        lat:{type:Number},
        lon:{type:Number}
    }
},
{
    timestamp:true
})

const Shop = mongoose.model('Shop', Schema,"shops")

module.exports = Shop