const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const checkJwt = require('express-jwt');


app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

require('dotenv').config();

let database;

MongoClient.connect(process.env.DB_CONN, (err, client) => {

    console.log('connected to mongodb...');
 
    //buildExpress(client)
        app.listen(process.env.PORT||4200, () => {
        const myAwesomeDB = client.db();

        
        database = myAwesomeDB;
        console.log('listenning on port 4200...');

    });
});

// app.use(checkJwt({ secret: process.env.JWT_SECRET })
// .unless({ path: ['/login','/register', '/customer/:id']
//           }));

app.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
        console.log('no token');
        res.status(401).send({ error: err.message});
    }
});

//get all plans
app.get('/api/plans', (req, res) => {

    console.log("getting customers' plans");
    const plansCollection = database.collection('plans');

    plansCollection.find({ }).toArray((err, docs) => {
        return res.json(docs)
    })   
});


//get all the customer cards
app.get('/api/customers', (req, res) => {
    let plan = req.query.plan;
    var plan_db;
    switch(plan) {
        case "yoga":
            plan_db = "Yoga";
            break;
        case "gain_weight":
            plan_db = "Gain weight";
            break;
        case "lose_weight":
            plan_db = "Lose weight";
            break;
        default:
            break;
    }
    console.log("getting customers' plan: " + plan_db);
    const customersCollection = database.collection('customers');

    if(plan == "all"){
        customersCollection.find({ }).toArray((err, docs) => {
            return res.json(docs);
        })        
    }else{
        customersCollection.find({ "plan": plan_db }).toArray((err, docs) => {
            return res.json(docs);
        })
    }

});

// get one customer
app.get('/api/customers/:id', (req, res) => {
    const customersCollection = database.collection('customers');
   // console.log("js: "+req.params.id);
    customersCollection.findOne({ _id : ObjectId(req.params.id)},function(err,customer){
        console.log("customer plan: "+customer.plan);
        return res.json(customer);
    });
});

// update one customer
app.put('/api/customers/:id', (req, res) => {
    const customersCollection = database.collection('customers');
    const updatedCustomer = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        plan: req.body.plan
      };

    customersCollection.findOneAndUpdate({ _id : ObjectId(req.params.id)}, { $set: updatedCustomer } ,function(err,customer){
        return res.json(customer);
    });
});

//register a new customer card
app.post('/register', (req, res) => {
    const customer = req.body;

    const customersCollection = database.collection('customers');

    customersCollection.insertOne(customer, (err, r) => {
        if (err) {
            return res.status(500).json({ error: 'Error when inserting new record.'});
        }

        const newCustomer = r.ops[0];

        return res.status(201).json(newCustomer);
    });
});
// authentication 
app.post('/login', (req, res) => {
    const user = req.body;

    const usersCollection = database.collection('users');

    usersCollection.findOne({ username: user.username }, (err, result) => {
        if(!result) {
            return res.status(404).json({ error: 'user not found'})
        }

        if(!bcrypt.compareSync(user.password, result.password)) {
            return res.status(401).json({ error: 'incorrect password'});
        }

        const payload = {
            username: result.username,
            admin: result.admin
        };

        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn:'2h'});

        return res.json({
            message: 'Authentication done properly',
            token: token
        });
    });
});

app.delete('/api/customers/:id', (req, res) => {
    // let query = {_id: this.ObjectID(req.param.id)};
   
       const customersCollection = database.collection('customers');
       //console.log("id in js: " + req.params.id);
       customersCollection.deleteOne({ _id : ObjectId(req.params.id)},function(err,customer){
           if(err){
               res.send(err);
           }
           res.json(customer);
       });
   });

   app.post('/api/plans', (req, res) => {
    const plan = req.body;

    const plansCollection = database.collection('plans');

    plansCollection.insertOne(plan, (err, r) => {
        if (err) {
            return res.status(500).json({ error: 'Error when inserting new record.'});
        }

        const newPlan = r.ops[0];

        return res.status(201).json(newPlan);
    });
});

app.get('/api/plans/:id', (req, res) => {
    const plansCollection = database.collection('plans');
   // console.log("js: "+req.params.id);
    plansCollection.findOne({ _id : ObjectId(req.params.id)},function(err,plan){
        return res.json(plan);
    });
});


// update one plan
app.put('/api/plans/:id', (req, res) => {
    const plansCollection = database.collection('plans');
    const updatedPlan = {
        title: req.body.title,
        coach: req.body.coach,
        type: req.body.type
      };

    plansCollection.findOneAndUpdate({ _id : ObjectId(req.params.id)}, { $set: updatedPlan } ,function(err,plan){
        return res.json(plan);
    });
});

app.delete('/api/plans/:id', (req, res) => {
    // let query = {_id: this.ObjectID(req.param.id)};
   
       const plansCollection = database.collection('plans');
       //console.log("id in js: " + req.params.id);
       plansCollection.deleteOne({ _id : ObjectId(req.params.id)},function(err,plan){
           if(err){
               res.send(err);
           }
           res.json(plan);
       });
   });

app.get('*', (req, res) => {
    return res.sendFile(path.join(__dirname, 'public/index.html'));
  });






