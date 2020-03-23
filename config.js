const bodyParser=require('body-parser')
const express=require('express')
const router=require('./routes/route')

module.exports=(app)=>{
    app.use(express.static('public'))
    app.use(bodyParser.urlencoded({extended:false}))
    app.set('view engine','ejs');
    app.set('views','views');

    
    app.use(router)
    


    return app;
}