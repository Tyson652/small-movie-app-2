const mongoose = require('mongoose')

const Movie = mongoose.model('Movie', {
  title: {
    type: String,
    required: true, 
    trim: true
  }, 
  description: {
    type: String,
    trim: true
  },
  rating: {
    type: Number,
    trim: true
  }
})

module.exports = Movie