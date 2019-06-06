const express = require('express')
const Movie = require('../models/movie')
const router = new express.Router()

router.post('/movies', async (req, res) => {
  const movie = new Movie(req.body)

  try {
    await movie.save()
    res.status(201).send(movie)
  } catch (e) {
    res.status(400).send(e)
  }
})

router.get('/movies', async (req, res) => {
  try {
    const movies = await Movie.find({})
    res.send(movies)
  } catch (e) {
    res.status(500).send()
  }
})

router.get('/movies/:id', async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id)
    if (!movie) {
      return res.status(404).send()
    }

    res.send(movie)
  } catch (e) {
    res.status(500).send()
  }
})

router.patch('/movies/:id', async (req, res) => {
  try {
    const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
    if (!movie) {
      return res.status(404).send()
    }

    res.send(movie)
  } catch (e) {
    res.status(500).send()
  }
})

router.delete('/movies/:id', async (req, res) => {
  try {
    const movie = await Movie.findByIdAndDelete(req.params.id)
    if (!movie) {
      return res.status(404).send()
    }

    res.send(movie)
  } catch (e) {
    res.status(500).send()
  }
})

module.exports = router

