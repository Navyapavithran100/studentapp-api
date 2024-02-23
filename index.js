const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

const app = new express();
app.use(cors());
app.use(bodyParser.json());

let Student = require('./student.model');


mongoose.connect(
    "mongodb+srv://navyaapavithran:RFZZtwFPIqsnpbRK@cluster0.dobcijc.mongodb.net/studentbase?retryWrites=true&w=majority&appName=Cluster0"
);
const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB connection established successfully");
})
app.get("/", (req, res) => {
    console.log("reqest received");
    res.json("Hello World");

});

app.get("/hi", (req, res) => {
    console.log("hi reqest received");
    res.json("welcome with nodemon");

});

app.get("/people", (req, res) => {
    console.log("people reqest received");
    // res.json([{ name: "Navya", role: "student" }, { name: "Diya", role: "teacher" }]);
});

app.get("/students",async (req, res) => {
    console.log(" students request recceived");
    let data= await Student.find().catch(err =>{
        res.json("error loading the data");
    });
    res.json(data);
    // res.json([{ name: "Navya", age: "20", department: "CSE" },
    // { name: "Diya", age: "22", department: "CSE" },
    // { name: "Nithya", age: "28", department: "EEE" }]);
});


app.get('/student/:id',async (req,res)=>{
    let id=req.params.id;
    let data = await Student.findById(id).catch(err=>{
        res.json("error finding person");
    });
    if(!data){
              res.json("not found");
    }
    else{
            res.json(data);
        }
    
});

app.delete('/student/:id',async (req,res)=>{
    let id=req.params.id;
    await Student.findByIdAndDelete(id)
    .catch(err=>{
        res.json("error deleting person");
    })
    .then(()=>{
              res.json("Deleted data");
    });
});









app.post("/student", (req, res) => {
    console.log(req.body);
    let student = new Student(req.body);
    student
        .save()
        .then(() => {
            json("saved successfully!");
        }).catch(err => {
            res.json("Error:" + err);
        });
})
 //put function

app.listen("4000", () => {
    console.log("started server on 4000");
})