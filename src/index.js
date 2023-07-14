const express = require('express')
const app = express()
const path = require("path");
const bodyParser = require("body-parser");
const port = 8080

// Parse JSON bodies (as sent by API clients)
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//import db connection
const connection = require('./connector');

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname, "index.html"));
});

// get api for first 10 orders
app.get("/api/orders",(req,res)=>{
    try {
       connection.query('select * from orders limit 10 offset 0',(err,result,next)=>{
        if(err){
            req.status(400).json({Message:"400 bad request"});
            next();
        }else{
            res.status(200).json(result);
        }
       })
    } catch (error) {
        res.status(400).json({Message: "400 bad request"});
    }
})


//get api for getting order with custom limit and offset
app.get("/api/orders/:lim/:off",(req,res)=>{
    try {
        const {lim , off} = req.params;
       connection.query(`select * from orders limit ${lim} offset ${off}`,(err,result,next)=>{
        if(err){
            req.status(400).json({Message:"400 bad request"});
            next();
        }else{
            res.status(200).json(result);
        }
       })
    } catch (error) {
        res.status(400).json({Message: "400 bad request"});
    }
})



app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;