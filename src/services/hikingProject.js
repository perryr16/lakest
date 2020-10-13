const mapquest = require('./mapquest')
const fetch = require('node-fetch')
const url = require('url')


const { TRAIL_KEY } = process.env 
const API_URL = 'https://www.hikingproject.com/data/get-trails'

const getTrails = async (req) => {
  const location = url.parse(req.url, true).query.location;
  const keyword = url.parse(req.url, true).query.keyword || '';
  const lon = await mapquest.getLon(location)
  const lat = await mapquest.getLat(location)
 
  const urlTrail = new URL(API_URL)
  urlTrail.searchParams.set('key', TRAIL_KEY)
  urlTrail.searchParams.set('lat', lat)
  urlTrail.searchParams.set('lon', lon)
  urlTrail.searchParams.set('maxResults', 500)


  const response = await fetch(urlTrail)
    .then(response => response.json())


  // const keyResults = apiResults.trails.filter(trail => trail.name.includes(keyword))
  const keyResults = response.trails.filter(trail => trail.name.toLowerCase().includes(keyword))

  return {'resultsLength': keyResults.length, 'results':keyResults}
}

module.exports = { getTrails }
