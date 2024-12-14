const express = require('express')
const mongoose = require('mongoose')
const bookRoutes =require('./routes/bookRoutes')
const app=express()
const port = 3000
app.use(express.json())

mongoose.connect('mongodb://admin:admin@localhost:27017/library?authSource=admin')
const db = mongoose.connection

db.on('error',()=>{
    console.log('Error On Connection To DB')
})

db.once('open',()=>{
    console.log('Connected To DB')
})
app.use(bookRoutes)

app.listen(port , () => {
    console.log('Applicaton Running Successfuly')
})