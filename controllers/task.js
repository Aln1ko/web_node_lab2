const {ActiveTask,CompletedTask} = require('../models/task.js');

// Отримання всіх авто
async function getActiveTasks(req, res) {
    //console.log(req);
    try {
        const tasks = await ActiveTask.find();
        //console.log(tasks);

        const newTasks = tasks.map(task => ({
            ...task._doc,id:task._id
        }))
        res.json(newTasks);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

// Створення нового авто
async function createActiveTask(req, res) {
    const task = new ActiveTask({
        tittle: req.body.tittle,
        body: req.body.body
    });

    try {
        const newActiveTask = await task.save();
        res.status(201).json(newActiveTask);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}


// Отримання одного авто
async function getActiveTask(req, res) {
    console.log("\n\n\n req is \n");
    console.log(req);
    //task.id = task._id;
    res.json(res.task);
}


// Видалення одного авто
async function deleteActiveTask(req, res) {
    console.log("1")
    const taskid = req.query.id;
    if (!taskid) {
       console.log('Task not found');
    }
    try {
        console.log("2")
        await res.task.remove();
        res.json({ message: 'Task deleted' });
    } catch (err) {
        console.log("3")
        res.status(500).json({ message: err.message });
    }
}

async function updateActiveTask(req, res) {
    try {
        const updatedActiveTask = await ActiveTask.findByIdAndUpdate(
            req.params.id, // id задачи для обновления
            {
                title: req.body.title,
                body: req.body.body
            },
            { new: true } // параметр new: true гарантирует, что вернется обновленный объект
        );

        if (!updatedActiveTask) {
            return res.status(404).json({ message: 'Task not found' });
        }

        res.json(updatedActiveTask);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}




// Отримання всіх авто
async function getCompletedTasks(req, res) {
    try {
        const tasks = await CompletedTask.find();
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

// Створення нового авто
async function createCompletedTask(req, res) {
    const task = new CompletedTask({
        tittle: req.body.tittle,
        body: req.body.body
    });

    try {
        const newCompletedTask = await task.save();
        res.status(201).json(newCompletedTask);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

// Отримання одного авто
async function getCompletedTask(req, res) {
    res.json(res.task);
}

// Видалення одного авто
async function deleteCompletedTask(req, res) {
    try {
        await res.task.remove();
        res.json({ message: 'Task deleted' });
    } catch (err) {
        es.status(500).json({ message: err.message });
    }
}

async function updateCompletedTask(req, res) {
    try {
        const updatedCompletedTask = await CompletedTask.findByIdAndUpdate(
            req.params.id, // id задачи для обновления
            {
                title: req.body.title,
                body: req.body.body
            },
            { new: true } // параметр new: true гарантирует, что вернется обновленный объект
        );

        if (!updatedCompletedTask) {
            return res.status(404).json({ message: 'Task not found' });
        }

        res.json(updatedCompletedTask);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}



module.exports = {
    getActiveTasks,
    createActiveTask,
    getActiveTask,
    deleteActiveTask,
    updateActiveTask,

    getCompletedTasks,
    createCompletedTask,
    getCompletedTask,
    deleteCompletedTask,
    updateCompletedTask
};
