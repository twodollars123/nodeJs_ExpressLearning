const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect("mongodb://localhost:27017/demo");
    console.log("success!!");
  } catch (error) {
    console.log("failure!");
  }
}

module.exports = { connect };
