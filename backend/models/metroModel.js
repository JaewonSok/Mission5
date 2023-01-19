const mongoose = require('mongoose')

const Schema = mongoose.Schema

const metroSchema = new Schema({
    area: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    roomNum: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        require: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Metro', metroSchema)