// front end routes
const express = require('express')
const router = express.Router()

// Using dayjs to calculate the last time page has been updated. 
const updateDay = '2021/3/20'
const days = require('dayjs')
const relativeTime = require('dayjs/plugin/relativeTime')
days.extend(relativeTime)
days().locale('en-ca')


router.get('/',(req, res)=>{
  res.render('pages/index',{pageTitle: 'Gallery', lastUpdate: days(updateDay).fromNow()})
})

router.get('/login',(req,res)=>{
  res.render('pages/login',{pageTitle: 'Login', lastUpdate: days(updateDay).fromNow()})
})

router.get('/register',(req,res)=> {
  res.render('pages/register',{pageTitle: 'Register',lastUpdate: days(updateDay).fromNow()})
})

// Rendered single image route
// Sir tony, this is for you!
router.get('/image/:id',(req,res) => {
  Image.find({id: req.params.id}, (err, image) =>  {
    
    res.status(404)
    
    if(err || image == 0){
      const data  = {
        status: res.statusCode,
        message: 'File Not found',
      }
      res.render('pages/404',{data})
    }
    
    res.render('pages/singleItem',{
      data: image,
      pageTitle: 'Review and Comments',
      lastUpdate: days(updateDay).fromNow()
    })
  })
})

module.exports = router