const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const MongoClient = require('mongodb').MongoClient;
const cors = require('cors');
const customerRouter = require('./route/customerRouter');
const planRouter = require('./route/planRouter');
const userRouter = require('./route/userRouter');
const checkJwt = require('express-jwt');


app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());
require('dotenv').config();
          
app.use('/api', planRouter);
app.use('/api', userRouter);
app.use('/api', customerRouter);



// app.use(checkJwt({ secret: process.env.JWT_SECRET })
// .unless({ path: ['/api/login',
//                 , '/login']
//           }));


MongoClient.connect(process.env.DB_CONN, (err, client) => {

    console.log('connected to mongodb...');
    if (err){
        console.log('fail to access database...');
    }
    //buildExpress(client)
        app.listen(process.env.PORT||4200, () => {
        const myAwesomeDB = client.db();
        app.locals.db = myAwesomeDB;
        console.log('listenning on port 4200...');

    });
});


app.get('*', (req, res) => {
    return res.sendFile(path.join(__dirname, 'public/index.html'));
  });













