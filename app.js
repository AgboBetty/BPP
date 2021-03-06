const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');

app.use(cookieParser());
app.use(express.json())

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//connecting to database
mongoose.connect('mongodb://localhost:27017/bpp',{useNewUrlParser : true,  useUnifiedTopology: true },()=>{
console.log('successfully connected to database');
});
 
app.get('/', (req, res) => {
    res.send('Welcome to MERN')
})

//connecting to routes
const contractorRouter = require('./routes/Contractor');
app.use('/contractor', contractorRouter);



app.listen(5000,()=>{
console.log('express server started')
});