const axios = require('axios');

const getCharacterQuote = async (characterName) => {
  const { data } = await axios.get(
    `http://futuramaapi.herokuapp.com/api/characters/${characterName}/1`
  );
  return data[0].quote;
};

module.exports = {
  getCharacterQuote,
};
