const Metro = require('../models/metroModel')
const mongoose = require('mongoose')
// Get all workouts
const getMetros = async (req, res) => {
    const metros = await Metro.find({}).sort({ createdAt: -1 })

    res.status(200).json(metros)
}

// Get single workout
const getMetro = async (req, res) => {
    const { type } = req.params
    if (!mongoose.Types.ObjectId.isValid(type)) {
        return res.status(404).json({ error: 'No such Property' })
    }

    const metro = await Metro.findById(type)

    if (!metro) {
        return res.status(404).json({ error: 'No such Property' })
    }

    res.status(200).json(metro)
}

// Create new workout
const createMetro = async (req, res) => {
    const { area, type, roomNum, price } = req.body

    // Add doc to db
    try {
        const metro = await Metro.create({ area, type, roomNum, price })
        res.status(200).json(metro)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// Delete workout
const deleteMetro = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such property' })
    }

    const metro = await Metro.findOneAndDelete({ _id: id })

    if (!metro) {
        return res.status(404).json({ error: 'No such property' })
    }

    res.status(200).json(metro)
}

// Update workout
const updateMetro = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such property' })
    }

    const metro = await Metro.findOneAndUpdate({ _id: id }, {
        ...req.body
    })

    if (!metro) {
        return res.status(404).json({ error: 'No such property' })
    }

    res.status(200).json(metro)
}

const searchProperty = async (req, res) => {
    const queryType = new RegExp(req.params?.type, 'i');
    if (queryType !== '') {
        try {
            const search_results = await Blog.find({ blogType: queryType });
            res.status(200).json(search_results);
        } catch (error) {
            console.log(error);
            res.status(404).json({ message: 'No Matched Found' });
        }
    } else {
        res.status(404).json({ message: 'No queryType' });
    }
}

module.exports = {
    getMetro,
    getMetros,
    createMetro,
    deleteMetro,
    updateMetro,
    searchProperty,
}