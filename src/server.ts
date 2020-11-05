require('dotenv').config()
import { connectDB } from './utils/database'
import app from './app'

const port = process.env.PORT || 3000

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log('-> Database Connected')
      console.log(
        ` -> Microservice Account API started at http://localhost:${port}/`
      )
    })
  })
  .catch((err: string) => {
    console.log(err)
  })
