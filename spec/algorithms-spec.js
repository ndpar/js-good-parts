const findMissingAndDup = require('../src/algorithms')

describe('Algorithms', function() {

    it('findMissingAndDup', function() {
        expect(findMissingAndDup([2,2])).toEqual([1,2])
        expect(findMissingAndDup([1,1])).toEqual([2,1])
        expect(findMissingAndDup([1,2,3,6,5,6])).toEqual([4,6])
    })
})
