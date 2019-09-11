const mongoose = require('mongoose')
const Schema = mongoose.Schema;

var Schema = new Mongoose.Schema({
    name: {type:String, required:true, trim:true},
    price: {type: Schema.Types.Decimal128},
    shop: {type: Schema.Types.ObjectId, ref: 'Shop'}
})

const Menu = mongoose.model('Menu', Schema, "menus");

module.exports = Menu;