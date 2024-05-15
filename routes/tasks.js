const express = require('express');
const router = express.Router();

const {getActiveTasks,
    createActiveTask,
    getActiveTask,
    deleteActiveTask,
    updateActiveTask,

    getCompletedTasks,
    createCompletedTask,
    getCompletedTask,
    deleteCompletedTask,
    updateCompletedTask } =
require('../controllers/task.js');

// Отримання всіх авто
router.get('/activetasks', getActiveTasks);

// Створення нового авто
router.post('/activetasks', createActiveTask);

// Отримання одного авто
router.get('/activetasks/:id', getActiveTask);

// Видалення одного авто
router.delete('/activetasks/:id', deleteActiveTask);

router.put('/activetasks/:id', updateActiveTask);


// Отримання всіх авто
router.get('/complitedtasks', getCompletedTasks);

// Створення нового авто
router.post('/complitedtasks', createCompletedTask);

// Отримання одного авто
router.get('/complitedtasks/:id', getCompletedTask);

// Видалення одного авто
router.delete('/complitedtasks/:id', deleteCompletedTask);

router.put('/complitedtasks/:id', updateCompletedTask);

module.exports = router;
