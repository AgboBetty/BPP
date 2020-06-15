const mongoose = require ('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const WhistleSchema = new mongoose.Schema({
// _id:{
// type: String,
// Boolean :false
// },
    email:{
    type: String,
    required: [true, "This field is required"],
},
firstName:{
    type: String,
    required: [true, "This field is required"],
},
lastName:{
    type:String,
    required: [true, "This field is required"],
},
complainingFor:{
    type:Text,
    required: [true, "This field is required"],
},
complainingSummary:{
    type:Text,
    required: [true, "This field is required"],
},
sent:{
    Boolean: false
},
contractor :[{type: mongoose.Schema.Types.ObjectId, ref: 'Contractor'}]

})

module.exports = mongoose.model('Whistle', WhistleSchema)