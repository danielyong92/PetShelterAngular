var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

//Below is example create a schema
var PetSchema = new mongoose.Schema({
    name: {type: String, required: [true,'Name cannot be blank!'], unique:true ,minlength: [3, 'The min name is 3 length!']},
    type: {type: String, minlength: [3, 'The min type is 3 length!']},
    description: {type: String, minlength: [3, 'The min description is 3 length!']},
    skill1: {type: String,},
    skill2: {type: String,},
    skill3: {type: String,},
    like_count: {type: Number, default: 0},
},{ timestamps: true })

PetSchema.plugin(uniqueValidator);
mongoose.model('Pet', PetSchema); // 'DATANAME' , matching DATANAME you set in controllers.js

