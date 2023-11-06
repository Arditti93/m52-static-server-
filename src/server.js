const express = require('express') 
// Getting express package so we can use it in our project 

const app = express() 
// Setting up express libary so we can use it elsewhere in our code

const port = 5001

// Send a response when a request is made to localhost:5001
// app.get('/', (req, res) =>{
//     res.send("Hello World")
// })

app.use('/', express.static("public")) // send the public folder in the response when a 
// request is recived. 

// app.get('/about', (req, res) =>{
//     res.send("Hello World 2")
// })

app.get('/html', (req, res) =>{
    res.send("<h1>Hello World 3</h1>")
})

app.get('*', (req, res) => {
    res.send("<h1>404 page not found</h1>")
})

// start our server and keep it running on port 5001
app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})

