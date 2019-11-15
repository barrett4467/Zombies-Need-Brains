var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: {
    type: String,
    trim: true,
    unique: true,
    required: "A username is required"
  },
  password: {
    type: String,
    trim: true,
    required: true,
    validate: [
      function(input){
        return input.length >= 6;
      },
      "Password must be longer than 5 characters"
    ]
  },
  email: {
    type: String,
    unique: true,
    match: [/.+\@.+\..+/, "Enter a valid Email"]
  },
  userCreated: {
    type: Date,
    default: Date.now
  }
});

var User = mongoose.model("User", UserSchema);

module.exports = User;