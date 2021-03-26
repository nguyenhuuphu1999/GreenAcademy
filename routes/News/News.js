const express = require('express');

const News = require('../../models/News');
const Router = express.Router();

Router.get('/',async (req,res) => {
    const result = await News.findAll({
       
    })

    res.json({
        message:"GET Data successfull",
        data:result,
        err:false
    })
   
})

Router.get('/:id',async (req,res) => {
    const result = await News.findOne({
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
    console.log(req.body)
    const result =await News.create({
      
        title:req.body.title,
        description:req.body.description,
        content:req.body.content,
        image:req.body.image,
        date:req.body.date,
    })

    res.json({
        message:'Add Booking Test Driving successfully',
        data:result,
        err:false

    })
})

Router.put('/:id', async (req,res)=>{
    const result = await News.update(
    {
        title:req.body.title,
        description:req.body.description,
        content:req.body.content,
        image:req.body.image,
        date:req.body.data,
    },{
        where:{
            id:req.params.id
        }
    })

    if(result == 1){
        res.json({
            message:"Update  News successfully",
            err:false
        })
    }
    else{
        res.json({
            message:"Data has not changed of News successfully",
            err:true
        })
    }
})


Router.delete('/:id', async (req,res)=>{
   const result = await News.destroy({
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