const express = require('express');

const customer = require('../../models/Customer');
const Router = express.Router();

Router.get('/',async (req,res) => {
    const result = await customer.findAll({
       
    })

    res.json({
        message:"GET Data successfull",
        data:result,
        err:false
    })
   
})

Router.get('/:id',async (req,res) => {
    const result = await customer.findOne({
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
    const result =await customer.create({
        
        order_id:req.body.order_id,
        name:req.body.name,
        phone_number:req.body.phone_number,
        email:req.body.email,
        payment_method:req.body.payment_method
        
    })

    res.json({
        message:'Add customer successfully',
        data:result,
        err:false

    })
})

Router.put('/:id', async (req,res)=>{
    const result = await customer.update(
    {
        order_id:req.body.order_id,
        name:req.body.name,
        phone_number:req.body.phone_number,
        email:req.body.email,
        payment_method:req.body.payment_method
    },{
        where:{
            id:req.params.id
        }
    })

    if(result == 1){
        res.json({
            message:"Update  customer successfully",
            err:false
        })
    }
    else{
        res.json({
            message:"Data has not changed of customer ",
            err:true
        })
    }
})


Router.delete('/:id', async (req,res)=>{
   const result = await customer.destroy({
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