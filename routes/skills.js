const express = require('express');
const router = express.Router();
const skillsController = require('../controllers/skills.js');

// Get all skills //
router.get('/', skillsController.index);

// Add a new skill
router.get('/new', skillsController.new);
router.post('/', skillsController.addSkill);

// Get one skill //
router.get('/:id', skillsController.show);

//delete function //
router.delete('/:id', skillsController.remove);



module.exports = router;