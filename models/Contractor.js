const mongoose = require ('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const bcrypt = require('bcrypt');

const ContractorSchema = new mongoose.Schema({

// _id:{
// type: String,
// Boolean :false
// },
    username:{
    type: String,
    required: [true, "cant be blank"],
    min : 6,
    max: 15,
    match: [/^[a-zA-Z0-9]+$/,  'is invalid']
},
password: {
    type: String,
    required: [true, "cant be blank"]
},
passwordResetToken:{
type:String
},
passwordResetExpires:{
    type: Date
},

email:{
type: String,
lowercase: true,
required: [true, "cant be blank"]
// match: [/^[a-zA-Z0-9]+$/,  'is invalid']
// match: [/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, 'is valid']
},

isVerified:{
type: Boolean,
default: false
},

role :{
    type : String,
    enum :['user', 'admin'],
    required :true
},
birthday:{
    type:Date
},
phone:{
    type: String,
    min: 11,
    max: 14
},
imageURl:{
    type: String
},
description:{
    type: String
},
provider:{
    type:String
    // default: ['Application']
},
provider_id:{
    type:String
},
blocked:{
    Boolean: false
},
rank:{
    type:String
//     default: ['user']
},
companyNum:{
    type: String,
    max: 7,
    min: 7
},
taxId:{
    type:String,
    min:12,
    max:12
}
// role :[{type: mongoose.Schema.Types.ObjectId, ref: 'Role'}]

});

ContractorSchema.pre('save', function(next){
    if(!this.isModified('password'))
    return next();
    bcrypt.hash(this.password,10,(err,passwordHash)=>{
        if(err)
        return next(err);
        this.password = passwordHash;
   next();
    });
});

ContractorSchema.methods.comparePassword = function(password, cb){
    bcrypt.compare(password,this.password,(err, isMatch)=>{
        if(err)
        return cb(err);
        else{
            if(!isMatch)
            return cb(null, isMatch);
            return cb(null, this);
        }
    })
} 

 module.exports = mongoose.model('contractor', ContractorSchema)
// const Contractor = module.exports = mongoose.model('Contractor', contractorSchema);