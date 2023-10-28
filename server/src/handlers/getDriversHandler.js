const { Driver, Team} =require('../db')
const {getDriversByName, getDriversFromAPI }=require('../controlers/drivers/getDriversByNameController')


const getDriversHandler = async (req, res) => {
    try {
      const { name } = req.query;
  
      if (name) {
        const dbDrivers = await getDriversByName(name);
  
        const apiDrivers = await getDriversFromAPI(name);
  
        const combinedDrivers = [...dbDrivers, ...apiDrivers];
  
        if (combinedDrivers.length === 0) {
          return res.status(404).json({ message: 'No se encontraron conductores.' });
        }
  
        return res.status(200).json(combinedDrivers.slice(0, 15));
      } else {
        const drivers = await Driver.findAll({
          include: [Team],
        });
        drivers.forEach(driver => {
          if (!driver.Imagen) {
            driver.Imagen = 'imagen_por_defecto.png';
          }
        });
  
        return res.status(200).json(drivers);
      }
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };
  
  module.exports = {
    getDriversHandler,
  };