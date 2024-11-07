// Importing the express module to create a web server
import express from 'express'

// Initializing the express app
const app = express()

// Setting the port where the server will listen for requests
const port = 3000

// Defining a route that listens for GET requests at the root URL ('/')
// When this route is accessed, it sends an HTML response
app.get('/', (req, res) => {
  res.send('<h1> Assignment 1:</h1> <p>Hello World!</p>')
})

// Starting the server and telling it to listen on the defined port (3000)
// Once the server is running, it logs a message to the console
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
