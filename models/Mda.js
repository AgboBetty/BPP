const mongoose = require ('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const mdaSchema = new mongoose.Schema({

   firstName:{
    type: String,
    required: [true, "This field is required"],
},
lastName:{
    type:String,
    required: [true, "This field is required"],
},
email:{
    type: String,
    required: [true, "This field is required"],
},
phone:{
    type:String,
    required: [true, "This field is required"],
},
username:{
    type: String,
    required: [true, "This field is required"],
},
password:{
    type: String,
    required: [true, "This field is required"],
},
institution:{
    type: String,
    required: [true, "This field is required"],
},
mda:{
    type: String,
    required: [true, "This field is required"],
},
mdaCode:{
    type: String,
    required: [true, "This field is required"],
},
grade:{
    type: String,
    required: [true, "This field is required"],
},
jobTitle:{
    type: String,
    required: [true, "This field is required"],
},
yearOfEmployment:{
    type: Date,
    required: [true, "This field is required"],
}

})

const Mda =module.exports = mongoose.model('Mda', mdaSchema)