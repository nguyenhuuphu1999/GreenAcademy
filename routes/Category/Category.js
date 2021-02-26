const express = require('express');

const Category = require('../../models/Category');
const Router = express.Router();

Router.get('/',async (req,res) => {
    const result = await Category.findAll({
       
    })

    res.json({
        message:"GET Data successfull",
        data:result,
        err:false
    })
   
})

Router.get('/:id',async (req,res) => {
    const result = await Category.findOne({
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
    const result =await Category.create({
        
    product_id:req.body.product_id,
    name:req.body.name
        
    })

    res.json({
        message:'Add Category successfully',
        data:result,
        err:false

    })
})

Router.put('/:id', async (req,res)=>{
    const result = await Category.update(
    {
        product_id:req.body.product_id,
        name:req.body.name
    },{
        where:{
            id:req.params.id
        }
    })

    if(result == 1){
        res.json({
            message:"Update  Category successfully",
            err:false
        })
    }
    else{
        res.json({
            message:"Data has not changed of Category ",
            err:true
        })
    }
})


Router.delete('/:id', async (req,res)=>{
   const result = await Category.destroy({
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