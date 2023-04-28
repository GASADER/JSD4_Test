const express = require('express')
//import router from file express
const router = express.Router()

//get API 
router.get('/',(req,res)=>{
    res.send('<h3>Get API</h3>')
})

//get API by id from param
router.get('/:id',(req,res)=>{
    const {id} = req.params
    res.send(`Get API ${id}`)
})

//post API
router.post('/',(req,res)=>{
    res.send('<h3>Post API</h3>')
})

//put API by id from param
router.put('/:id',(req,res)=>{
    const {id} = req.params
    res.send(`Put API ${id}`)
})

//delete API by id from param
router.delete('/:id',(req,res)=>{
    const {id} = req.params
    res.send(`Delete API ${id}`)
}) 

//export router
module.exports = router