const mongoose = require ('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
   
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
  
    role:{
        type:String,
        enum: ['doctor', 'patient'],
        required:true
    },
  
    },
{timestamps:true})

const userModel = mongoose.model("User", userSchema);
// 🔐 Add password comparison method
userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

const medecinSchema = new mongoose.Schema({
    first_name:{
        type:String,
        required:true
    },
    last_name:{
        type:String,
        required:true
    },
    phone_number:{
        type:Number,
        required:true
    },
    CIN:{
        type:Number,
        required:function () { return this.role === 'doctor'; }
    },
    medical_diploma:{
        type:String,  // Store the file path or URL as a string
        required:function () { return this.role === 'doctor'; }

    },
    proof_of_practice:{
        type:String,
        required:function () { return this.role === 'doctor'; }

    },
    MCRN:{
        type:Number,
        required:function () { return this.role === 'doctor'; }

  }});
  
  const patientSchema = new mongoose.Schema({
  
    first_name:{
        type:String,
        required:true
    },
    last_name:{
        type:String,
        required:true
    },
    phone_number:{
        type:Number,
        required:true
    },
  });
  
  const adminSchema = new mongoose.Schema({
   
  });
  
  
  const Medecin = userModel.discriminator("Medecin", medecinSchema);
  const Patient = userModel.discriminator("Patient", patientSchema);
  const Admin = userModel.discriminator("Admin", {});
  
  module.exports = { User: userModel, Medecin, Patient, Admin };