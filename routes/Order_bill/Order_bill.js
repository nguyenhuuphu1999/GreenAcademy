const express = require('express');

const Order_bill = require('../../models/Order_bill');
const Router = express.Router();

Router.get('/',async (req,res) => {
    const result = await Order_bill.findAll({
       
    })

    res.json({
        message:"GET Data successfull",
        data:result,
        err:false
    })
   
})

Router.get('/:id',async (req,res) => {
    const result = await Order_bill.findOne({
       where:{
           id:req.params.id
       }
    })

    res.json({
        message:"GET Data successfull",
        data:result,
        err:false
    })
   
})

Router.post('/', async (req,res) =>{
    const result =await Order_bill.create({
        detail_id:req.body.detail_id,
        status:req.body.status,
        quantity:req.body.quantity,
        each_product_price:req.body.each_product_price,
        sale_off_percentage:req.body.sale_off_percentage,
        total_price:req.body.total_price,
        order_date:req.body.order_date

    })

    res.json({
        message:'Add Booking Test Driving successfully',
        data:result,
        err:false

    })
})

Router.put('/:id', async (req,res)=>{
    const result = await Order_bill.update(
    {
        detail_id:req.body.detail_id,
        status:req.body.status,
        quantity:req.body.quantity,
        each_product_price:req.body.each_product_price,
        sale_off_percentage:req.body.sale_off_percentage,
        total_price:req.body.total_price,
        order_date:req.body.order_date
    },{
        where:{
            id:req.params.id
        }
    })

    if(result == 1){
        res.json({
            message:"Update  Order_bill successfully",
            err:false
        })
    }
    else{
        res.json({
            message:"Data has not changed of Order_bill successfully",
            err:true
        })
    }
})


Router.delete('/:id', async (req,res)=>{
   const result = await Order_bill.destroy({
       where:{
           id:req.params.id
       }
   })
   if(result == 1){
        res.json({
            message:'Delete successfull',
            err:false
        })
   }else{
        res.json({
            message:"Your data is not available ",
            err:true
        })
   }
})

module.exports=Router