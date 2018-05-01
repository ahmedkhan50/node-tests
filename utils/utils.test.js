const utils = require('./utils');
const expect = require('expect');

describe('Utils', () => {
    
    it('testing add function', () => {
        var results = utils.add(33, 11);
        expect(results).toBe(44).toBeA('number');
    });

    it('testing sqaure function', () => {
        var results = utils.square(11);
        expect(results).toBe(121);
    });

    it('it should expect some values', () => {
        expect(12).toNotBe(14);
        expect({ name: 'ahmed' }).toEqual({ name: 'ahmed' });
        expect([1, 3, 5]).toInclude(5);
        expect({
            name: 'ahmed',
            age: 25,
            location: "india"
        }).toInclude({
            age: 25
        })
    });

    it('should verify last and first name are set', () => {
        var name = utils.setName({ age: 23 }, 'Nabeel Khan');
        expect(name).toInclude({
            firstName: 'Nabeel',
            lastName: 'Khan'
        });
    });
    // done will tell mocha its asynchronous test.and wait till done is called after assertions..
    it('async add', (done) => {
        utils.asyncAdd(3, 4, (sum) => {
            expect(sum).toBe(7).toBeA('number');
            done();
        })
    });

    it('async square test', (done) => {
        utils.asyncSquare(12, (square) => {
            expect(square).toBe(144);
            done();
        });
    });
});