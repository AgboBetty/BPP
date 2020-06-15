const mongoose = require ('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const RoleSchema = new mongoose.Schema({

    role:{
        type: String
    }

});