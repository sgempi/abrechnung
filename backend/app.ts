import MongoStore from 'connect-mongo'
import cors from 'cors'
import express, { Request as ExRequest, Response as ExResponse } from 'express'
import session from 'express-session'
import mongoose from 'mongoose'
import swaggerUi from 'swagger-ui-express'
import webpush from 'web-push'
import { Subscription } from '../common/types.js'
import auth from './auth.js'
import { errorHandler } from './controller/error.js'
import { connectDB } from './db.js'
import { RegisterRoutes } from './dist/routes.js'
import swaggerDocument from './dist/swagger.json' assert { type: 'json' }
import i18n from './i18n.js'
import { checkForMigrations } from './migrations.js'
await connectDB()
await checkForMigrations()
const app = express()

app.use(express.json({ limit: '2mb' }))
app.use(express.urlencoded({ limit: '2mb', extended: true }))
app.use(
  cors({
    credentials: true,
    origin: [process.env.VITE_FRONTEND_URL, process.env.VITE_BACKEND_URL]
  })
)

app.use(
  session({
    store: MongoStore.create({ client: mongoose.connection.getClient() }),
    secret: process.env.COOKIE_SECRET ? process.env.COOKIE_SECRET : 'secret',
    cookie: {
      maxAge: 2 * 24 * 60 * 60 * 1000,
      secure: false,
      sameSite: 'strict'
    },
    resave: true,
    saveUninitialized: false,
    name: i18n.t('headlines.title')
  })
)

// würde Sinn ergeben das alles noch auszulagern in die zugehörige Datei
app.post('/subscribe', (req, res) => {
  let subscription: Subscription = req.body
  if (subscription) {
    console.log('subscribed:', subscription)
  }
  res.status(201).json({ subscription: subscription }) // damit im frontend die subscription mit dem Nutzer verknüpft werden kann
})

const privateKey = '0atvpnBQ73eO_-oXS5u4E7J58WT4H9D9TPbFP6UzBWY'
const publicKey = 'BKErXryGQvwdIA46Htyy8NXKiF9RiDNkTthBZwGukC7-4rJHAH9n0ZH5D14F1A8vwB-Ou7JiToZOL0jQgT60zMc'
webpush.setVapidDetails(process.env.VITE_FRONTEND_URL, publicKey, privateKey)

// getting the subscriptions of one user to send notifcation to all devices of the user
export function sendPushNotification(title: String, body: String, subscriptions: Subscription[]) {
  let payload = {
    title: title,
    body: body
  }
  for (let i = 0; i < subscriptions.length; i++) {
    webpush
      .sendNotification(subscriptions[i], JSON.stringify(payload))
      .then((response) => console.log('Benachrichtigung gesendet:', response))
      .catch((error) => console.error('Fehler beim Senden der Benachrichtigung:', error))
  }
}

app.use(auth)

if (process.env.NODE_ENV === 'development') {
  app.use('/docs', swaggerUi.serve, async (_req: ExRequest, res: ExResponse) => {
    return res.send(swaggerUi.generateHTML(swaggerDocument))
  })
}

RegisterRoutes(app)

app.use(errorHandler)

export default app
