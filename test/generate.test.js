const { expect } = require('chai');
const supertest = require('supertest');
const app = require('../app');

describe('GET /generate endpoint', () => {
  it('should generate an array of 5', () => {
    return supertest(app)
      .get('/generate')
      .query({ n: 6 })
      .expect(200)
      .expect('Content-Type', /json/)
      .then(res => {
        expect(res.body).to.be.a('array')
        expect(res.body).to.have.lengthOf.at.least(1);
        expect(res.body).to.include.members([1,2,3,4,5]);
        expect([{ x: 5 }]).to.deep.include({ x: 5 });
      })
  })
})