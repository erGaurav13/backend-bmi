const mongoose = require("mongoose");

const connectToMongodb = mongoose.connect("mongodb+srv://r:f@cluster0.h1xl8c4.mongodb.net/bmi");

module.exports = {
  connectToMongodb,
};
