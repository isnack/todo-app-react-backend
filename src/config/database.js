const mongoose = require("mongoose");
require("dotenv").config();
mongoose.Promise = global.Promise;
module.exports = mongoose.connect(
  `mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@todo-elddu.mongodb.net/test?retryWrites=true&w=majority`,
  { useNewUrlParser: true }
);
