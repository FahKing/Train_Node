const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

var Schema = new mongoose.Schema({
    name: {type: String, required:true, trim:true},
    email: {type: String, required:true, trim:true, unique:true},
    password: {type: String, required:true, trim:true},
    role:{type: String,required: true,trim: true}
})

Schema.methods.encryptPassword = async function (password){
    const salt = await bcrypt.genSalt(5), hash = await bcrypt.hash(password,salt);
    return hash;
}

Schema.methods.validPassword = async function (password){
    const isLogin = await bcrypt.compare(password,this.password);
    return isLogin;
}

const User = mongoose.model('User', Schema, "users")

module.exports = User