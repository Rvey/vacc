const index = async (req, res) => {
    try {
        const urbanCenters = await urbanCenter.find()
        res.status(200).json(urbanCenters)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}   

const store = async (req, res) => {
    const { city, region , urbanCenter } = req.body
    try {
        if (!city || !urbanCenter || !region)
            return res.status(400).json({ message: "Please fill all the fields" })

        const existingUrbanCenter = await urbanCenter.findOne({ email })

        if (existingUrbanCenter)
            return res.status(400).json({ message: "Urban Center already exists" })

        const newUrbanCenter = await urbanCenter.create({
            urbanCenter,
            city,
            region
        })

        res.status(200).json({ newUrbanCenter })

    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}
const deleteUrbanCenter = async (req, res) => {
    const { id } = req.params
    try {
        await urbanCenter.findByIdAndDelete(id)
        res.status(200).json({ message: "Urban Center deleted successfully" })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

