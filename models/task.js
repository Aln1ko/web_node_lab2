const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    body: { type: String, required: true }
});

const activeTaskModel = mongoose.model('ActiveTask', taskSchema);
const completedTaskModel = mongoose.model('CompletedTask', taskSchema);

module.exports = {
    ActiveTask: activeTaskModel,
    CompletedTask: completedTaskModel
};
