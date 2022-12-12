// imports
import express from 'express'
import path from 'path'

// import products from "./data/"
// const express = require('express')
import dotenv from 'dotenv'
import connectDB from './config/db.js'
// import items from './data/Data.js'
import Dashboard from './models/dashboardModel.js'
// import classes from './data/ClassData.js'
import studentRoutes from './routes/studentRoutes.js'
import adminRoutes from './routes/adminRoutes.js'
import teacherRoutes from './routes/teacherRoutes.js'
import staffRoutes from './routes/staffRoutes.js'
import Admin from './models/adminModel.js'
import bcrypt from 'bcryptjs'

// const items = require('./data/Data')
// const classes = require('./data/ClassData')
// d0t
dotenv.config()
connectDB()
const app = express()
app.use(express.json())

import swaggerUi from 'swagger-ui-express'
// import swaggerJSDoc from 'swagger-jsdoc'
import swaggerDocument from './swagger.json'

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "Library API",
      version: '1.0.0',
    },
  },
  apis: ["app.js"],
};

// const swaggerDocs = swaggerJSDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

/**
 * @swagger
 * /books:
 *   get:
 *     description: Get all books
 *     responses:
 *       200:
 *         description: Success
 * 
 */
app.get('/dashboard', async (req, res) => {
  const items = await Dashboard.find()
  console.log(items)
  res.json(items)
})

app.use('/api/students', studentRoutes)
app.use('/api/login', adminRoutes)
app.use('/api/teachers', teacherRoutes)
app.use('/api/staffs', staffRoutes)
// app.get('/api/config/cloudinary', (req, res) => {
//   res.send(process.env.CLOUDINARY_URL)
// })
// app.get('/api/config/cloudinarypreset', (req, res) => {
//   res.send(process.env.CLOUDINARY_UPLOAD_PRESET)
// })
const __dirname = path.resolve()
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')))
  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  )
} else {
  app.get('/', async (req, res) => {
    res.send('API running...')
  })
}
// (async function() {
//   const salt = await bcrypt.genSalt(12);
//   const encryptedPassword = await bcrypt.hash("12345678", salt);
//   await Admin.create({
//     // name: {
//     //   type: String,
//     //   required: true,
//     // },
//     // email: {
//     //   type: String,
//     //   required: true,
//     // },
//     // image: {
//     //   type: String,
//     //   required: true,
//     // },
//     // password: {
//     //   type: String,
//     //   required: true,
//     // },
//     // isAdmin: {
//     //   type: Boolean,
//     //   required: true,
//     //   default: false,
//     // },
//     name : "Admin",
//     email:"admin@gmail.com",
//     image:"safas",
//     password: encryptedPassword,
//     isAdmin: true,
//   })
// })()


app.use((req, res, next) => {
  const error = new Error(`Page Not found -${req.originalUrl}`)
  res.status(404)
  next(error)
})
app.use((err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode
  res.status(statusCode)
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  })
})
const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server is running on port ${PORT}`))
