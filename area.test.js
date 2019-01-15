const request = require('supertest');
const fetch = require('node-fetch');

const app = require('./area');

test('app module should be defined', () => {
    expect(app).toBeDefined();
  });

test('GET /getArea?string1=2&string2=5 should return 200, 10', async () => {
    var side1 = 2, side2=5;
    const response = await request(app).get('/getArea?side1='+side1+'&side2='+side2);
    expect(response.statusCode).toBe(200);
    expect(response.body.result).toBe(10)
});

test('GET /getArea?string0=2&string2=0 should return 200, 0', async () => {
    var side1 = 0, side2=0;
    const response = await request(app).get('/getArea?side1='+side1+'&side2='+side2);
    expect(response.statusCode).toBe(200);
    expect(response.body.result).toBe(0)
});

test('GET /getArea?string1=5&string2=0 should return 400, -1', async () => {
    var side1 = 5, side2=0;
    const response = await request(app).get('/getArea?side1='+side1+'&side2='+side2);
    expect(response.statusCode).toBe(400);
    expect(response.body.result).toBe(-1)
});

test('GET /getArea?string0=-1&string2=0 should return 200, -1', async () => {
    var side1 = -1, side2=0;
    const response = await request(app).get('/getArea?side1='+side1+'&side2='+side2);
    expect(response.statusCode).toBe(400);
    expect(response.body.result).toBe(-1)
});

test('GET /getArea?string0=-1&string2=5 should return 200, -1', async () => {
    var side1 = -1, side2=5;
    const response = await request(app).get('/getArea?side1='+side1+'&side2='+side2);
    expect(response.statusCode).toBe(400);
    expect(response.body.result).toBe(-1)
});

test('GET /getArea?string0=-1&string2=-1 should return 200, -1', async () => {
    var side1 = -1, side2=-1;
    const response = await request(app).get('/getArea?side1='+side1+'&side2='+side2);
    expect(response.statusCode).toBe(400);
    expect(response.body.result).toBe(-1)
});