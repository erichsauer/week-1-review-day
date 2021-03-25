const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('week-1-review-day routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
});
