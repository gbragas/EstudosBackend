const express = require('express')
const app = express()


app.get('/', (req, res) => {
    console.log("rodando na rota /")
})

app.get('/braga', (req, res) => {
    console.log("rodando na rota /braga")
})


app.listen(3000, () => {
    console.log("Rodando na portaa 3000")
})
