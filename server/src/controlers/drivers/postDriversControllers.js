const { Driver, Team } = require('../../db.js');

const postDriversControllers = async (name, surname, description, image, nationality, dob, team) => {
    try {
        const newDriver = await Driver.create({
            name, surname, description, image, nationality, dob
        })
        if (newDriver) {
            let teamExisting = await Team.findOne({
                where: {
                    name: team
                }
            })
            if (!teamExisting) {
                await Team.create({ name: team })
                }

        }
        await newDriver.addTeam(team.id)

        return newDriver;

    } catch (error) {
        throw new Error({ error: error.message });
    }
}

module.exports = postDriversControllers;