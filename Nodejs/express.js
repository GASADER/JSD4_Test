//Method => Protocol+Address+Port+Path

//BackEnd input
//1.URL
// 2.Parameter
// 3.Query Parameter
// 4.Body

import express from 'express'
// import { router } from './routers/newUser'
const app = express()

//Method Get
//:path has get string param from req
app.get('/:path', (req,res) => {
    const { path } = req.params
    const User = {
        status: 200,
    }
    if (path === 'user'){
        User.id = 0
        User.name = 'John'
        User.age = 30
        res.send(User)
    } else if (path === 'about'){
        User.id = '1'
        User.name = 'Jame'
        User.age = '29'
        res.send(User)
    } else{
        res.status(400).send(`Can't Get ${path}`)
    }
    console.log(User)
});

//แบบปกติ
// app.get('/about', (req,res) => {
//     const About = {
//         id: 2,
//         name: 'Jame',
//         age: 27
//     }
//     res.send(About)
//     res.status(404).end();
// })
//create server 

// app.use('/newuser',router)

//Query Parameter สลับตำแหน่งได้

//Open server
app.listen(8080,() => {
    console.log('Server has running')
})