const express = require('express');
//const ObjectId = require('mongodb').ObjectId;
const router = express.Router();
const jwt = require('jsonwebtoken');
const checkJwt = require('express-jwt');
const bcrypt = require('bcrypt');

// require the file which storing the configuration
require('dotenv').config();

// set these pages as no authentication needed
router.use(checkJwt({ secret: process.env.JWT_SECRET })
.unless({ path: ['/api/login','/api/register','/api/plans','/add-user', 
                '/api/add-user', '/customers', '/login', '/register', 
                '/plans', '/add-plan']
          }));
// catch the unauthorize error if the page did not authenticate
router.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
        res.status(401).send({ error: err.message})  
    }
});

// add a user for log in
router.post('/add-user', (req, res) => {
    // get the global db connection
    const db = req.app.locals.db;
    const user = req.body;
    const password = req.body.password;
    // connect to users collection
    const usersCollection = db.collection('users');
    // hashing password
    const hash = bcrypt.hashSync(password, 10, (err, hash) =>{
        if (err) {
            return res.status(500).json({ error: 'Error when hashing'});
        }
    });
    // pass the hash result
    req.body.password = hash;
    // insert the user
    usersCollection.insertOne(user, (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ error: 'Error when inserting new record.'});
        } else {
            //get the first result
            const newUser = result.ops[0];
            return res.status(201).json(newUser);
        }
    })
    
    })

//authentication when user login
router.post('/login', (req, res) => {
    const db = req.app.locals.db;
    const user = req.body;
    const usersCollection = db.collection('users');
    // search user by username in database
    usersCollection.findOne({ username: user.username }, (err, result) => {
        if (err) {
            return res.status(401).json({
                message: "login fail"
            })
        }
        // if user not found
        if(!result) {
            return res.status(404).json({
                error: 'user not found',
                message: "User not found"
            })
        }
        // compare the hashed password
        if(!bcrypt.compareSync(user.password, result.password)) {
            return res.status(401).json({ error: 'incorrect password'});
        }

        const payload = {
            username: result.username,
        };
        // sign the token for user to login
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn:'1h'});

        return res.status(200).json({
            message: 'Authentication done properly',
            token: token
        });
        
    })
});
module.exports = router;