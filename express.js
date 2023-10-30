const express = require('express')

const app = express()
const port = process.env.PORT || 3504

app.get('/', (req, res) => {
  res.send('Hi fromAPI Users')
})

app.listen(port, async () => {
  console.log(`Example app listening on port ${port}`) 
})