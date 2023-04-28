// what is Middleware?
// #concept!!! software (code file) that acts as a bridge between an operating system or database and applications, especially on a network.

 //How Middleware?
// 1.code single responsibility (Design Pattern)
// 2.Reusability
// 3.Easier to maintain
// 4.Less bugs

//Middleware can do?
// 1.Execute any code
// 2.Make changes to the request and the response objects
// 3.End the request-response CSSCounterStyleRule
// 4.Call the next middleware function in the stack (API to API 3rd party)
// RESTful API = REpresentational State Transfer
// REST => HTTP => CRUD => POST,GET,PULL,DELETE (RESTful API)

// How to use Middleware?
// call middleware function BEFORE!!! all another function

//import express
const express = require ('express')
const app = express()

//import router from file
const restaurantsRouter = require('./routers/test')

//import custom middleware from file
const logger = require('./middleware/logger')
//built-it middleware function from express//
//return data to JSON
app.use(express.json())
//return data only parses urlencoded bodies(res.body) parsing the URL-encoded data with the querystring library
app.use(express.urlencoded({ extended:false }))

//custom middleware
app.use(logger)

//use router with path
app.use('/apis/restaurants',restaurantsRouter)

//Open server
app.listen(4000,()=>{
    console.log('Listening port 4000')
})