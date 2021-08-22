const { request, response } = require("express");

const express = require("express");

const Database  = require("./database");
//initialization
const ourAPP =express();

ourAPP.get("/",(request,response)=>{

    response.json({message:"Request Served"});
});
ourAPP.get("/book",(req,res)=>{
    return res.json({books:Database.Book}); 
});

ourAPP.listen(4000,()=>console.log("server is running"));