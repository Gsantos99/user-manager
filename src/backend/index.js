import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv';

const app = express()
const port = 8080

app.use(express.json())
app.use(cors())

app.listen(port, () => {
  console.log('Server is running on port 8080')
})
