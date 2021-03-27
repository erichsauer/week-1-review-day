const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('week-1-review-day routes', () => {
  beforeEach(async () => {
    return setup(pool);
  });

  let testProfile;
  beforeEach(async () => {
    testProfile = await request(app)
      .post('/api/v1/profiles')
      .send({ name: 'abel', character: 'Fry' });
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

  it('retrieves all profiles', async () => {
    const res = await request(app).get('/api/v1/profiles');

    expect(res.body).toEqual(
      expect.arrayContaining([
        {
          id: testProfile.body.id,
          name: 'abel',
          character: 'Fry',
          quote: testProfile.body.quote,
        },
      ])
    );
  });

  it('retrieves one profile', async () => {
    const res = await request(app).get(
      `/api/v1/profiles/${testProfile.body.id}`
    );

    expect(res.body).toEqual({
      id: testProfile.body.id,
      name: 'abel',
      character: 'Fry',
      quote: testProfile.body.quote,
    });
  });

  it('updates one profile', async () => {
    const res = await request(app)
      .put(`/api/v1/profiles/${testProfile.body.id}`)
      .send({ name: 'maple', character: 'Bender' });

    expect(res.body).toEqual({
      id: testProfile.body.id,
      name: 'maple',
      character: 'Bender',
      quote: expect.any(String),
    });
  });

  it('deletes one profile', async () => {
    await request(app).delete(`/api/v1/profiles/${testProfile.body.id}`);

    const res = await request(app)
      .get(`/api/v1/profiles`)
      .send({ name: 'maple', character: 'Bender' });

    expect(res.body.filter((item) => item.id === testProfile.body.id)).toEqual(
      []
    );
  });
});
