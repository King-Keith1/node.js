const mongoose = require('mongoose');

//schema creation
const subscriberSchema = mongoose.Schema({
    //schema properties
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    zipCode: {
        type: Number,
        min: [10000, "Zip Code must be 5 digits long"],
        max: 99999//zipCode must be 5 digits long
    },
    //courses subscribers have been enrolled in 
    courses: [{type: mongoose.Schema.Types.ObjectId, ref: "Course"}]
});

//returns subscriber information
subscriberSchema.methods.getInfo = function () {
    return `Name: ${this.name} Email: ${this.email} Zip Code: ${this.zipCode}`;
};
//finds subscribers by zipCode
subscriberSchema.methods.findLocalSubscribers = function () {
    return this.model("Subscriber")
        .find({ zipCode: this.zipCode })
        .exec();
};

module.exports = mongoose.model("Subscriber", subscriberSchema);