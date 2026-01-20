const express = require("express");
const router = express.Router();
const Location = require("../models/Location");

// GET /api/locations  (list latest 200)
router.get("/locations", async (req, res) => {
  try {
    const data = await Location.find()
      .sort({ createdAt: -1 })
      .limit(200);

    res.json(data);
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;
