const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const comparePassword = async (password, existingManager, res) => {

    bcrypt.compare(password, existingManager.password).then(isCorrect => {
        if (isCorrect) {
            const payload = {
                id: existingManager._id,
                email: existingManager.email,
            }
            jwt.sign(payload, `${process.env.JWT_SECRET_KEY}`, { expiresIn: '1h' }, (err, token) => {
                if (err) return res.json({ message: err.message })
                return res.status(200).json({
                    token: token,
                    email: existingManager.email,
                    role: existingManager.role,
                    region: existingManager.region
                })
            })
        } else {
            res.status(404).json({ message: "Invalid Username or password" })
        }
    })

}

const verifyToken = (req, res, next, user) => {
    const token = req.headers['authorization']?.split(' ')[1]
    if (token) {
        jwt.verify(token, `${process.env.JWT_SECRET_KEY}`, (err, decoded) => {
            if (err) return res.status(401).json({ message: "Failed To Authenticate" })
            if (decoded.role === `${user}`) {
                next()
            } else {
                res.status(400).json({ message: `You need to be ${user} to access` })
            }
        })
    } else {
        res.status(401).json({ message: "Unauthorized" })
    }
}

module.exports = { comparePassword, verifyToken }