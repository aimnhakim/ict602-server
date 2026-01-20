require("dotenv").config();
const express = require("express");
const app = express();

const connectDB = require("./config/db");

app.use(express.json());
app.use(express.static("public"));


// CONNECT DATABASE
connectDB();

// ROUTES
const testRoutes = require("./routes/test.routes");
const locationRoutes = require("./routes/location.routes");
const locationsRoutes = require("./routes/locations.routes");

app.use("/api", testRoutes);
app.use("/api", locationRoutes);
app.use("/api", locationsRoutes);

app.get("/", (req, res) => {
  res.send("ICT602 Server is running");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
