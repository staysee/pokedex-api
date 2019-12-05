require('dotenv').config()
const express = require('express');
const morgan = require('morgan');
const app = express();

console.log(process.env.API_TOKEN)

app.use(morgan('dev'));

//valid types of pokemon
const validTypes = [`Bug`, `Dark`, `Dragon`, `Electric`, `Fairy`, `Fighting`, `Fire`, `Flying`, `Ghost`, `Grass`, `Ground`, `Ice`, `Normal`, `Poison`, `Psychic`, `Rock`, `Steel`, `Water`]

function handleGetTypes(req, res) {
    res.json(validTypes)

}

app.get('/types', handleGetTypes)

const PORT = 8000;

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`)
})