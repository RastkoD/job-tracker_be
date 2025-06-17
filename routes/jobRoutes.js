const { getAllJobs } = require("../services/jobService");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const jobs = await getAllJobs();
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
