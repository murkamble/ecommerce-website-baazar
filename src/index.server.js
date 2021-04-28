const express = require('express')
const env = require('dotenv')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

// environment variable or you can say constants
const app = express()
env.config()
app.use(express.json())

// mongoose Databases connection string
mongoose.connect(
  // 'mongodb://localhost:27017/baazar', 
  'mongodb+srv://root:root@cluster0.a0xhf.mongodb.net/inBaazaar?retryWrites=true&w=majority',
  {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
  }
).then(() => {
  console.log('Databases Connected.')
})

// 
// app.get("/", (req, res) => {
//     res.status(200).json({ message: 'Welcome, server side.' })
// });

// routes
const authRoutes = require('./routes/auth')
const adminAuthRoutes = require('./routes/admin/auth')
const categoryRoutes = require('./routes/category')
const productRoutes = require('./routes/product')

// api
app.use('/api', authRoutes)
app.use('/api', adminAuthRoutes)
app.use('/api', categoryRoutes)
app.use('/api', productRoutes)

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})