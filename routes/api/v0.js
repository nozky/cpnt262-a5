const express = require('express')
const router = express.Router()

// import connection
const _connection = require('../../connection/_connection')

// import model
const Image = require('../../model/Image')

// return all images
router.get('/gallery',(req,res) => {
  Image.find({},( err, image) => {
    if (err) {
      res.status(404).send({error: 'File Not Found'})
    }
    res.json(image) 
  })
})



// This is my own take
// Rendered single image route
router.get('/gallery/id/:id',(req,res)=>{
    Image.find({id: req.params.id},(err,image) => {
      if(err || !image){
        res.status(404)
        res.send({err: 'File Not Found'})
      } 
      res.json(image)
    }) 
})

// find by name*, return all item that contain name.
router.get('/gallery/name/:name',(req,res)=>{
  const regex = new RegExp(`${req.params.name}`,`gi`)
  Image.find({ title: regex },(err, image)=>{
    if(err) {
      res.status(404)
      res.send({ error: 'File Not Found' })
    } 
    res.json(image)
  })
})

module.exports = router

