const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Student = new Schema({
    student_name: { type: String },
    student_age: { type: String },
    student_department: { type: String }
});

module.exports = mongoose.model("Students", Student);