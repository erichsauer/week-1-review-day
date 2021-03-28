const pool = require('../utils/pool');

module.exports = class Profile {
  id;
  name;
  character;
  quote;

  constructor({ id, name, character, quote }: UserProfile) {
    this.id = id;
    this.name = name || 'friend';
    this.character = character || 'default character';
    this.quote = quote || 'default quote';
  }

  static async insert({ name, character, quote }: UserProfile) {
    const {
      rows,
    } = await pool.query(
      `INSERT INTO profiles (name, character, quote) VALUES ($1, $2, $3) RETURNING *`,
      [name, character, quote]
    );

    return new Profile(rows[0]);
  }

  static async retrieve(id: string) {
    if (!id) {
      const { rows } = await pool.query(`SELECT * FROM profiles`);

      const profiles = rows.map((profile: UserProfile) => new Profile(profile));

      return profiles;
    } else {
      const { rows } = await pool.query(`SELECT * FROM profiles WHERE id=$1`, [
        id,
      ]);

      const profile = new Profile(rows[0]);
      return profile;
    }
  }

  static async updateById(id: string, { name, character, quote }: UserProfile) {
    const {
      rows,
    } = await pool.query(
      `UPDATE profiles SET name=$1, character=$2, quote=$3 WHERE id=$4 RETURNING *`,
      [name, character, quote, id]
    );

    return new Profile(rows[0]);
  }

  static async deleteById(id: string) {
    const {
      rows,
    } = await pool.query(`DELETE FROM profiles WHERE id=$1 RETURNING *`, [id]);

    return new Profile(rows[0]);
  }
};
