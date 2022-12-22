const mongoose = require("mongoose");




const Bookschema = new mongoose.Schema({
    BookName: {
        type:String,
        required:true
    },
    AuthorName: {
        type:String,
        required:true
    },
    publishedDate:{
        type:String,
    },
    genres: {
        type: [String]
    },
    Price:{
        type: Number,
        require: true
    },
    urlImg: {
        type: String,
        required:true
    },
    Inventory: {
        type: Number,
    }
   

});


module.exports = mongoose.model("Book", Bookschema);

