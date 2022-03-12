const { comparePassword } = require("../helpers/JwtValidation");
const admin = require("../models/admin.model");

const loginAdmin = async (req, res) => {
    const { email, password } = req.body;
    const role = "admin";
    try {
        if (!email || !password)
            return res.status(404).json({ message: "Please fill all the fields" });
        const existingAdmin = await admin.findOne({ email });
        if (!existingAdmin)
            return res.status(404).json({ message: "admin not found" });
        if (existingAdmin.password === password && existingAdmin.email === email) {
            res.status(200).json(existingAdmin);
        } else {
            res.status(404).json({ message: error.message });
        }
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
module.exports = {
    loginAdmin,
};
