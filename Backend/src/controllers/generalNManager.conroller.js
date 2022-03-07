const GNManager = require("../models/generalNManager.model")

const loginGNM = async (req, res) => {
    const { email, password } = req.body
    try {
        if (!email || !password)
            return res.status(404).json({ message: "Please fill all the fields" })
        const existingGM = await GNManager.findOne({ email })
        if (!existingGM) return res.status(404).json({ message: "NGM not found" })
        // comparePassword(password, existingAdmin, res)
        if (existingGM.password === password && existingGM.email === email) return res.status(200).json({ message: "Login Successful" })
        res.status(400).json({message: "wrong creds"})
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}
module.exports = {
    loginGNM
}