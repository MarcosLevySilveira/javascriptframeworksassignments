// Importing the express module to create a web server
import express from 'express'

// Importing data from a JSON file that contains employee information
// The assert {type: 'json'} is used to specify that the file is a JSON type
import data from './data/employees.json' assert {type:'json'};

// Initializing the express app
const app = express()

// Setting the port where the server will listen for requests
const port = 3000

// Defining a route that listens for GET requests at the root URL ('/')
// When this route is accessed, it sends an HTML response
app.get('/', (req, res) => {
  res.send('<h1> Group10:</h1> <p>Hello World!</p>')
})

// Defining a route for the '/employees' URL
// When this route is accessed, it sends the employee data from the JSON file
app.get('/employees', (req, res) => {
  res.send(data) // Sending the raw JSON data as a response
})

// Starting the server and telling it to listen on the defined port (3000)
// Once the server is running, it logs a message to the console
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// Defining a route for '/crud' to demonstrate different HTTP methods
// GET request to '/crud' will respond with a message about practicing the GET method
app.get('/crud', (req, res) => {
  res.send('Practicing .get() HTTP method for "Read/Retrieve"')
})

// POST request to '/crud' will respond with a message about practicing the POST method
app.post('/crud', (req, res) => {
  res.send('Practicing .post() HTTP method for "Create"')
})

// PUT request to '/crud' will respond with a message about practicing the PUT method
app.put('/crud', (req, res) => {
  res.send('Practicing .put() HTTP method for "Update"')
})

// DELETE request to '/crud' will respond with a message about practicing the DELETE method
app.delete('/crud', (req, res) => {
  res.send('Practicing .delete() HTTP method for "Delete"')
})
