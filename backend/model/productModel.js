const mongoose = require('mongoose')

const productScehma = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    price : {
        type : String,
        required : true,
    },
    image : {
        type : String,
        required : true,
    },
    category : {
        type : String,
        required : true,
    },
    description : {
        type : String,
        required : true,
    },
    qty : {
        type : String,
        required : true,
    }
})

const product = mongoose.model('Product', productScehma)

module.exports = product