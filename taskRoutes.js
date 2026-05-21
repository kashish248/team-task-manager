
const express = require('express');
const Task = require('../models/Task');
const auth = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', auth, async (req, res) => {
  const task = new Task(req.body);
  await task.save();
  res.json(task);
});

router.get('/', auth, async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

router.put('/:id', auth, async (req, res) => {
  const updatedTask = await Task.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(updatedTask);
});

module.exports = router;
