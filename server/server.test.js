const request = require('supertest');
const expect = require('expect');

const app = require('./server.js').app;

describe('Server', () => {

    it('should test / url', (done) => {
        request(app)
            .get('/')
            .expect('hello')
            .end(done);
    });

    it('/error route check', (done) => {
        request(app)
            .get('/error')
            .expect(404)
            .expect((response) => {
                expect(response.body).toInclude({
                    error: 'page not found..!!'
                });
            })
            .end(done);
    });

    it('test for /users', (done) => {
        request(app).get('/users')
            .expect(200)
            .expect((response) => {
                expect(response.body).toInclude({
                    name: 'ahmed', age: 27
                });
            })
            .end(done);
    });

});

