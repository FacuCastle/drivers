const postDriversControllers = require('../controlers/drivers/postDriversControllers');

const postDriversHandler = async (req, res) => {
    try {
        const { name, surname, description, image, nationality, dob, team } = req.body;
        const newDriver = await postDriversControllers(name, surname, description, image, nationality, dob, team);
        res.status(202).json(newDriver)
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
};

module.exports = postDriversHandler;