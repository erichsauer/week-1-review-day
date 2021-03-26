const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('week-1-review-day routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('creates a profile with assigned quote', async () => {
    const res = await request(app)
      .post('/api/v1/profiles')
      .send({ name: 'erich', character: 'Bender' });

    expect(res.body).toEqual({
      id: expect.any(String),
      name: 'erich',
      character: 'Bender',
      quote: expect.any(String),
    });
  });
});
