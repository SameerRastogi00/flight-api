const express = require('express')
require('./db/mongoose')
const userRouter = require('./routes/user')
// const taskRouter = require('./routers/task')
const flightRouter=require('./routes/flight')

const app = express()
const port = process.env.PORT || 3000

// app.use((req, res, next) => {
//     if (req.method === 'GET') {
//         res.send('GET requests are disabled')
//     } else {
//         next()
//     }
// })

// app.use((req, res, next) => {
//     res.status(503).send('Site is currently down. Check back soon!')
// })

app.use(express.json())
 app.use(userRouter)
// app.use(taskRouter)
app.use(flightRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

const Flight = require('./models/flight')
const User = require('./models/user')
const ticket=require('./models/ticket')

