/*

JavaScript provides an object that has some array-like characteristics.
It converts array subscripts into strings that are used to make properties.

 */

var numbers = [ 'zero', 'one', 'two' ]
var numbers_object = { '0': 'zero', '1': 'one', '2': 'two' }

document.writeln(numbers[0] === numbers_object[0]);

numbers[numbers.length] = 'shi';
numbers.push('go');
document.writeln(numbers);

delete numbers[2];
document.writeln(numbers); // ['zero', 'one', undefined, 'shi', 'go'])

numbers.splice(2, 1);
document.writeln(numbers); // ['zero', 'one', 'shi', 'go'])

for (i = 0; i < numbers.length; i += 1) {
    document.writeln(numbers[i]);
}

/*

When the property names are small sequential integers, you should use an array.
Otherwise, use an object.

 */

var data = [4, 8, 15, 16, 23, 42];

var add = function (a, b) {
    return a + b;
};
document.writeln(data.reduce(add, 0));


Array.method('reduce', function (f, value) {
    var i;
    for (i = 0; i < this.length; i += 1) {
        value = f(this[i], value);
    }
    return value;
});

// Since the string 'total' is not an integer, adding a total property to an
// array does not change its length.

data.total = function () {
    return this.reduce(add, 0);
};
document.writeln(data.total());


Array.dim = function (dimension, initial) {
    var a = [], i;
    for (i = 0; i < dimension; i += 1) {
        a[i] = initial;
    }
    return a;
};
document.writeln(Array.dim(10, 0));

Array.matrix = function (m, n, initial) {
    var a, i, j, mat = [];
    for (i = 0; i < m; i += 1) {
        a = [];
        for (j = 0; j < n; j += 1) {
            a[j] = initial;
        }
        mat[i] = a;
    }
    return mat;
};
document.writeln(Array.matrix(4, 4, 0));

Array.identity = function (n) {
    var i, mat = Array.matrix(n, n, 0);
    for (i = 0; i < n; i += 1) {
        mat[i][i] = 1;
    }
    return mat;
};
myMatrix = Array.identity(4);
document.writeln(myMatrix[3][3]); // 1
