const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactreadinglist"
);
const userSeed = [
    {
        username: "Tester",
        password: "PASSWORD",
        email: "test@123.com"
    },
    {
        username: "Admin",
        password: "admin1",
        email: "1@2.com"
    }
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });