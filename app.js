import express from "express"
const app = express()
const port = 3000

import FS from "./data/fs.js"

app.use(express.json());

app.get('/', (req, res) => {
    console.log("Entrou na req /")
    FS.getData()
      .then((data) => {
        res.status(200).send(JSON.parse(data))
      })
      .catch((err) => {
        res.status(400).send({err:err})
      })
})

app.put("/data", (req, res) => {
    const data = req.body
    FS.updateData(data)
      .then((response) => {
        res.status(200).send(response)
      })
      .catch((err) => {
        res.status(400).send({err:err})
      })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})