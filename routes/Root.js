const router = require('express').Router();

router.get('/', async (req, res) => {
    res.send({
		version: "0.0.1",
		title: "API do App Lista de tarefas"
	});
});

module.exports = router;