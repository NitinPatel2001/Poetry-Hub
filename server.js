const exp = require('constants')
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const path = require('path')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

const PORT = process.env.PORT || 4421

//connect to Mongodb
const dbURI = 'mongodb+srv://NitinPatel2001:Nitin1234@cluster0.u3mqn.mongodb.net/Poetry-Hub?retryWrites=true&w=majority';

mongoose.connect(dbURI)
.then(()=>{
    app.listen(PORT,()=>{
        console.log(`http://localhost:${PORT}`)
    })
})
.catch((err)=>{
    console.log(err)
})

const {routerpost} = require('./Routes/posts/post.js')
const {routelogin} = require('./Routes/login/log')
app.use('/api/login',routelogin)
app.use('/api/posts',routerpost)
app.use('/',express.static(path.join(__dirname+'/public')))