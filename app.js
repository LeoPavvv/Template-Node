import express, {json, urlencoded} from 'express'
import cors from 'cors'

import { config as dotenvConfig } from 'dotenv'

import databaseConfig  from './config/database.js'

dotenvConfig()

const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))


app.use(express.urlencoded({extended:true}))
app.use(json())
app.use(cors())
app.disable('x-powered-by')


const ENV = process.env.NODE_ENV || 'development'

const sequelize = new Sequelize(databaseConfig[env].database, databaseConfig[env].username, databaseConfig[env].password, databaseConfig[env])

sequelize.authenticate()
    .then(() => {
        console.log("Conexion a la base de datos realizada con exito")
    })
    .catch((e) => {
        console.error("No se pudo realizar la conexion a la base de datos: ", e)
    })



app.use((req, res, next) => {
    const token = req.cookies?.access_token
    req.session = req.session || { user: null }

    if (token) {
        try {
            const data = jwt.verify(token, process.env.JWT_SECRET)
            req.session.user = data
        } catch (error) {
            console.error('Error al verificar el token:', error.message)
        }
    }
    next()
})


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`)
})
