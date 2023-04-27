const express = require('express')

const router = express.Router()

const newUsers = []

router.post('/:path', (req,res) => {
    const { path } = req.params
    const newUser ={
        id: newUsers.length,
        states: path,
    }
    newUsers.push(newUser)
    res.status(200).send(`Your Post id ${newUser.id}`)
});

router.delete('/:path/:postId', (req,res) => {
    const { path,postId } = req.params
    const userIndex = newUsers.findIndex((post) => post.id === postId)
    if(postId === -1){
        return res.status(404).send(`Error`)
    }
    newUsers[userIndex] =null
    res.status(200).send(`Cancel ${postId}`)
});

//Query Parameter สลับตำแหน่งได้
module.export = {router}