const express = require('express');

const BooKing_test_driving = require('../../models/Booking_test_driving');
const Router = express.Router();

Router.get('/',async (req,res) => {
    const result = await BooKing_test_driving.findAll({
       
    })

    res.json({
        message:"GET Data successfull",
        data:result,
        err:false
    })
   
})

Router.get('/:id',async (req,res) => {
    const result = await BooKing_test_driving.findOne({
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
    const result =await BooKing_test_driving.create({
        
        product_id:req.body.product_id,
        customer_name:req.body.customer_name,
        phone_number:req.body.phone_number,
        email:req.body.email,
        booking_time:req.body.booking_time,
        
    })

    res.json({
        message:'Add Booking Test Driving successfully',
        data:result,
        err:false

    })
})

Router.put('/:id', async (req,res)=>{
    const result = await BooKing_test_driving.update(
    {
        product_id:req.body.product_id,
        customer_name:req.body.customer_name,
        phone_number:req.body.phone_number,
        email:req.body.email,
        booking_time:req.body.booking_time,
    },{
        where:{
            id:req.params.id
        }
    })

    if(result == 1){
        res.json({
            message:"Update  BooKing_test_driving successfully",
            err:false
        })
    }
    else{
        res.json({
            message:"Data has not changed of BooKing_test_driving successfully",
            err:true
        })
    }
})


Router.delete('/:id', async (req,res)=>{
   const result = await BooKing_test_driving.destroy({
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