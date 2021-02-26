const express = require('express');

const Theme_banner = require('../../models/Theme_banner');
const Router = express.Router();

Router.get('/',async (req,res) => {
    const result = await Theme_banner.findAll({
       
    })

    res.json({
        message:"GET Data successfull",
        data:result,
        err:false
    })
   
})

Router.get('/:id',async (req,res) => {
    const result = await Theme_banner.findOne({
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
    const result =await Theme_banner.create({
       
        title:req.body.title,
        images:req.body.image,
        status:req.body.status,
    })

    res.json({
        message:'Add Booking Test Driving successfully',
        data:result,
        err:false

    })
})

Router.put('/:id', async (req,res)=>{
    const result = await Theme_banner.update(
    {
        product_id:req.body.product_id,
        title:req.body.title,
        images:req.body.image,
        status:req.body.status,
    },{
        where:{
            id:req.params.id
        }
    })

    if(result == 1){
        res.json({
            message:"Update  Theme_banner successfully",
            err:false
        })
    }
    else{
        res.json({
            message:"Data has not changed of Theme_banner successfully",
            err:true
        })
    }
})


Router.delete('/:id', async (req,res)=>{
   const result = await Theme_banner.destroy({
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