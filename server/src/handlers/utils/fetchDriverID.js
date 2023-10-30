const axios = require('axios');

async function fetchDriverFromAPI(idDriver) {
  try {
    const apiUrl = `https://api-ficticia.com/drivers/${idDriver}`;
    const response = await axios.get(apiUrl);

    if (response.status !== 200) {
      throw new Error(`Error en la solicitud a la API: ${response.status}`);
    }

    const apiDriver = response.data; 
    return apiDriver; 

  } catch (error) {
    console.error(error);
    throw error;
  }
}

module.exports = {
  fetchDriverFromAPI,
};



