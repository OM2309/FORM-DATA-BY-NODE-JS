const mongoose = require("mongoose");
// The schema for table 
const studentSchema = new mongoose.Schema({
  // The name of the column
  firstname: {
    type: String,
    required: true,
  },

  lastname: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  gender: {
    type: String,
    required: true,
  },

  phone: {
    type: Number,
    required: true,
    unique: true,
  },

  age: {
    type: Number,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },

  confirmpassword: {
    type: String,
    required: true,
  },
});

const Student = mongoose.model("Student", studentSchema);
module.exports = Student;




/*
Model is the entity where we have all the information and related methods to work with database tables.
ex -> StudentSchema is just a schema not have methods like findOne
but Student Model is a model that contains all the schema and methods also
*/


/*
[
  {
    name: "Student",
    age: 19
  }, 
  {
    name: "Student2",
    age: 20
  }
]

findMany -> document []
findOne -> document {}

*/