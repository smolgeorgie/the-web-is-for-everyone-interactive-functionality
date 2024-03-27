// Importeer het npm pakket express uit de node_modules map
import express from 'express'

// Importeer de zelfgemaakte functie fetchJson uit de ./helpers map
import fetchJson from './helpers/fetch-json.js'

// Maak een nieuwe express app aan
const app = express()

// Stel ejs in als template engine
app.set('view engine', 'ejs')

// Stel de map met ejs templates in
app.set('views', './views')

// Gebruik de map 'public' voor statische resources, zoals stylesheets, afbeeldingen en client-side JavaScript
app.use(express.static('public'))

app.use(express.urlencoded({ extended: true }))

// Stel het poortnummer in waar express op moet gaan luisteren
app.set('port', process.env.PORT || 8000)


const apiUrl = 'https://fdnd-agency.directus.app/items'


// Maak een GET route voor de index
app.get('/', async function (request, response) {
  // Render index.ejs uit de views map
  const sdgData = await fetchJson(apiUrl + '/hf_sdgs')
  response.render('index', { sdgs: sdgData.data });
});


// Start express op, haal daarbij het zojuist ingestelde poortnummer op
app.listen(app.get('port'), function () {
  // Toon een bericht in de console en geef het poortnummer door
  console.log(`Application started on http://localhost:${app.get('port')}`)
})


// POST route SDG
app.post('/', (req, res) => { //post route naar / met response request
  console.log(req.body); // log request body in console
  const sdgId = req.body.sdg; // haal sdg uit request body
  if (sdgId) {
    res.redirect(`/score?sdgIds=${sdgId}`); // redirect naar scoreboard net de sdgId
  } else {
    res.redirect('/?error=true'); // redirect naar home met error
  }
});

