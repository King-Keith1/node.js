// const mongoose = require("mongoose");
// const Subscriber = require("./models/subscriber");
// const Course = require("./models/course");
// let testCourse;
// let testSubscriber;

// mongoose.connect(
//     "mongodb://0.0.0.0:27017/recipe_db",
//     { useNewUrlParser: true }
// );

// mongoose.Promise = global.Promise;
// Subscriber.remove({})
//     .then((items) => console.log(`Removed ${items.n} records!`))
//     .then(() => {
//         return Course.remove({});
//     })
//     .then((items) => console.log(`Removed ${items.n} records!`))
//     .then(() => {
//         return Subscriber.create({
//             name: "Jon",
//             email: "jon@jonwexler.com",
//             zipCode: "12345"
//         });
//     })
//     .then(subscriber => {
//         console.log(`Created Subscriber: ${subscriber.getInfo()}`);
//     })
//     .then(() => {
//         return Subscriber.findOne({
//             name: "Jon"
//         });
//     })
//     .then(subscriber => {
//         testSubscriber = subscriber;
//         console.log(`Found one subscriber: ${subscriber.getInfo()}`);
//     })
//     .then(() => {
//         return Course.create({
//             title: "Tomato Land",
//             description: "Locally farmed tomatoes only",
//             zipCode: 12345,
//             items: ["cherry", "heirloom"]
//         });
//     })
//     .then(course => {
//         testCourse = course;
//         console.log(`Created course: ${course.title}`);
//     })
//     .then(() => {
//         testSubscriber.courses.push(testCourse);
//         testSubscriber.save();
//     })
//     .then(() => {
//         return Subscriber.populate(testSubscriber, "courses");
//     })
//     .then(subscriber => console.log(subscriber))
//     .then(() => {
//         return Subscriber.find({
//             courses: mongoose.Types.ObjectId(testCourse._id)
//         });
//     })
//     .then(subscriber => console.log(subscriber));

/**********USER*********/
// const mongoose = require("mongoose");
// const User = require("./models/user");
// const Subscriber = require("./models/subscriber");
// let testUser;
// let targetSubscriber;

// mongoose.connect(
//     "mongodb://0.0.0.0:27017/recipe_db",
//     { useNewUrlParser: true }
// );

// //creating subscriber
// Subscriber.create({
//     name: "Test User",
//     email: "testUser@gmail.com",
//     zipCode: "12345"})
//     .then(subscriber => console.log(`Subscriber: ${subscriber}`))
//     .catch(error => console.log(error.message));

// //creating user (linked to subscriber)    
//     User.create({
//       name: {
//         first: "Test",
//         last: "User",
//       },
//       email: "testUser@gmail.com",
//       password: "testing",
//     })
//       .then((user) => {
//         testUser = user;
//         //find and link user to their subscribed account using email address
//         return Subscriber.findOne({
//           email: testUser.email,
//         });
//       })
//       .then((subscriber) => {
//         if (subscriber) {
//           // Link the subscriber to the user (using the subscriber's id)
//           testUser.subscribedAccount = subscriber._id;
//           return testUser.save();
//         } else {
//           throw new Error('Subscriber not found');
//         //   console.error(err);
//         }
//       })
//       .then((updatedUser) => {
//         console.log(`Updated User: ${updatedUser}`);
//         console.log("USER UPDATED!");
//       })
//       .catch((error) => console.log(error.message));

// User.create({
//     name: {
//         first: "Jon",
//         last: "Wexler"
//     },
//     email: "jon@jonwexler.com",
//     password: "pass123"
// })
//     .then(user => testUser = user)
//     .catch(error => console.log(error.message));

// //setting our target subscriber
// Subscriber.findOne({
//     email: testUser.email
// })
//     .then(subscriber => {
//         targetSubscriber = subscriber
//         console.log(targetSubscriber);
//     });

//creating user
// User.create({
//     name: {
//         first: "Jon",
//         last: "Wexler"
//     },
//     email: "jon@jonwexler.com",
//     password: "pass123"
// })
//     .then(user => {
//         testUser = user;
//         return Subscriber.findOne({
//             email: user.email
//         });
//     })
//     .then(subscriber => {
//         //connecting user to their subscription
//         //user will be a subscriber as well
//         testUser.subscribedAccount = subscriber;
//         testUser.save().then(user => console.log("user updated"));
//     })
//     .catch(error => console.log(error.message));

const mongoose = require("mongoose");
const Subscriber = require("./models/subscriber");
const User = require("./models/user");

mongoose.connect("mongodb://0.0.0.0:27017/recipe_db", {
    useNewUrlParser: true,
});

mongoose.Promise = global.Promise;

//Create a Subscriber
Subscriber.create({
    name: "Test User",
    email: "testUser7@gmail.com",
    zipCode: "12345"
})
    .then(subscriber => console.log(`Subscriber: ${subscriber}`))
    .catch(error => console.log(error.message));

//Create a User
let testUser;

User.create({
    name: {
        first: "Test",
        last: "User",
    },
    email: "testUser7@gmail.com",
    password: "testing",
})
    .then((user) => {
        testUser = user;
        return Subscriber.findOne({
            email: testUser.email,
        });
    })
    .then((subscriber) => {
        if (subscriber) {
            // Link the subscriber to the user
            testUser.subscribedAccount = subscriber._id;
            return testUser.save();
        } else {
            throw new Error('Subscriber not found');
        }
    })
    .then((updatedUser) => {
        console.log(`Updated User: ${updatedUser}`);
        console.log("USER UPDATED!");
    })
    .catch((error) => console.log(error.message));