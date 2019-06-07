const express = require('express')
const path = require('path')
require('dotenv').config()
require('./db/mongoose')
const movieRouter = require('./routers/movie')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 3100

app.use(express.json())
app.use(cors())
app.use(express.static(path.join(__dirname, "client", "build")))
app.use(movieRouter)

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"))
})

app.listen(port, () => {
  console.log('Server is up on port ' + port)
})