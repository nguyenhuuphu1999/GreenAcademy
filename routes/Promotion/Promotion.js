const express = require('express');

const Promotion = require('../../models/Promotion');
const Router = express.Router();

Router.get('/',async (req,res) => {
    const result = await Promotion.findAll({
       
    })

    res.json({
        message:"GET Data successfull",
        data:result,
        err:false
    })
   
})

Router.get('/:id',async (req,res) => {
    const result = await Promotion.findOne({
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
    const result =await Promotion.create({
        quantity:req.body.quantity,
        start_date:req.body.start_date,
        end_date:req.body.end_date,
        sale_off_percentage:req.body.sale_off_percentage
    
    })

    res.json({
        message:'Add Booking Test Driving successfully',
        data:result,
        err:false

    })
})

Router.put('/:id', async (req,res)=>{
    const result = await Promotion.update(
    {
        quantity:req.body.quantity,
        start_date:req.body.start_date,
        end_date:req.body.end_date,
        sale_off_percentage:req.body.sale_off_percentage
    
    },{
        where:{
            id:req.params.id
        }
    })

    if(result == 1){
        res.json({
            message:"Update  Promotion successfully",
            err:false
        })
    }
    else{
        res.json({
            message:"Data has not changed of Promotion successfully",
            err:true
        })
    }
})


Router.delete('/:id', async (req,res)=>{
   const result = await Promotion.destroy({
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