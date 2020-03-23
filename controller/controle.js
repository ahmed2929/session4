const path=require('path')

var product=[
    {
        name:'harry poter',
        imag:'https://www.stylist.co.uk/images/app/uploads/2019/08/02115431/book-1-1600x1067.jpg?w=1640&h=1&fit=max&auto=format%2Ccompress',
        price:'22',
        description:'testing '
    },
    {
        name:'iphone',
        imag:'https://www.gizte.com/images/apple-iphone-11-pro-256gb-6gb-ram-price.jpg',
        price:'1000',
        description:'testing '
    },
    {
        name:'iphone',
        imag:'https://www.gizte.com/images/apple-iphone-11-pro-256gb-6gb-ram-price.jpg',
        price:'1000',
        description:'testing '
    },
    {
        name:'iphone',
        imag:'https://www.gizte.com/images/apple-iphone-11-pro-256gb-6gb-ram-price.jpg',
        price:'1000',
        description:'testing '
    },
    {
        name:'harry poter',
        imag:'https://www.stylist.co.uk/images/app/uploads/2019/08/02115431/book-1-1600x1067.jpg?w=1640&h=1&fit=max&auto=format%2Ccompress',
        price:'22',
        description:'blaa '
    },



]

var getShop=(req,res)=>{
 //res.sendFile(path.join(__dirname,'..','views','shop.html'))
 res.render('shop',{
    pageTitle:'ak',
    path: '/',
    hasProduct:product.length>0,
    product:product
    


 })  

}

// clint ->    <-server


var getAddProduct=(req,res)=>{
    res.sendFile(path.join(__dirname,'..','views','add-product.html'))
}

var postAddproduct=(req,res)=>{
    // action

    res.redirect('/');
}
var Error404=(req,res)=>{
      res.sendFile(path.join(__dirname,'..','views','404.html'))
}

module.exports={
Error404,
postAddproduct,
getAddProduct,
getShop



}