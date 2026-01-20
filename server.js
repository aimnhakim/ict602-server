const express = require("express");
const app = express();

app.use(express.json());

// ROUTES
const testRoutes = require("./routes/test.routes");
const locationRoutes = require("./routes/location.routes");

app.use("/api", testRoutes);
app.use("/api", locationRoutes);

app.get("/", (req, res) => {
  res.send("ICT602 Server is running");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
