const {
  getAllJobs,
  addJob,
  deleteJobById,
  updateJob,
} = require("../services/jobService");
const express = require("express");
const router = express.Router();

const auth = (req, res, next) => {
  const password = req.headers["x-app-password"];
  if (password !== process.env.APP_PASSWORD) {
    return res.status(401).json({ error: "Unauthorized access" });
  }
  next();
};

router.get("/", async (req, res) => {
  try {
    const jobs = await getAllJobs();
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/", auth, async (req, res) => {
  try {
    const data = await addJob(req.body);
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete("/:id", auth, async (req, res) => {
  try {
    const id = req.params.id;
    await deleteJobById(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put("/:id", auth, async (req, res) => {
  try {
    const updatedJob = await updateJob(req.params.id, req.body);
    res.json(updatedJob[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
