const mongoose = require('mongoose')

var Schema = new mongoose.Schema({
    name: {type: String, required:true, trim:true},
    age: {type: String, required:true, trim:true},
    created: {type: String, required:true, trim:true}
})

const ScSetting = mongoose.model('Setting', Schema)

module.exports = ScSetting