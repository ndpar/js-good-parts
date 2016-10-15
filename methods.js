/* Helper functions */

var println = function (f, value) {
    document.writeln(f + ": " + JSON.stringify(value))
}

/* Array */

{
    let a = ['a', 'b', 'c']
    println('join', a.join(''))
}
{
    let a = ['a', 'b', 'c']
    let b = ['x', 'y', 'z']
    let c = a.concat(b, true)
    println('concat', {a, b, c})
}
{
    let a = ['a', 'b', 'c']
    let b = ['x', 'y', 'z']
    let c = a.push(b, true)
    println('push', {a, b, c})
}
{
    let a = ['a', 'b', 'c']
    let b = a.pop()
    println('pop', {a, b})
}
{
    let a = ['a', 'b', 'c']
    let b = a.shift()
    println('shift', {a, b})
}
{
    let a = ['a', 'b', 'c']
    let b = a.unshift('?', '@')
    println('unshift', {a, b})
}
{
    let a = ['a', 'b', 'c']
    let b = a.reverse()
    println('reverse', {a, b})
}
{
    let a = ['a', 'b', 'c']
    let b = a.slice(0, 1)
    let c = a.slice(1)
    let d = a.slice(1, 2)
    let e = a.slice()
    println('slice', {a, b, c, d, e})
}
{
    let a = ['a', 'b', 'c', 'd'];
    let r = a.splice(1, 2, 'ache', 'bug', 'pig');
    println('splice', {a, r})
}
{
    let n = [15, 42, 16, 8, 23, 4]
    let m = n.sort()
    println('sort', {n, m})

    let p = [15, 42, 16, 8, 23, 4]
    let q = p.sort((a, b) => a - b)
    println('sort', {p, q})
}
var by = function (name, ...rest) {
    return function (o, p) {
        if (o && p && typeof o === 'object' && typeof p === 'object') {
            let a = o[name], b = p[name]
            if (a === b) {
                return rest.length > 0 ? by(rest)() : 0;
            }
            if (typeof a === typeof b) {
                return a < b ? -1 : 1;
            }
            return typeof a < typeof b ? -1 : 1;
        } else {
            throw {
                name: 'Error',
                message: 'Expected an object when sorting by ' + name
            };
        }
    };
};
{
    let s = [
        {first: 'Joe', last: 'DeRita'},
        {first: 'Moe', last: 'Howard'},
        {first: 'Joe', last: 'Besser'},
        {first: 'Shemp', last: 'Howard'},
        {first: 'Larry', last: 'Fine'},
        {first: 'Curly', last: 'Howard'}
    ]
    println('sort by first', s.sort(by('first')))
    //println('sort by first,last', s.sort(by('first', 'last'))) // ???
}

/* Function */

document.writeln()

{
    document.writeln(function(){return this.value}.apply({value: 42}))

    let x = function (unused) {
        return this.value
    }.bind({value: 666}, 'unused too')

    println('bind', x('unused'))
}
{
    let x = function () {
        return this.value
    }.bind({value: 666})

    println('bind', x())
}

/* Number */

document.writeln()

println('toExponential 0', Math.PI.toExponential(0))
println('toExponential 2', Math.PI.toExponential(2))

println('toFixed 0', Math.PI.toFixed(0))
println('toFixed 2', Math.PI.toFixed(2))

println('toPrecision 2', Math.PI.toPrecision(2))
println('toPrecision 7', Math.PI.toPrecision(7))

println('toString  2', Math.PI.toString(2))
println('toString  8', Math.PI.toString(8))
println('toString 16', Math.PI.toString(16))
println('toString   ', Math.PI.toString())

/* String */

document.writeln()

{
    let text = '<html><body bgcolor=linen><p>This is <b>bold<\/b>!<\/p><\/body><\/html>'
    let tags = /[^<>]+|<(\/?)([A-Za-z]+)([^<>]*)>/g
    let a = text.match(tags)
    for (let i = 0; i < a.length; i += 1) {
        document.writeln(('// [' + i + '] ' + a[i]).entityify())
    }
}

document.writeln()

{
    let text = 'and in it he says "Any damn fool could'
    let pos = text.search(/["']/)
    println('search', {text, pos})

    let a = text.slice(18)
    let b = text.slice(0, 3)
    let c = text.slice(-5)
    let d = text.slice(19, 32)
    println('slice', {a, b, c, d})
}
{
    let ip = '192.168.1.0'
    document.writeln(ip.split('.'))
    document.writeln(ip.split(/\./))
    document.writeln(ip.split(/(\.)/))
}
document.writeln(String.fromCharCode(67, 97, 116))
