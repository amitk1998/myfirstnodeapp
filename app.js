require('dotenv').config()
console.log(process.env) // remove this after you've confirmed it is working
const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/agepredictor',(req,res)=>{
    res.send('<h2>Hi Amit your age is 21</h2>')
})

app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${process.env.port}`)
})