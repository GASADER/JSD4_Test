// Routes is built-it method on Express can export file or data(like a JSON) to Client or Database

// Method => Protocol(http,https)+Address(Domain)+Port+Path

// BackEnd input
// 1.URL
// 2.Parameter
// 3.Query Parameter
// 4.Body

// import express from 'express'
// // import { router } from './routers/newUser'
// const app = express()

// //Method Get
// //:path has get string param from req
// app.get('/:path', (req,res) => {
//     const { path } = req.params
//     const User = {
//         status: 200,
//     }
//     if (path === 'user'){
//         User.id = 0
//         User.name = 'John'
//         User.age = 30
//         res.send(User)
//     } else if (path === 'about'){
//         User.id = '1'
//         User.name = 'Jame'
//         User.age = '29'
//         res.send(User)
//     } else{
//         res.status(400).send(`Can't Get ${path}`)
//     }
//     console.log(User)
// });

// //แบบปกติ
// // app.get('/about', (req,res) => {
// //     const About = {
// //         id: 2,
// //         name: 'Jame',
// //         age: 27
// //     }
// //     res.send(About)
// //     res.status(404).end();
// // })
// //create server

// // app.use('/newuser',router)

// //Query Parameter สลับตำแหน่งได้

// //Open server
// app.listen(8080,() => {
//     console.log('Server has running')
// })

//import express
import express from "express";
const app = express();

//import router from file
import restaurantsRouter from "./routers/test.js";
import logger from "./middleware/logger.js";

app.use(logger);

//use router with path
app.use("/apis/restaurants", restaurantsRouter);

app.get("/", (req, res) => {
  res.send("<h1>Hello Express</h1>");
});

//Open server
app.listen(4000, () => {
  console.log("Listening port 4000");
});

