const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true, unique: true },
  password: { type: String, required: true, trim: true },
  cart:{type:Array,default:[]}
});

const User=mongoose.model("user",userSchema);
module.exports=User;
