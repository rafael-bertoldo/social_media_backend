import 'dotenv/config'
import { app } from './app'

const PORT: number = Number(process.env.PORT) || 3333

app.listen(PORT, (): void => {
  console.log(
    `App running at port ${PORT}`
  )
})