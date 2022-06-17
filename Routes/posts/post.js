const route = require('express').Router()
const {poetry} = require('../../db/models')

route.get('/', async (req,res)=>{
    await poetry.find()
    .then((results)=>{
        res.send(results)
    })
    .catch((err)=>{
        console.log(err)
    })
})

route.get('/user/:id',async (req,res)=>{
    id1 = req.params.id
    await poetry.findOne({
        _id: id1
    })
    .then((results)=>{
        res.send(results)
    })
    .catch((err)=>{
        console.log(err)
    }) 
})

route.get('/:id',async (req,res)=>{
    id1 = req.params.id
    await poetry.find({
        user: id1
    })
    .then((results)=>{
        res.send(results)
    })
    .catch((err)=>{
        console.log(err)
    }) 
})

route.post('/', async (req,res)=>{
    const {title1,body1,id1} = req.body
    if(!title1 || !body1){
        res.send('need for post is not enough')
    }
    else{
        const k = await poetry({
            title: title1,
            body: body1,
            user: id1
        })
        k.save()
        res.send(k)
    }
})

exports = module.exports = {
    routerpost: route
}