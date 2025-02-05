const { createTask, fetchTask, modifyTaskById, deleteTaskById } = require('../Controllers/TodoController');

const router = require('express').Router();

// to get all the tasks
router.get('/', fetchTask);

// to create a new task
router.post('/', createTask);

// to update a new task
router.put('/:id', modifyTaskById);

// to delete a new task
router.delete('/:id', deleteTaskById);

module.exports = router;