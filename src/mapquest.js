const fetch = require('node-fetch')

const { MAP_KEY } = process.env
const API_URL = `https://www.mapquestapi.com/geocoding/v1/address?key=${MAP_KEY}&location=Denver+CO`

const getLatLon = async query => {
  const url = new URL(API_URL)
  // url.searchParams.set('key', MAP_KEY)
  // url.searchParams.set('location', query)
  debugger;

  const response = await fetch(url)
  return response

  // const {
  //   Response: success,
  //   Error: error,
  //   ...trail
  // } = await response.json()

  // if (success === 'True') {
  //   return trail
  // }

  // throw new Error(error)

  // const response = await fetch(url)
  // const {
  //   Response: success,
  //   Search: searchResults
  // } = await response.json()

  // return success === 'True' ? searchResults : {'abc':1234, 'key': MAP_KEY, 'url':API_URL , 'success':success}
}


module.exports = { getLatLon }