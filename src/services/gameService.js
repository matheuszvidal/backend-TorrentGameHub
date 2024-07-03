const axios = require('axios');

async function fetchGames() {
  const response = await axios.get('https://hydralinks.cloud/sources/empress.json');

  const data = response.data;
  
  return data;
}

module.exports = fetchGames;