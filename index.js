let express=require("express");
let app=express();
let fs=require("fs")
let port=4000;
   // when we add /places to url it the entire data
   app.get("/places",(req,res)=>{
    fs.readFile("api.json","utf-8",(err,data)=>{
        if(err){
            res.send({
                msg:err.message,
                status:200,
            })
        }else{
            res.send(data)
        }
   })
})

   // when we add /places/id number like 1 or 4
   
   app.get("/places/:id",(req,res)=>{
    fs.readFile("api.json","utf-8",(err,data)=>{
        if(err){
            res.send({
                msg:err.message,
                status:200,
            })
        }else{
            let dataa=JSON.parse(data)
            let filterdata=dataa.touristplaces.filter((val)=>{
                return val.id==req.params.id
            });
            res.send({
                msg:"successfully sent",
                status: 200,
                data:filterdata
            })
        }
    })
})
app.listen(port,()=>{
    console.log("server is running")
})