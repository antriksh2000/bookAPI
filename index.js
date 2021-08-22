const { request, response } = require("express");

const express = require("express");

//initialization
const ourAPP =express();

ourAPP.get("/",(request,response)=>{

    response.json({message:"Request Served"});
});
ourAPP.listen(4000,()=>console.log("server is running"));