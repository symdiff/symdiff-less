var extract = require('../index');

describe('symdiff-less', function() {
    it('should work with an empty less', function() {
        var result = extract('');
        expect(result.length).to.equal(0);
    });

    it('should work without selectors', function() {
        var result = extract('@import "other";');
        expect(result.length).to.equal(0);
    });

    it('should work with invalid less', function() {
        var result = extract('this is not the less you are looking for');
        expect(result.length).to.equal(0);
    });

    it('should extract a class', function() {
        var testLESS = '.grid { display: flex; }',
            result = extract(testLESS);

        expect(result.length).to.equal(1);
        expect(result[0]).to.equal('grid');
    });

    it('should extract nothing when there are no classes', function() {
        var testLESS = '#grid { display: flex; }',
            result = extract(testLESS);

        expect(result.length).to.equal(0);
    });
});