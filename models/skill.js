// Skills models (including instances) //
const skills = [
    {
      name: 'JS',
      description: 'The greatest programming language ever', 
      level: 5
    },
    {
      name: 'HTML',
      description: 'Hyper Text Markup Language to structure', 
      level: 3
    },
    {
      name: 'CSS',
      description: 'CSS handles style, makes the web beautiful 🤩', 
      level: 9
    }
  ]


module.exports = {
    getAll,
    getOne,
    create,
    remove
}

function remove(id) {
  skills.splice(id, 1)
}

function create(skill) {
  skills.push(skill);
}

function getAll() {
    return skills;
}

function getOne(id) {
  return skills[id - 1];
}