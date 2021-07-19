const mongoose = require("mongoose");
const Schema = mongoose.Schema;
/**
 * This is the schema for the web application. It utilizes mongoDB with mongoose rather than the 
 * traditional mySQL
 */
const theSchema = new Schema(
{
 
    day: {
    type: Date,
    default: Date.now
  },

  exercises: [

    {
    type : {
        type: String,
        trim : true,
        required : "Enter Exercise type"
      },
      name : {
        type : String,
        enum: ["resistance", "cardio"],
        required : "Enter an Exercise type, either resistance or cardio"
      },

      distance : {
        type : Number
      },

      duration : {
        type : Number,
        required : "how long the exercise was"
      },

      weight: {
        type : Number
      },

      sets: {
        type : Number
      },

      reps: {
        type : Number
      }

    }

  ]
});
// making a model
const Workout = mongoose.model("exerciseDB", theSchema);
//export
module.exports = exerciseDB;