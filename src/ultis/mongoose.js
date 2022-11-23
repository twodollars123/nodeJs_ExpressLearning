module.exports = {
  arrayToObject: (array) => {
    return array.map((item) => item.toObject());
  },

  mongooseToObject: function (mongoose) {
    return mongoose ? mongoose.toObject() : mongoose;
  },
};
