require('../src/arrays')

describe('Arrays', function() {


    it('subscripts', function() {

        // JavaScript provides an object that has some array-like
        // characteristics. It converts array subscripts into strings that are
        // used to make properties.

        let numbers = [ 'zero', 'one', 'two' ]
        let numbers_object = { '0': 'zero', '1': 'one', '2': 'two' }

        expect(numbers[0]).toEqual(numbers_object[0])
    })

    it('insert and delete', function() {
        let numbers = [ 'zero', 'one', 'two' ]
        numbers[numbers.length] = 'shi'
        numbers.push('go')
        delete numbers[2]
        expect(numbers).toEqual(['zero', 'one', undefined, 'shi', 'go'])

        numbers.splice(2, 1)
        expect(numbers).toEqual(['zero', 'one', 'shi', 'go'])
    })

    it('reduce', function() {
        let add = (a, e) => a + e
        expect([].reduce(add, 0)).toBe(0)
        expect(() => [].reduce(add)).toThrowError(TypeError)

        let data = [4, 8, 15, 16, 23, 42]
        expect(data.reduce(add, 0)).toBe(108)
        expect(data.reduce(add)).toBe(108)
    })

    it('kind of tuples', function() {

        // When the property names are small sequential integers, you should
        // use an array. Otherwise, use an object.

        let data = [4, 8, 15, 16, 23, 42]
        data.total = function() {
            return this.reduce((a, e) => a + e, 0)
        }
        // Since the string 'total' is not an integer, adding a total property
        // to an array does not change its length.
        expect(data.total()).toBe(108)
    })

    it('dim', function() {
        expect(Array.dim(10, 0)).toEqual([0,0,0,0,0,0,0,0,0,0])
    })

    it('matrix', function() {
        expect(Array.matrix(3, 3, 0)).toEqual([[0,0,0], [0,0,0], [0,0,0]])
    })

    it('identity', function() {
        expect(Array.identity(3)).toEqual([[1,0,0], [0,1,0], [0,0,1]])
    })
})
