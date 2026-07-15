let mongoose=require("mongoose")

let authSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
    },
    password:{
        type:String,
        required:true,
    },
     confirmPassword:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        required:true,
    },
    
});
let auth_data=mongoose.model("auth_data",authSchema);
module.exports=auth_data;
