const express=require('express');
const router=express.Router();
const controller=require('../controller/controle')

router.get('/',controller.getShop)
    
    router.get('/add-product',controller.getAddProduct)
    router.post('/add-product',controller.postAddproduct)
    
    router.use(controller.Error404)

    module.exports=router;
