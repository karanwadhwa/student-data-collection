const mongoose = require('mongoose');

// Student Details Schema
let studentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    lowercase: true
  },

  email: {
    type: String,
    required: true,
    lowercase: true
  },
/*
  class: {
    type: String,
    required: true
  }
*/
  branch: {
    type: String,
    required: true
  },

  stream: {
    type: String,
    required: true
  },

  ten: {
    type: Number,
    required: true
  },

  twelve: {
    type: Number,
    required: true
  },


  jee: {
    type: Number,
    required: true
  },

  //Sem 1 Subjects
  math1: {
    type: Number,
    required: true
  },

  phy1:{
    type: Number,
    required: true
  },

  chem1: {
    type: Number,
    required: true
  },

  mech:{
    type: Number,
    required: true
  },

  bee: {
    type: Number,
    required: true
  },
/*
  evs:{
    type: Number,
    required: true
  },
*/

//Sem 1 Subjects
math2: {
  type: Number,
  required: true
},

phy2:{
  type: Number,
  required: true
},

chem2: {
  type: Number,
  required: true
},

ed:{
  type: Number,
  required: true
},

spa: {
  type: Number,
  required: true
},
/*
cs:{
  type: Number,
  required: true
},
*/

});

let student = module.exports = mongoose.model('Student', studentSchema);
