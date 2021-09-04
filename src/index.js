const { Router } = require('express');
const express = require('express')



const app = express();

app.use(express.json());


app.get('/', (request, response)=>{
    return response.json({message: 'Welcome to the home page baby !'})
})


app.listen(3333, ()=>{
    console.log('Server is running !');

})