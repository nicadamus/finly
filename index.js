const express = require('express');

const app = express();

app.get('/',(req,res) =>{
    res.send('Hello from Node.js');
});

app.get('/contact',(req,res)=>{
    res.send('The Contact Page');
});

app.get('/about',(req,res)=>{
    res.send('The About Page');
});

// Only declare the wild card page route last
app.get('*',(req,res)=>{
    res.status(404).send('Page Not Found');
});

const PORT = 3000;

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
});