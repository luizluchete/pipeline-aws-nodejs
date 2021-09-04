const { Router } = require('express');
const express = require('express')



const app = express();

app.use(express.json());


app.get('/', (request, response)=>{
    return response.json({message: 'Welcome to the home page baby !'})
})

const port = process.env.port || 3000;

app.listen(port, ()=>{
    console.log('Server is running !');

})