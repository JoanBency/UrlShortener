const request = require('supertest');
const app = require('../index');

const baseUrl = "http://localhost:3000";

const url = "https://github.com/JoanBency/UrlShortener";

const code1 = "3BkFvL35h";
const code2 = "m8J_Yxo9b";

// describe('Test the root path', () => {
//     it('It should response the GET method', async () => {
//         const response = await request(baseUrl).get('/');
//         expect(response.statusCode).toBe(200);
//     });
// });

describe('Test the /api/url path', () => {
    it('It should response the GET method', async () => {
        const response = await request(baseUrl).get('/api/url');
        expect(response.statusCode).toBe(200);
        expect(response.body).not.toBe(undefined || null);
    });
});

describe('Test the /api/url path', () => {
    it('It should response the POST method', async () => {
        const response = await request(baseUrl)
            .post('/api/url/shorten')
            .send({longUrl: url})
            .set('Accept', 'application/json');
        expect(response.statusCode).toBe(200);
        expect(response.body).not.toBe(undefined || null);
    });
});

describe('Test the /:code path', () => {
    it('It should response the GET method', async () => {
        const response = await request(baseUrl).get(`/${code1}`);
        expect(response.statusCode).toBe(302 || 301);
    });
});

describe('Test the /:code path', () => {
    it('It should response the GET method', async () => {
        const response = await request(baseUrl).get(`/${code2}`);
        expect(response.statusCode).toBe(302 || 301);
    });
});
