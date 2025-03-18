const express = require('express');
const morgan = require('morgan');

require('dotenv').config();
require('./libs/dbConnect');

const userRouter = require('./routes/user.route');

const app = express();

app.set('views','./views');
app.set('view engine','ejs');

app.use(morgan('dev'));
app.use(express.static('./public'));

app.get('/',(req,res) =>{
    res.render('index',{message:'Hello from Node.js!'});
});

app.use('/users',userRouter);

app.get('/contact',(req,res)=>{
    // with EJS, you render not send
    res.render('index',{message:'The Contact Page'});
    //res.send('The Contact Page');
});

app.get('/about',(req,res)=>{
    // with EJS, you render not send
    res.render('index',{message:'The About Page'});
    //res.send('The About Page');
});

// Only declare the wild card page route last
app.get('*',(req,res)=>{
    res.status(404).render('index',{message: 'Page Not Found.'});
});

const PORT = 3000;

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
});