const manager = require("../models/manager.model");
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const { comparePassword } = require('../helpers/JwtValidation')

const loginManager = async (req, res) => {
    const { email, password } = req.body
    try {
        const existingAdmin = await manager.findOne({ email })
        if (!existingAdmin) return res.status(404).json({ message: "Admin not found" })
        comparePassword(password, existingAdmin, res)
        logger.info(`GAdmin - email: ${existingAdmin.email} logged in`)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}


const store = async (req, res) => {
    const { email, firstName, lastName } = req.body
    let url = 'http://localhost:4000/'
    try {
        if (!email || !firstName || !lastName) 
        return res.status(400).json({ message: "Please fill all the fields" })

        const existingManager = await manager.findOne({ email })

        if (existingManager) 
        return res.status(400).json({ message: "Manager already exists" })

        let password = Math.random().toString(20).substring(2, 10)

        const hashedPassword = await bcrypt.hash(password, 10)
        
        console.log(hashedPassword);
        // const newManager = await manager.create({ 
        //     Email, 
        //     FirstName, 
        //     LastName, 
        //     Password: hashedPassword 
        // })

        // // managerEmail(email, firstName, lastName, password, url)

        // res.status(200).json({ newManager })

    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

module.exports = {
    loginManager,
    store
};