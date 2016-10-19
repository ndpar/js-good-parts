/* Array sorting */

function by(...fields) {

    function compare(fields, o, p) {
        let name = fields[0]
        if (o && p && typeof o === 'object' && typeof p === 'object') {
            let a = o[name], b = p[name]
            if (a === b) {
                return fields.length > 0 ? compare(fields.slice(1), o, p) : 0
            }
            if (typeof a === typeof b) {
                return a < b ? -1 : 1
            }
            return typeof a < typeof b ? -1 : 1
        } else {
            throw {
                name: 'Error',
                message: 'Expected an object when sorting by ' + name
            }
        }
    }

    return (o, p) => compare(fields, o, p)
}

module.exports = by
