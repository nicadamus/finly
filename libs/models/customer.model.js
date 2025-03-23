const { Schema, model, SchemaTypes } = require("mongoose");

const CustomerSchema = new Schema({
    name: {type:String,required: true},
    email:{type:String, required:true,unique:true},
    phone: {type: String, required: true},
    address:{type: String, required: true},
    owner: {type: SchemaTypes.ObjectId,ref:'User'},
});

const Customer = model('Customer',CustomerSchema);

module.exports = Customer;