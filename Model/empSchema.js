let mongoose=require("mongoose")

let empSchema=mongoose.Schema({
     empId: {
        type: String,
        required: true
    },
    empName: {
        type: String,
        required: true
    },
    empEmail: {
        type: String,
        required: true
    },
    empPhone: {
        type: String,
        required: true
    },
    empDateOfBirth: {
        type: String,
        required: true
    },
    empAddress: {
        type: String,
        required: true
    },
    empJoiningDate: {
        type: String,
        required: true
    },
    empDepartment: {
        type: String,
        required: true
    },
    empDesignation: {
        type: String,
        required: true
    },
    empImage:{
        type:String,
        required:true
    }
});
let emp_data=mongoose.model("emp_data",empSchema);
module.exports=emp_data;