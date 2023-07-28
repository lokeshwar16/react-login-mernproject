const express = require("express")
const mongoose = require("mongoose")
const RegisterModel = require("./model/register")
const cors = require("cors")
const app = express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/employee")


app.post("/register",(req,res)=>{
    console.log(req.body)
    RegisterModel.create(req.body)
    .then(emps => res.json(emps))

})

app.post("/",(req,res)=>{
    const{email,password}=req.body
    RegisterModel.findOne({email:email})
    .then(value=>{
        if (value){
            if(value.password === password){
                res.json("yes")
            }
        }
        else{
            res.json("no")
        }
    })
})



app.listen(8000,()=>{
    console.log("Startserver...");
})