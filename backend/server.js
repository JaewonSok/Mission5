require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workout')
const metroRoutes = require('./routes/metro')
// Express App
const app = express()

app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//app.use('/api/workouts', workoutRoutes)
app.use('/api/metros', metroRoutes)

// Connect to DB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // Listen for request
        app.listen(process.env.PORT, () => {
            console.log('Connected to DB and listening on port 4000')
        })
    })
    .catch((error) => {
        console.log(error);
    })

