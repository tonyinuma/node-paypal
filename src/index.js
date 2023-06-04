import express from "express";
import mainRoutes from "./routes/main.routes.js";

const app = express()
const port = 3000

app.use(mainRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})