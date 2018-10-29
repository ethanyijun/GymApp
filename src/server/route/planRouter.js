const express = require('express');
const ObjectId = require('mongodb').ObjectId;
const router = express.Router();


//get all plans
router.get('/plans', (req, res) => {

    console.log("getting customers' plans");
    const db = req.app.locals.db;
    const plansCollection = db.collection('plans');

    plansCollection.find({ }).toArray((err, docs) => {
        return res.json(docs)
    })   
});

// post a new plan
router.post('/plans', (req, res) => {
    const plan = req.body;
    const db = req.app.locals.db;
    const plansCollection = db.collection('plans');

    plansCollection.insertOne(plan, (err, r) => {
        if (err) {
            return res.status(500).json({ error: 'Error when inserting new record.'});
        }

        const newPlan = r.ops[0];

        return res.status(201).json(newPlan);
    });
});

// get one plan
router.get('/plans/:id', (req, res) => {
    const db = req.app.locals.db;
    const plansCollection = db.collection('plans');
    plansCollection.findOne({ _id : ObjectId(req.params.id)},function(err,plan){
        return res.json(plan);
    });
});


// update one plan
router.put('/plans/:id', (req, res) => {
    const db = req.app.locals.db;
    const plansCollection = db.collection('plans');
    const updatedPlan = {
        title: req.body.title,
        coach: req.body.coach,
        type: req.body.type
      };

    plansCollection.findOneAndUpdate({ _id : ObjectId(req.params.id)}, { $set: updatedPlan } ,function(err,plan){
        return res.json(plan);
    });
});

// delete one plan
router.delete('/plans/:id', (req, res) => {
    const db = req.app.locals.db;
    const plansCollection = db.collection('plans');
       plansCollection.deleteOne({ _id : ObjectId(req.params.id)},function(err,plan){
           if(err){
               res.send(err);
           }
           res.json(plan);
       });
   });

   module.exports= router;