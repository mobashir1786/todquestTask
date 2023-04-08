const expres =require("express");
const app=expres();

app.get('/',(req,res)=>{
    res.send("Hello world");
});

app.listen(4000,()=>{
    console.log("http://localhost:4000");
});