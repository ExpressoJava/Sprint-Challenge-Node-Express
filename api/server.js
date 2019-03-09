const express = require('express')
const server = express();

const projectsDb = require('../data/helpers/projectModel')
const actionsDb = require('../data/helpers/actionModel')

const parser = express.json()

//server.use(json.express())
server.use(parser)

server.get('/', (req, res) => {
  res.json('alive');
})


// Project endpoints 
//GET = read
server.get('/projects', (req, res) => {
  projectsDb.get()
  .then(projects => res.status(200).json(projects))
  .catch(err => {
      res.status(500).json({ message: "Couldn't retrieve projects" })
  })
})

//GET by ID
server.get('/projects/:id', (req, res) => {
  projectsDb.get(req.params.id)
  .then(project => res.status(200).json(project))
  .catch(err => {
      res.status(404).json({ message: "there is no user by this ID" })
  })
})

//GET Project Actions
server.get('/projects/:id/all', (req, res) => {
  projectsDb.getProjectActions(req.params.id)
  .then(projects => res.status(200).json(projects))
  .catch(err => {
      res.status(500).json({ message: "failed to get actions"})
  })
})

module.exports = server; 