const express = require('express')
const router = express.Router()
const Book = require('../models/book')
// get all books 
router.get('/books', async (req ,res) => {
    try{
        const books = await Book.find()
        res.status(200).json(books)

    }catch(error){

        res.status(400).json({error : error.message})
    }
})

// creat book 
router.post('/books',async(req,res)=>{
    try{
        const book = new Book(req.body)
        await book.save()
        res.status(200).json({ message : 'Book Add Successfuly ', book })

    }catch(error){
        res.status(400).json({error : error.message})
    }
})

// update on book 
router.put('/books/:id',async (req, res) => {
    try{
        const { id } = req.params
        const dataToUpdate = req.body
        const book =  await Book.findByIdAndUpdate(id,dataToUpdate,{new : true})
        res.status(200).json({message : "updated Successfuly", book })

    }catch(error){
        res.status(400).json({error : error.message})
    }
} )

// delete data 
router.delete('/books/:id',async(req,res)=> {
    const { id } = req.params
   await  Book.findByIdAndDelete(id)
    res.status(200).json({message :'Deleted Successfuly'})

})

module.exports = router;


