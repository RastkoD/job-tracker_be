const jobRoutes = require("./routes/jobRoutes");
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use("/api/jobs", jobRoutes);

app.listen(PORT, () => {
  console.log(`local port = ${PORT}`);
});
