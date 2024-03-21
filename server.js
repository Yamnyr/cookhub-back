const express = require('express')
const cors = require ('cors')

const databaseRoute = require('./routes/databaseRoute')
// const modeleRoute = require('./routes/modeleRoute')
const utilisateurRoute = require('./routes/utilisateurRoute')
// const commandeRoute = require('./routes/commandeRoute')
// const optionRoute = require('./routes/optionRoute')
const recetteRoute = require('./routes/recetteRoute')
const regionRoute = require('./routes/regionRoute')
const typePlatRoute = require('./routes/typePlatRoute')
const app = express()

app.use(express.json())
app.use(cors())

app.use('/database', databaseRoute)
// app.use('/modele', modeleRoute)
app.use('/utilisateur', utilisateurRoute)
// app.use('/commande', commandeRoute)
// app.use('/option', optionRoute)
app.use('/recette', recetteRoute)
app.use('/region', regionRoute)
app.use('/typeplat', typePlatRoute)


app.listen(8000, ()=>{
    console.log("serveur lancé sur le port 8000");
})