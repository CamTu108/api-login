const mongoose = require("mongoose");

const LoginUser = new mongoose.Schema({
    email: 
        {
            type: String,
             require: true
        },
    password: 
        {
            type: String,
            require: true
        },


    
});
module.exports = mongoose.model("LoginUser", LoginUser);



