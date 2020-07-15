const express = require('express')
require('./db/mongoose')
const userRouter = require('./routes/user')
const flightRouter=require('./routes/flight')

const app = express()
const port = process.env.PORT || 3000


app.use(express.json())
 app.use(userRouter)
app.use(flightRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

const Flight = require('./models/flight')
const User = require('./models/user')
const ticket=require('./models/ticket')

