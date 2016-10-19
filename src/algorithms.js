var findMissingAndDup = function (list) {

    let reducer = function ([S, s, P, p], e, i) {
        let j = i + 1
        return [S += j, s += e, P += j * j, p += e * e]
    }

    let [S, s, P, p] = list.reduce(reducer, [0, 0, 1, 1])
    let deltas = S - s, deltap = (P - p) / deltas
    return [(deltap + deltas) / 2, (deltap - deltas) / 2]
}

module.exports = findMissingAndDup
