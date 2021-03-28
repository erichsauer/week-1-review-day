const Profile = require('../models/Profile');
const { getCharacterQuote } = require('../utils/futurama');

module.exports = class ProfileServices {
  static async create({ name, character }: UserProfile) {
    const quote = await getCharacterQuote(character);

    const profile = await Profile.insert({ name, character, quote });

    return profile;
  }

  static async retrieve(id: string) {
    const profiles = await Profile.retrieve(id);

    return profiles;
  }

  static async updateById(id: string, { name, character }: UserProfile) {
    const quote = await getCharacterQuote(character);

    const profile = await Profile.updateById(id, { name, character, quote });

    return profile;
  }

  static async deleteById(id: string) {
    const profile = await Profile.deleteById(id);

    return profile;
  }
};
