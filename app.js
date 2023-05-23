import express from 'express'
import {} from 'dotenv/config'
import routes from './routes/routes.js'
import connectDB from './db/connect.js'
import bodyParser from 'body-parser'


const app = express()


//SET UP MIDDLEWARE BEFORE ROUTES

//LOAD ROUTES INTO MAIN FILE
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use('/', routes)



const PORT = process.env.PORT || 5000  //DEFINE PORT


const init = async () => {
    try {
        await connectDB(process.env.DB)
        console.log('Connected to database...')
        app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
    } catch (err) {
        console.log(err)
    }
}

init()