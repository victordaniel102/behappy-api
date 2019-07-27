const router = require('express').Router();
const Tasks = require('../model/Tasks');

router.post('/', async (req, res) => {
    const tasks = new Tasks ({
        title: req.body.title,
        description: req.body.description
    });
    try {
        const savedTask = await tasks.save();
        res.send(savedTask);
    } catch (err) {
        res.status(400).send(err);
    }
});

router.get('/', async (req, res) => {
    const taskList = await Tasks.find().select('-__v  -_id');
    if (!taskList) res.status(400).send('Nenhum registro encontrado!');

    res.send(taskList);
});

module.exports = router;