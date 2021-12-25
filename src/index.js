const express = require("express")

const app = express()

app.get('/api', (req,res) => {
    res.json({msg: 'Home'})
})

app.get('/api/hello', (req,res) => {
    res.json({msg: 'Hello'})
})

app.get('/api/dashboard', (req,res) => {
    res.json({msg: 'dashboard'})
})

app.listen(3000, () => console.log('Running on port 3000'))

