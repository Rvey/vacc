const nationalManager = require("../models/nationalManager.model");
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const { comparePassword } = require('../helpers/JwtValidation')
const { managerAccount } = require('../utils/mail')
const NManagerLogin = async (req, res) => {
    const { email, password } = req.body
    try {
        if (!email || !password)
            return res.status(404).json({ message: "Please fill all the fields" })
        const existingAdmin = await nationalManager.findOne({ email })
        if (!existingAdmin) return res.status(404).json({ message: "nationalManager not found" })
        comparePassword(password, existingAdmin, res)
        res.status(200).json({ message: "Login Successful" })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

const index = async (req, res) => {
    try {
        const nationalManagers = await nationalManager.find()
        res.status(200).json(nationalManagers)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}


const store = async (req, res) => {
    const { email, firstName, lastName, region } = req.body
    try {
        if (!email || !firstName || !lastName)
            return res.status(400).json({ message: "Please fill all the fields" })

        const existingManager = await nationalManager.findOne({ email })
        const existingManagerRegion = await nationalManager.findOne({ region })

        if (existingManager) return res.status(400).json({ message: "nationalManager already exists" })
        if (existingManagerRegion) return res.status(400).json({ message: "Region already exists" })

        let password = Math.random().toString(20).substring(2, 10)
        const hashedPassword = await bcrypt.hash(password, 10)

        const newManager = await nationalManager.create({
            email: email,
            firstName: firstName,
            lastName: lastName,
            password: hashedPassword,
            region: region
        })

        managerAccount(email, lastName, firstName, password)
        res.status(200).json({ newManager })
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

const deleteNManager = async (req, res) => {
    const { id } = req.params
    try {
        await nationalManager.findByIdAndDelete(id)
        res.status(200).json({ message: "nationalManager deleted successfully" })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}


module.exports = {
    index,
    NManagerLogin,
    store,
    deleteNManager
};