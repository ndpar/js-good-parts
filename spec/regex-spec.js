describe('Regex', function() {

    it('parse URL', function() {
        let parser = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/
        let result = parser.exec("http://www.ora.com:80/goodparts?q#fragment")
        let [url, scheme, slash, host, port, path, query, hash] = result

        expect([host, port]).toEqual(['www.ora.com', '80'])
    })

    it('test number', function() {
        let parser = /^-?\d+(?:\.\d*)?(?:e[+\-]?\d+)?$/i
        let test = num => parser.test(num)

        expect(test('1')).toEqual(true)
        expect(test('number')).toEqual(false)
        expect(test('98.6')).toEqual(true)
        expect(test('132.21.86.100')).toEqual(false)
        expect(test('123.45E-67')).toEqual(true)
        expect(test('123.45D-67')).toEqual(false)
    })

    it('parse greedy', function() {
        expect(/^a+/.exec("aaa")).toEqual(jasmine.arrayContaining(['aaa']))
    })

    it('parse lazy', function() {
        expect(/^a+?/.exec("aaa")).toEqual(jasmine.arrayContaining(['a']))
    })
})
