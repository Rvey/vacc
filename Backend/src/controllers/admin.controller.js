const { comparePassword } = require('../helpers/JwtValidation')


const loginAdmin = async (req, res) => {
    const { email, password } = req.body
    try {
        if (!email || !password)
            return res.status(404).json({ message: "Please fill all the fields" })
        const existingAdmin = await manager.findOne({ email })
        if (!existingAdmin) return res.status(404).json({ message: "Manager not found" })
        comparePassword(password, existingAdmin, res)
         res.status(200).json({ message: "Login Successful" })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}
module.exports = {
    loginAdmin
}