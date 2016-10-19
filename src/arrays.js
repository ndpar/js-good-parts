Array.dim = function (dimension, initial) {
    let a = [];
    for (let i = 0; i < dimension; i += 1) {
        a[i] = initial;
    }
    return a;
};

Array.matrix = function (m, n, initial) {
    let mat = [];
    for (let i = 0; i < m; i += 1) {
        let a = [];
        for (let j = 0; j < n; j += 1) {
            a[j] = initial;
        }
        mat[i] = a;
    }
    return mat;
};

Array.identity = function (n) {
    let mat = Array.matrix(n, n, 0);
    for (let i = 0; i < n; i += 1) {
        mat[i][i] = 1;
    }
    return mat;
};
