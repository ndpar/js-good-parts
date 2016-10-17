require('../src/core')

describe('Core/Meta', function() {

    it('integer', function() {
        expect((10 / 3).integer()).toBe(3)
        expect((-10 / 3).integer()).toBe(-3)
    })

    it('trim', function() {
        expect(" neat ".trim()).toBe("neat")
    })

    it('curry', function() {
        let add1 = ((a, b) => a + b).curry(1)
        expect(add1(6)).toBe(7)
    })

    it('entityify', function() {
        expect("<xml>".entityify()).toBe("&lt;xml&gt;")
    })
})
