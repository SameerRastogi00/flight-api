const express=require('express')
const rout=new express.Router()
const user=require('../models/user')
const Flight=require('../models/flight')
const ticket=require('../models/ticket')
const { find } = require('../models/user')


rout.post('/user',async (req,res)=>
{

    const x=req.body.num
    var z=[]
    for(var i=0;i<x;i++)
    {
        var y=new user(req.body.value[i])
        try{
                  await  y.save()
            const o= await user.find({email:req.body.value[i].email})
            z.push(o[0]._id)

            
        }
        catch(e)
        {
           // res.status(400).send(failed)
        }
    }
    
    res.status(201).send({id:z})
    
})
rout.get('/price',async(req,res)=>
{
    const x=await Flight.find({Location:req.body.go})
    console.log(x)
    var z=x[0].From.length
    var y=-1
    for(var i=0;i<z;i++)
    {
        if(x[0].From[i].location==req.body.top)
        {
            y=x[0].From[i].price
        }
    }
    if(!y)
    res.status(404).send('not found')
    else
    {
        y=y*req.body.num
        res.status(201).send({value:y})

    }
    

})

rout.post('/ticket',async(req,res)=>
{
        try{
            console.log(req.body)
        for(var i=0;i<req.body.id.length;i++)
        {
            const x={
                From:req.body.from,
                To:req.body.To,
                date:req.body.date,
                owner:req.body.id[0]
            }
            var y=new ticket(x)
            
            await y.save()

            }
            
        }
        catch(e)
        {
            throw new Error(e)
        // res.status(400).send('failed')
            
        }
        res.status(201).send('done')

    
})

module.exports=rout


