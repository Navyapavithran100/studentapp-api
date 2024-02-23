const express= require('express');
const cors= require('cors');

const app= new express();
app.use(cors());

app.get("/",(req,res)=>{
    console.log("reqest received");
    res.json("Hello World");

});

app.get("/hi",(req,res)=>{
    console.log("hi reqest received");
    res.json("welcome with nodemon");

});
app.get("/people",(req,res)=>{
    console.log("people reqest received");
    res.json([{name:"Navya",role:"student"},{name:"Diya",role:"teacher"}]);
});
app.get("/students",(req,res)=>{
    console.log(" students request recceived");
    res.json([{name:"Navya",age:"20",department:"CSE"},{name:"Diya",age:"22",department:"CSE"},{name:"Nithya",age:"28",department:"EEE"}]);
});
app.post("/student",(req,res)=>{
    console.log(req.body);});

app.listen("4000",()=>{
    console.log("started server on 4000");
}
);