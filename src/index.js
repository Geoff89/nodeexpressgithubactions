const express = require("express")

const app = express()

app.get('/api', (req,res) => {
    res.json({msg: 'Home'})
})

app.get('/api/hello', (req,res) => {
    res.json({msg: 'Hello', status: 200})
})

app.get('/api/dashboard', (req,res) => {
    res.json({msg: 'dashboard', status: 201})
})

app.listen(3000, () => console.log('Running on port 3000'))

