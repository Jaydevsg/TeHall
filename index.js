const express = require('express')
const app = express();

var bodyParser = require('body-parser')
app.use(bodyParser.json())

const PORT=process.env.PORT||4000;

let roomBooking=[]
let room=[]
let roomBookedList=[]
let coustomerList=[]

app.get('/',(req,res)=>{
    res.json({
        statusCode:200,
        message:"Welcome to TheHall"
    })
})


//1
app.post('/room',(req,res)=>{
    room.push(req.body)
    res.json({
        statusCode:200,
        message:"data saved"
    })
})
//1..1
app.get('/room',(req,res)=>{
    res.json({
        statusCode:200,
        data:room
    })
})


//2
app.post('/bookingRoom',(req,res)=>{
    roomBooking.push(req.body)
    res.send({
        statusCode:201,
        message:"data saved"
    })
})
//2..2
app.get('/bookingRoom',(req,res)=>{
    res.json({
        statusCode:200,
        data:roomBooking
    })
})
//3
app.post('/listOfBookedroom',(req,res)=>{
    roomBookedList.push(req.body)
    res.json({
        statusCode:200,
        message:"data saved"
        
    })
})
//3..3
app.get('/listOfBookedroom',(req,res)=>{
    res.json({
        statusCode:200,
        data:roomBookedList
    })
})

//4
app.post('/coustomerList',(req,res)=>{
    coustomerList.push(req.body)
    res.json({
        statusCode:200,
        message:"data saved"
    })
})

//4..4
app.get('/coustomerList',(req,res)=>{
    res.json({
        statusCode:200,
        data:coustomerList
    })
})

// app.delete('/:id',(req,res)=>{
//     if(req.params.id<user.length){
//         user.splice(req.params.id,1)
//         res.json({
//             statusCode:200,
//             message:"user deleted"
//         })
//     }
//     else{
//      res.json({
//          statusCode:400,
//          message:"user not available"
//      })
 
//     }
//  })

app.listen(PORT,()=> console.log('server is up in',PORT))