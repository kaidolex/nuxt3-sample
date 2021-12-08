import express, {Request, Response} from 'express'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true}))

app.get('/test', (req:Request, res:Response) => {

    return res.json({
        message: "hello from server",
        code: "12300"
    })
})

export default app