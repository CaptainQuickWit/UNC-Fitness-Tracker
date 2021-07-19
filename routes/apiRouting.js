/*
const workout  = require("../models/workout.js");


const router = require("express").Router();
// Import workout model
const Workout  = require("../models/workout.js");

// GET last workout

router.get("/api/workouts", (req, res) => {
  Workout.aggregate([
   //do work
  ]) 
    //do something
});

// ADD exercise to a Workout Plan
router.put("/api/workouts/:id", ({ body, params }, res) => {
  console.log("you have entered the api id route api routing line 21");
  
  Workout.findByIdAndUpdate();
  //do work

});

// CREATE new workout

router.post("/api/workouts", ({ body }, res) => {
  console.log("your made a post to api/workout");
  Workout.create(body); 

});

// GET workout in 7 day range

router.get("/api/workouts/range", (req, res) => {
    console.log("you made a get req to api/workouts/range");
  Workout.aggregate();
});

// Export API routes
module.exports = router;*/

router.get("/api/workouts", (req, res) => {
    Workout.aggregate([
      {
        $addFields: {
          totalDuration:{$sum: "$exercises.duration"}
        }
      }
    ]) 
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });
  
  // ADD exercise to a Workout Plan
  
  router.put("/api/workouts/:id", ({ body, params }, res) => {
    console.log("check!", body, params);
    
    Workout.findByIdAndUpdate(
      { _id: params.id },
      { $push: { exercises: body } },
      { new: true }
    )
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.status(400).res.json(err);
      });
  });
  
  // CREATE new workout
  
  router.post("/api/workouts", ({ body }, res) => {
    console.log("ok");
    Workout.create(body)
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.status(400).res.json(err);
      });
  });
  
  // GET workout in 7 day range
  
  router.get("/api/workouts/range", (req, res) => {
    Workout.aggregate([{
      $addFields: {
        totalDuration:{$sum: "$exercises.duration"}
      }
    }])
      .sort({_id:-1}).limit(7)
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });
  
  // Export API routes
  module.exports = router;