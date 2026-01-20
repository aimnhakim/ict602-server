const mongoose = require("mongoose");

const LocationSchema = new mongoose.Schema({
  name: String,
  lat: Number,
  lng: Number,
  address: String,
  userAgent: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Location", LocationSchema);
