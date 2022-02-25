const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const app = express()

require('dotenv').config();
 
app.use(cors())
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(`${__dirname}/src`))

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true, useUnifiedTopology: true }, () => {
    console.log('Database Connected')
})

const appointmentRoute = require('./routes/appointment.routes')
const managerRoute = require('./routes/manager.routes')

app.use('/api/appointments', appointmentRoute)
app.use('/api/managers', managerRoute)

app.listen(process.env.PORT, () => {
    console.log(`up and running at http://localhost:${process.env.PORT}`);
})