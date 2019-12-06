require('dotenv').config()
const express = require('express');
const morgan = require('morgan');
const app = express();

console.log(process.env.API_TOKEN)

app.use(morgan('dev'));

//valid types of pokemon
const validTypes = [`Bug`, `Dark`, `Dragon`, `Electric`, `Fairy`, `Fighting`, `Fire`, `Flying`, `Ghost`, `Grass`, `Ground`, `Ice`, `Normal`, `Poison`, `Psychic`, `Rock`, `Steel`, `Water`]

app.use(function validateBearerToken(req, res, next) {
    const apiToken = process.env.API_TOKEN
    const authToken = req.get('Authorization')

    console.log('validate bearer token middleware')

    if (!authToken || authToken.split(' ')[1] !== apiToken){
        return res.status(401).json({ error: 'Unauthorized request' })
    }
    //move to the next middleware
    next()
})

function handleGetTypes(req, res) {
    res.json(validTypes)
}

app.get('/types', handleGetTypes)

function handleGetPokemon(req, res) {
    res.send('Hello, Pokemon!')
}

app.get('/pokemon', handleGetPokemon)




const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`)
})