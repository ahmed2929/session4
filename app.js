const express=require('express')
var  app=express();
const config=require('./config')




app=config(app)



app.listen(3000)
