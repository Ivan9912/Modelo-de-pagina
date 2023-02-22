const express = require('express')
import {dirname, join} from 'path'
import {fileURLToPath} from 'url'
import indexRoutes from './routes/routes.js'
import logger from 'morgan'
const port = 3000 

const app = express()
app.use(logger('dev'))

const __dirname = dirname(fileURLToPath(import.meta.url))
//console.log(join(__dirname, 'views'))

app.set('views', join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(indexRoutes)

app.use(express.static(join(__dirname, 'public')))

app.listen(process.env.PORT || port)
console.log('Server is listening on port', process.env.PORT || port)