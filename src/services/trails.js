const express = require('express')
const mapquest = require('./mapquest')
const hikingProject = require('./hikingProject')

const router = express.Router()

router.get('/lat', async(req, res, next) => {
  try{
    if (!req.query.location) throw new Error('Search param (`location`) required')
    res.json(await mapquest.getLat(req.query.location))
    // res.json(await mapquest.getLatLon(req.query.location))
  } catch (error) {
    res.json({ error: error.message })
  }
})

router.get('/lon', async(req, res, next) => {
  try{
    if (!req.query.location) throw new Error('Search param (`location`) required')
    res.json(await mapquest.getLon(req.query.location))
    // res.json(await mapquest.getLatLon(req.query.location))
  } catch (error) {
    res.json({ error: error.message })
  }
})

router.get('/', async(req, res, next) => {
  try{
    res.json(await hikingProject.getTrails(req))
  } catch (error) {
    res.json({ error: error.message})
  }
})

router.get('/test', () => {
  reply.view('index')
})

module.exports = router