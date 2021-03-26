const pool = require('../utils/pool');

module.exports = class Profile {
  id;
  name;
  character;
  quote;

  constructor({ id, name, character, quote }) {
    this.id = id;
    this.name = name;
    this.character = character;
    this.quote = quote;
  }

  static async insert({ name, character, quote }) {
    const {
      rows,
    } = await pool.query(
      `INSERT INTO profiles (name, character, quote) VALUES ($1, $2, $3) RETURNING *`,
      [name, character, quote]
    );

    return new Profile(rows[0]);
  }
};
