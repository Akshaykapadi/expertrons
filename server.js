const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const https = require('http');


const app = express();



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

const mentor = require('./api/mentor');
const task = require('./api/task');
app.use('/api/mentor',mentor);
app.use('/api/task',task);




app.get('/',(req,res)=>{
    res.send('Hello world');
})





const db = require('./config/key.js').mongoURI;
console.log(db);
mongoose.connect(db)
    .then(() => console.log('MongoDB Connected.'))
    .catch(err => console.log(err)); 


    // port
    const port  = process.env.PORT || 5000;
    app.listen(port, () => console.log(`Server is running on ${port}`));
