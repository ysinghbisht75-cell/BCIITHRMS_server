let express= require("express");
let mongoose=require("./Database/db")
let router=require("./Routes/Route")
let cors=require("cors")
let employee_router=require("./Routes/Employee_route")
let app= express();
app.use(cors());
app.use(express.json());

app.use((req, res , next)=>{
    console.log("HTTP: ",req.method ,req.url);
    next();
});

app.use("/",router);
app.use("/",employee_router);


app.listen(5000,()=>{
    console.log("Port 5000 is running");
})