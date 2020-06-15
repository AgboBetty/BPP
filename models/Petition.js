const mongoose = require ('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const petitionSchema = new mongoose.Schema({
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
procurementStage:{
    type:String,
    required: [true, "This field is required"],
},
message:{
    type:Text,
    required: [true, "This field is required"],
},
sent:{
    Boolean: false
},
contractor :[{type: mongoose.Schema.Types.ObjectId, ref: 'Contractor'}]

})

module.exports = mongoose.model('Petition', petitionSchema)