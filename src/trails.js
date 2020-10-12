const express = require('express')
const mapquest = require('./mapquest')

const router = express.Router()

router.get('/', async(req, res, next) => {
  try{
    // if (!req.query.location) throw new Error('Search param (`location`) required')

    res.json(await mapquest.getLatLon())
    // res.json(await mapquest.getLatLon(req.query.location))
  } catch (error) {
    debugger;
    res.json({ error: error.message })
  }
})

module.exports = router