module.exports = {
  arrayToObject: (array) => {
    return array.map((item) => item.toObject());
  },

  mongooseToObject: (mongoose) => {
    return mongoose ? mongoose.toObject() : mongoose;
  },
};
