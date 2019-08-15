const Skill = require('../models/skill');

module.exports = {
    index,
    show,
    new: newSkillPage,
    addSkill,
    remove
}

function addSkill(req, res) {
  Skill.create(req.body);

  res.redirect('/skills');
}

function index(req, res) {
    res.render('skills/index', {
      skills: Skill.getAll()
    });
  }

function show(req, res) {
  let id = req.params.id;
  
  res.render('skills/show', {
      skill: Skill.getOne(id)
  })
}

function newSkillPage(req, res) {
    res.render('skills/new');
}

function remove(req, res) {
  Skill.remove(req.params.id)
  // console.log("req.params.id)"
  res.redirect('/skills')
}