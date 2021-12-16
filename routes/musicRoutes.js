const router = require('express').Router()
const { Music } = require('../models')

// GET all musics
router.get('/musics', (req, res) => Music.findAll()
  .then(musics => res.json(musics))
  .catch(err => console.log(err)))

// POST one music
router.post('/musics', (req, res) => Music.create(req.body)
  .then(music => res.json(music))
  .catch(err => console.log(err)))

// PUT one music
router.put('/musics/:id', ({ params: { id }, body }, res) => Music.update(body, { where: { id } })
  .then(() => res.sendStatus(200))
  .catch(err => console.log(err)))

// DELETE one music
router.delete('/musics/:id', ({ params: { id } }, res) => Music.destroy({ where: { id } })
  .then(() => res.sendStatus(200))
  .catch(err => console.log(err)))

module.exports = router
