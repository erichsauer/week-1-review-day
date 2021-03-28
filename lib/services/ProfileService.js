const Profile = require('../models/Profile');
const { getCharacterQuote } = require('../utils/futurama');

module.exports = class ProfileServices {
  static async create({ name, character }) {
    const quote = await getCharacterQuote(character);

    const profile = await Profile.insert({ name, character, quote });

    return profile;
  }

  static async retrieve(id) {
    const profiles = await Profile.retrieve(id);

    return profiles;
  }

  static async updateById(id, { name, character }) {
    const quote = await getCharacterQuote(character);

    const profile = await Profile.updateById(id, { name, character, quote });

    return profile;
  }

  static async deleteById(id) {
    const profile = await Profile.deleteById(id);

    return profile;
  }
};
