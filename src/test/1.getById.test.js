const request = require('supertest')
const app = require('../app')

const agent = request(app)

/* eslint-env jest */
describe('GET rickandmorty/character/{id}', () => {
  test('should reply the method GET with status 200 if the id is passed in the params', async () => {
    const res = await agent.get('/rickandmorty/character/1')
    expect(res.statusCode).toBe(200)
  })

  test('Response a object with the properties: "id","name","species","gender","image"', () => {
    agent.get('/rickandmorty/character/1').then(res => {
      const array = Object.keys(res.body)
      expect(array).toContain('id')
      expect(array).toContain('name')
      expect(array).toContain('species')
      expect(array).toContain('gender')
    })
  })

  test('if you have an error response with status 500', () => {
    agent.get('/rickandmorty/IDqueNoExiste').expect(500)
  })
})
