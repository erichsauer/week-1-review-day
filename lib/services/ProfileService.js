const Profile = require('../models/Profile');
const { getCharacterQuote } = require('../utils/futurama');

module.exports = class ProfileServices {
  static async create({ name, character }) {
    const quote = await getCharacterQuote(character);

    const profile = await Profile.insert({ name, character, quote });

    return profile;
  }
};
