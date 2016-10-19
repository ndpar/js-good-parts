const by = require('../src/methods')

describe('Array methods', function() {

    it('join', function() {
        let a = ['a', 'b', 'c']
        let b = a.join('')

        expect(b).toBe('abc')
    })

    it('concat', function() {
        let a = ['a', 'b', 'c']
        let b = ['x', 'y', 'z']
        let c = a.concat(b, true)

        expect(a).toEqual(['a', 'b', 'c'])
        expect(b).toEqual(['x', 'y', 'z'])
        expect(c).toEqual(['a', 'b', 'c', 'x', 'y', 'z', true])
    })

    it('push!', function() {
        let a = ['a', 'b', 'c']
        let b = ['x', 'y', 'z']
        let c = a.push(b, true)

        expect(a).toEqual(['a', 'b', 'c', ['x', 'y', 'z'], true])
        expect(b).toEqual(['x', 'y', 'z'])
        expect(c).toBe(5)
    })

    it('pop! (take from right)', function() {
        let a = ['a', 'b', 'c']
        let b = a.pop()

        expect(a).toEqual(['a', 'b'])
        expect(b).toBe('c')
    })

    it('shift! (take from left)', function() {
        let a = ['a', 'b', 'c']
        let b = a.shift()

        expect(a).toEqual(['b', 'c'])
        expect(b).toBe('a')
    })

    it('unshift! (concat to left)', function() {
        let a = ['a', 'b', 'c']
        let b = a.unshift('?', '@')

        expect(a).toEqual(['?', '@', 'a', 'b', 'c'])
        expect(b).toBe(5)
    })

    it('reverse!', function() {
        let a = ['a', 'b', 'c']
        let b = a.reverse()

        expect(a).toEqual(['c', 'b', 'a'])
        expect(b).toEqual(['c', 'b', 'a'])
    })

    it('slice', function() {
        let a = ['a', 'b', 'c']
        expect(a.slice(0, 1)).toEqual(['a'])
        expect(a.slice(1)).toEqual(['b', 'c'])
        expect(a.slice(1, 2)).toEqual(['b'])
        expect(a.slice()).toEqual(a)
        expect(a).toEqual(['a', 'b', 'c'])
    })

    it('splice!', function() {
        let a = ['a', 'b', 'c', 'd'];
        let r = a.splice(1, 2, 'ache', 'bug', 'pig');

        expect(a).toEqual(['a', 'ache', 'bug', 'pig', 'd'])
        expect(r).toEqual(['b', 'c'])
    })

    it('sort! lexicographic', function() {
        let n = [15, 42, 16, 8, 23, 4]
        let m = n.sort()

        expect(n).toEqual([15, 16, 23, 4, 42, 8])
        expect(m).toEqual([15, 16, 23, 4, 42, 8])
    })

    it('sort! numeric', function() {
        let p = [15, 42, 16, 8, 23, 4]
        let q = p.sort((a, b) => a - b)

        expect(p).toEqual([4, 8, 15, 16, 23, 42])
        expect(q).toEqual([4, 8, 15, 16, 23, 42])
    })
})

