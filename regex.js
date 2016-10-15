var parse_url = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/

var result = parse_url.exec("http://www.ora.com:80/goodparts?q#fragment")
var [url, scheme, slash, host, port, path, query, hash] = result

document.writeln(JSON.stringify(result))
document.writeln(`host=${host}, port=${port}`)

var parse_number = /^-?\d+(?:\.\d*)?(?:e[+\-]?\d+)?$/i
{
    let test = num => document.writeln(num + ": " + parse_number.test(num))
    test('1')
    test('number')
    test('98.6')
    test('132.21.86.100')
    test('123.45E-67')
    test('123.45D-67')
}

document.writeln("Greedy: " + JSON.stringify(/^a+/.exec("aaa")))
document.writeln("Lazy: " + JSON.stringify(/^a+?/.exec("aaa")))
