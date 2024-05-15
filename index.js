const express =require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

app.use(cors());

require('./db');

const tasksRouter = require('./routes/tasks.js');
app.use('/',tasksRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})
