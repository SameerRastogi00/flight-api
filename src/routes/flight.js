const express=require('express')
const rout=new express.Router()
const Flight=require('../models/flight')
const { find } = require('../models/flight')

rout.post('/flight',async(req,res)=>
{
    console.log(req.body)
    const x=new Flight(req.body)

    try{
        await x.save()
        console.log("after save")
        res.status(201).send('Saved')

    }
    catch(e)
    {
        res.status(400).send(e)
    }
})

rout.get('/flight',async(req,res)=>
{
    const x=await Flight.find({})
    const y=x.length
    var z=[]
    for(var i=0;i<y;i++)
    {
        z.push(x[i].Location)  
    }
    res.status(201).send(z)

})



module.exports=rout