describe('Array sorting', function() {

    let s = []

    beforeEach(function() {
        s = [
            {first: 'Curly', last: 'Howard'},
            {first: 'Joe', last: 'DeRita'},
            {first: 'Shemp', last: 'Howard'},
            {first: 'Joe', last: 'Besser'},
            {first: 'Moe', last: 'Howard'},
            {first: 'Larry', last: 'Fine'}
        ]
    })

    it('sort! objects by nothing', function() {
        let unsorted = [
            {first: 'Curly', last: 'Howard'},
            {first: 'Joe', last: 'DeRita'},
            {first: 'Shemp', last: 'Howard'},
            {first: 'Joe', last: 'Besser'},
            {first: 'Moe', last: 'Howard'},
            {first: 'Larry', last: 'Fine'}
        ]
        expect(s.sort(by())).toEqual(unsorted)
    })

    it('sort! objects by first name', function() {
        let sorted = [
            {first: 'Curly', last: 'Howard'},
            {first: 'Joe', last: 'DeRita'},
            {first: 'Joe', last: 'Besser'},
            {first: 'Larry', last: 'Fine'},
            {first: 'Moe', last: 'Howard'},
            {first: 'Shemp', last: 'Howard'}
        ]
        expect(s.sort(by('first'))).toEqual(sorted)
    })

    it('sort! objects by last name', function() {
        let sorted = [
            {first: 'Joe', last: 'Besser'},
            {first: 'Joe', last: 'DeRita'},
            {first: 'Larry', last: 'Fine'},
            {first: 'Curly', last: 'Howard'},
            {first: 'Shemp', last: 'Howard'},
            {first: 'Moe', last: 'Howard'}
        ]
        expect(s.sort(by('last'))).toEqual(sorted)
    })

    it('sort! objects by last and first name', function() {
        let sorted = [
            {first: 'Joe', last: 'Besser'},
            {first: 'Joe', last: 'DeRita'},
            {first: 'Larry', last: 'Fine'},
            {first: 'Curly', last: 'Howard'},
            {first: 'Moe', last: 'Howard'},
            {first: 'Shemp', last: 'Howard'}
        ]
        expect(s.sort(by('last', 'first'))).toEqual(sorted)
    })
})

describe('Function methods', function() {

    it('apply function with THIS', function() {
        let v = function(){return this.value}.apply({value: 42})
        expect(v).toBe(42)
    })

    it('bind THAT to THIS', function() {
        let x = function () {
            return this.value
        }.bind({value: 666})

        expect(x()).toBe(666)
    })

    it('bind THAT to THIS (with junk)', function() {
        let x = function (unused) {
            return this.value
        }.bind({value: 666}, {unused: 'junk'})

        expect(x('unused arg')).toBe(666)
    })
})

describe('Number methods', function() {

    it('toExponential', function() {
        expect(Math.PI.toExponential(0)).toBe('3e+0')
        expect(Math.PI.toExponential(2)).toBe('3.14e+0')
    })

    it('toFixed', function() {
        expect(Math.PI.toFixed(0)).toBe('3')
        expect(Math.PI.toFixed(2)).toBe('3.14')
    })

    it('toPrecision', function() {
        expect(Math.PI.toPrecision(2)).toBe('3.1')
        expect(Math.PI.toPrecision(7)).toBe('3.141593')
    })

    it('toString', function() {
        expect(Math.PI.toString(2)).toBe('11.001001000011111101101010100010001000010110100011')
        expect(Math.PI.toString(8)).toBe('3.1103755242102643')
        expect(Math.PI.toString(16)).toBe('3.243f6a8885a3')
        expect(Math.PI.toString()).toBe('3.141592653589793')
    })
})

describe('String methods', function() {

    it('match', function() {
        let text = '<html><body bgcolor=linen><p>This is <b>bold<\/b>!<\/p><\/body><\/html>'
        let tags = /[^<>]+|<(\/?)([A-Za-z]+)([^<>]*)>/g

        expect(text.match(tags)).toEqual([
            '<html>',
            '<body bgcolor=linen>',
            '<p>',
            'This is ',
            '<b>',
            'bold',
            '</b>',
            '!',
            '</p>',
            '</body>',
            '</html>'
        ])
    })

    let text = 'and in it he says "Any damn fool could'

    it('search', function() {
        expect(text.search(/["']/)).toBe(18)
    })

    it('slice', function() {
        expect(text.slice(18)).toBe('"Any damn fool could')
        expect(text.slice(0, 3)).toBe('and')
        expect(text.slice(-5)).toBe('could')
        expect(text.slice(19, 32)).toBe('Any damn fool')
    })

    it('split', function() {
        let ip = '192.168.1.0'
        expect(ip.split('.')).toEqual(['192', '168', '1', '0'])
        expect(ip.split(/\./)).toEqual(['192', '168', '1', '0'])
        expect(ip.split(/(\.)/)).toEqual(['192', '.', '168', '.', '1', '.', '0'])
    })

    it('fromCharCode', function() {
        expect(String.fromCharCode(67, 97, 116)).toBe('Cat')
    })
})
