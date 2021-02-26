const express = require('express');

const Detail_each_product = require('../../models/Detail_each_product');
const Router = express.Router();

Router.get('/',async (req,res) => {
    const result = await Detail_each_product.findAll({
       
    })

    res.json({
        message:"GET Data successfull",
        data:result,
        err:false
    })
   
})

Router.get('/:id',async (req,res) => {
    const result = await Detail_each_product.findOne({
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
    const result =await Detail_each_product.create({
        
        detail_id:req.body.detail_id,
        product_id:req.body.product_id,
        description:req.body.description,
        chassis_number:req.body.chassis_number,
        engine_number:req.body.engine_number,
        color_id:req.body.color_id,
        guarantee:req.body.guarantee
        
    })

    res.json({
        message:'Add Booking Test Driving successfully',
        data:result,
        err:false

    })
})

Router.put('/:id', async (req,res)=>{
    const result = await Detail_each_product.update(
    {
        detail_id:req.body.detail_id,
        product_id:req.body.product_id,
        description:req.body.description,
        chassis_number:req.body.chassis_number,
        engine_number:req.body.engine_number,
        color_id:req.body.color_id,
        guarantee:req.body.guarantee
    },{
        where:{
            id:req.params.id
        }
    })

    if(result == 1){
        res.json({
            message:"Update  Detail_each_product successfully",
            err:false
        })
    }
    else{
        res.json({
            message:"Data has not changed of Detail_each_product successfully",
            err:true
        })
    }
})


Router.delete('/:id', async (req,res)=>{
   const result = await Detail_each_product.destroy({
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