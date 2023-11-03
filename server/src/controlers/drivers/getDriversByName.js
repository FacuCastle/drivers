const axios = require('axios');
const { Op } = require('sequelize');
const {Driver, Team }= require('../../db.js')

const getDriversByName = async (name) => {
  const dbDrivers = await Driver.findAll({
    where: {
      name: {
        [Op.iLike]: `%${name}%`,
      },
    },
    limit: 15,
    include: [Team],
  });
  return dbDrivers
}
const getDriversFromAPI = async (name) => {
  try {

    const apiUrl = `http://localhost:5000/drivers?name.forename=${name}`;
    const queryParams = {
      name,
    };

    const response = await axios.get(apiUrl, {
      params: queryParams,
    });

    if (response.status !== 200) {
      throw new Error(`Error en la solicitud a la API: ${response.status}`);
    }
    const data = response.data;

    return data;

  } catch (error) {
    throw error;
  }
}
module.exports = {
  getDriversByName,
  getDriversFromAPI,
}