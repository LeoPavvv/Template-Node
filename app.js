import express, {json, urlencoded} from 'express'
import cors from 'cors'


const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.use(express.urlencoded({extended:true}))

app.use(json())
app.use(cors())

app.disable('x-powered-by')

app.use((req, res, next) => {
    const token = req.cookies.access_token

    if (!req.session) {
        req.session = {}
    }

    req.session.user = null

    if (token) {
        try {
            const data = jwt.verify(token, SECRET_JWT_KEY)
            console.log("Token verificado:", data)
            req.session.user = data
        } catch (error) {
            console.error('Error al verificar el token:', error)
        }
    }

    next()
})

app.get('/', (req, res) => {
    
})


app.listen(1234, () => {
    console.log(`Servidor escuchando en http://localhost:1234`)
})