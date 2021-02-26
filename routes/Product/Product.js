const express = require('express');

const Product = require('../../models/Product');
const Router = express.Router();

Router.get('/',async (req,res) => {
    const result = await Product.findAll({
       
    })

    res.json({
        message:"GET Data successfull",
        data:result,
        err:false
    })
   
})

Router.get('/:id',async (req,res) => {
    const result = await Product.findOne({
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
    const result =await Product.create({
        product_id:req.body.product_id,
        name:req.body.name,
        type:req.body.type,
        price:req.body.price,
        image:req.body.image,
        quantity:req.body.quantity,
        status:req.body.status,
        description:req.body.description,
        alias:req.body.alias
    })

    res.json({
        message:'Add Booking Test Driving successfully',
        data:result,
        err:false

    })
})

Router.put('/:id', async (req,res)=>{
    const result = await Product.update(
    {
        product_id:req.body.product_id,
        name:req.body.name,
        type:req.body.type,
        price:req.body.price,
        image:req.body.image,
        quantity:req.body.quantity,
        status:req.body.status,
        description:req.body.description,
        alias:req.body.alias
    },{
        where:{
            id:req.params.id
        }
    })

    if(result == 1){
        res.json({
            message:"Update  Product successfully",
            err:false
        })
    }
    else{
        res.json({
            message:"Data has not changed of Product successfully",
            err:true
        })
    }
})


Router.delete('/:id', async (req,res)=>{
   const result = await Product.destroy({
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