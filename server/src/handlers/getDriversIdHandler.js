const { Op } = require('sequelize');
const {Driver, Team } =require("../db")
const getDriversIdController =require ("../controlers/drivers/getDriversIdController")

const getDriversIdHandler = async(req, res) => {
  
  const { idDriver } = req.params;

  try {
    // Intenta buscar al conductor en la base de datos por su ID
    const dbDriver = await Driver.findOne({
      where: {
        ID: idDriver,
      },
      include: [Team],
    });

    if (dbDriver) {
      return res.status(200).json(dbDriver);
    }

    // Si no se encuentra en la base de datos, busca en la API
    const apiDriver = await fetchDriverID(idDriver);

    if (apiDriver) {
      return res.status(200).json(apiDriver);
    }

    return res.status(404).json({ message: 'Conductor no encontrado' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getDriversIdHandler,
};

