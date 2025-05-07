const mongoose = require('mongoose');

//schema creation
const courseSchema = mongoose.Schema({
    //schema properties
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true,
    },
    items: [],
    zipCode: {
        type: Number,
        min: [10000, "Zip Code must be 5 digits long"],
        max: 99999//zipCode must be 5 digits long
    }
});

module.exports = mongoose.model("Course", courseSchema);