const express = require("express");
const router = express.Router();
const Location = require("../models/Location");

router.post("/location", async (req, res) => {
  try {
    const { name, lat, lng, address } = req.body;
    const userAgent = req.headers["user-agent"] || "Unknown";

    await Location.create({
      name,
      lat,
      lng,
      address,
      userAgent
    });

    res.json({ success: true, message: "Location saved to database" });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;
