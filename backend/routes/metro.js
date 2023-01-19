const express = require('express')
const router = express.Router()
const {
    createMetro,
    getMetro,
    getMetros,
    deleteMetro,
    updateMetro,
    searchProperty,
} = require('../controllers/metroController')

router.get('/', getMetros)

router.get('/:id', getMetro)

router.post('/', createMetro)

router.delete('/:id', deleteMetro)

router.patch('/:id', updateMetro)

router.get('/:type', searchProperty)

module.exports = router