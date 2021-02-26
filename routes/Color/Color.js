const express = require('express');

const Color = require('../../models/Color');
const Router = express.Router();

Router.get('/',async (req,res) => {
    const result = await Color.findAll({
       
    })

    res.json({
        message:"GET Data successfull",
        data:result,
        err:false
    })
   
})

Router.get('/:id',async (req,res) => {
    const result = await Color.findOne({
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
    const result =await Color.create({
        
        name:req.body.name,
        rgb:req.body.rgb
        
    })

    res.json({
        message:'Add Color successfully',
        data:result,
        err:false

    })
})

Router.put('/:id', async (req,res)=>{
    const result = await Color.update(
    {
        name:req.body.name,
        rgb:req.body.rgb
    },{
        where:{
            id:req.params.id
        }
    })

    if(result == 1){
        res.json({
            message:"Update  Color successfully",
            err:false
        })
    }
    else{
        res.json({
            message:"Data has not changed of Color ",
            err:true
        })
    }
})


Router.delete('/:id', async (req,res)=>{
   const result = await Color.destroy({
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