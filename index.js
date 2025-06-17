const jobRoutes = require("./routes/jobRoutes");
const express = require("express");

const app = express();
const PORT = 3000;
app.use(jobRoutes);

app.listen(PORT, () => {
  console.log(`local port = ${PORT}`);
});
