const express = require('express');
const ObjectId = require('mongodb').ObjectId;
const router = express.Router();
var Binary = require('mongodb').Binary;

//get the customer cards
router.get('/customers', (req, res) => {
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
    const db = req.app.locals.db;
    const customersCollection = db.collection('customers');

    if(plan == "all"){
        customersCollection.find({ "approved": 'N' }).toArray((err, docs) => {
            return res.json(docs);
        })        
    }else{
        customersCollection.find({ "plan": plan_db, "approved": 'Y' }).toArray((err, docs) => {
            return res.json(docs);
        })
    }

});

// get one customer
router.get('/customers/:id', (req, res) => {
    const db = req.app.locals.db;
    const customersCollection = db.collection('customers');
   // console.log("js: "+req.params.id);
    customersCollection.findOne({ _id : ObjectId(req.params.id)},function(err,customer){
        console.log("customer plan: "+customer.plan);
        return res.json(customer);
    });
});

// update one customer
router.put('/customers/:id', (req, res) => {
    const db = req.app.locals.db;
    const customersCollection = db.collection('customers');
    const updatedCustomer = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        plan: req.body.plan,
        approved: req.body.approved
      };

    customersCollection.findOneAndUpdate({ _id : ObjectId(req.params.id)}, { $set: updatedCustomer } ,function(err,customer){
        return res.json(customer);
    });
});

//register a new customer card
router.post('/register', (req, res) => {
    
  //  var data = fs.readFileSync(file_path);
    const customer = req.body.customer;
    var insert_data = {};
  //  insert_data.file_data= Binary(customer.profileImage);



  // const imageFd = req.body.formData;
    console.log("customer");
    console.log(customer);

    const db = req.app.locals.db;
    const customersCollection = db.collection('customers');

    customersCollection.insertOne(customer, (err, r) => {
        if (err) {
            return res.status(500).json({ error: 'Error when inserting new record.'});
        }

        const newCustomer = r.ops[0];

        return res.status(201).json(newCustomer);
    });
});

//delete one customer
router.delete('/customers/:id', (req, res) => {
    // let query = {_id: this.ObjectID(req.param.id)};
    const db = req.app.locals.db;
    const customersCollection = db.collection('customers');
       //console.log("id in js: " + req.params.id);
       customersCollection.deleteOne({ _id : ObjectId(req.params.id)},function(err,customer){
           if(err){
               res.send(err);
           }
           res.json(customer);
       });
   });

module.exports = router;