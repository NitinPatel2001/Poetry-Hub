const route = require('express').Router()
const {log} = require('../../db/login')

route.post('/check/',async (req,res)=>{
    const email1 = req.body.email1
    const pass1 = req.body.pass1
    await log.findOne({
        email: email1,
        password: pass1
    })
    .then((results)=>{
        res.send(results)
    })
    .catch((err)=>{
        console.log(err)
    })
})

route.post('/',async (req,res)=>{
    const email1 = req.body.email1
    const pass1 = req.body.pass1
    const username1 = req.body.username1

    if(!email1 || !pass1 || !username1){
        res.send('need of user details Not enough')
    }

    const newuser = await log({
        username: username1,
        email: email1,
        password: pass1
    })

    newuser.save()
    res.send(newuser)
})

route.get('/:id',async (req,res)=>{
    await log.findOne({
        _id: req.params.id
    })
    .then((results)=>{
        res.send(results)
    })
    .catch((err)=>{
        console.log(err)
    })
})

exports = module.exports = {
    routelogin: route
}