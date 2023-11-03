const { Driver, Team } = require('../../db.js');

const postDriversControllers = async (name, surname, description, image, nationality, dob, team) => {
    try {
        const newDriver = await Driver.create({
            name, surname, description, image, nationality, dob, 
        })
        let newTeam;
        if (newDriver) {
            let teamExisting = await Team.findOne({
                where: {
                    name: team
                }
            })
            if (!teamExisting) {
               newTeam =  await Team.create({ name: team })
               console.log(newTeam);
            }
                
        }
        await newDriver.addTeam(newTeam.dataValues.id)
        
        return newDriver.dataValues;

    } catch (error) {
        throw new Error(error.message);
    }
}

module.exports = postDriversControllers
