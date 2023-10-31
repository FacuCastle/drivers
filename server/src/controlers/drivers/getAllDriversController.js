const { Driver, Team } = require('../../db.js')
const axios = require('axios');

const getAllDriversController = async (name) => {
    try {
        const driversAPI = await axios.get("http://localhost:5000/drivers")

        const objDriversApi = driversAPI.data.map((driver) => {
            return {
                id: driver.id,
                name: driver.name.forename,
                surname: driver.name.surname,
                description: driver.description,
                image: driver.image.url,
                nationality: driver.nationality,
                dob: driver.dob
            }
        })
        const driversDB = await Driver.findAll({
            include: [Team],
        });
        driversDB.map(driver => {
            if (!driver.image) {
                driver.image = "https://png.pngtree.com/png-clipart/20190612/original/pngtree-f1-racing-png-image_3394474.jpg";
            }
        });

        const allDrivers = [...objDriversApi, ...driversDB];

        return  res.status(200).json(allDrivers);
    } catch (error) {
        return  res.status(200).json({error: error.message})
    }
}

module.exports = getAllDriversController;