import express from "express";
import mainRoutes from "./routes/main.routes.js";
import { PORT, HOST } from "./common.js";

const app = express()

app.use(mainRoutes)

app.listen(PORT, () => {
  console.log(`Example app listening on ${HOST}`)
})