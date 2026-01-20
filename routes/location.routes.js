const express = require("express");
const router = express.Router();

router.post("/location", (req, res) => {
  console.log("📍 Location received:");
  console.log(req.body);

  res.json({
    success: true,
    message: "Location received"
  });
});

module.exports = router;
