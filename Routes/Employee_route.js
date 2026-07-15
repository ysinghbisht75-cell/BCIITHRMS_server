let express=require("express")

let employee_router=express.Router();
let {PostEmployeeApi,getEmployeeApi,UpdateEmployeeApi,UpdateEmployeeApiByID,DeleteEmployeeApiByID}=require("../Controller/Employee_controller");
let EmployeeProfile=require("../Files/EmployeeImage");

employee_router.post("/api/post/employee",PostEmployeeApi);
employee_router.get("/api/get/employee",getEmployeeApi);
employee_router.put("/api/update/byid/:id",UpdateEmployeeApiByID);
employee_router.put("/api/update/byemail",EmployeeProfile,UpdateEmployeeApi);

employee_router.delete("/api/delete/byid/:id",DeleteEmployeeApiByID);

module.exports=employee_router
