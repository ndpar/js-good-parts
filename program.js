/* Exceptions */

var add = function (a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw {
            name: 'TypeError',
            message: 'add needs numbers'
        };
    }
    return a + b;
}

// not sure if it is tail-optimized
var factorial = function factorial(i, a) {
    a = a || 1;
    if (i < 2) {
        return a;
    }
    return factorial(i - 1, a * i);
};
document.writeln(factorial(150));

/* Closures */

var quo = function (status) {
    return {
        get_status: function () {
            return status;
        }
    };
};
var myQuo = quo("amazed");
document.writeln(myQuo.get_status());

// Another example of closure.
// Define a function that sets a DOM node's color
// to yellow and then fades it to white.
var fade = function (node) {
    var level = 1;
    var step = function () {
        var hex = level.toString(16);
        node.style.backgroundColor = '#FFFF' + hex + hex;
        if (level < 15) {
            level += 1;
            setTimeout(step, 100);
        }
    };
    setTimeout(step, 100);
};
fade(document.body);

// Another example of closure.
// Make a function that assigns event handler functions to
// an array of nodes the right way.
// When you click on a node, an alert box will display
// the ordinal of the node.
var add_the_handlers = function (nodes) {
    var i;
    for (i = 0; i < nodes.length; i += 1) {
        nodes[i].onclick = function (i) {
            return function (e) {
                alert(e);
            };
        }(i);
    }
};

// Module pattern: Using function scope and closures to create modules.
String.method('deentityify', function () {
    // The entity table. It maps entity names to characters.
    var entity = {
        quot: '"',
        lt: '<',
        gt: '>'
    };
    // Return the deentityify method.
    return function () {
        // This is the deentityify method. It calls the string
        // replace method, looking for substrings that start
        // with '&' and end with ';'. If the characters in
        // between are in the entity table, then replace the
        // entity with the character from the table. It uses
        // a regular expression (Chapter 7).
        return this.replace(/&([^&;]+);/g,
            function (a, b) {
                var r = entity[b];
                return typeof r === 'string' ? r : a;
            }
        );
    };
}());
document.writeln( '&lt;&quot;&gt;'.deentityify());

/* Cascades */

var serial_maker = function () {
    // Produce an object that produces unique strings. A
    // unique string is made up of two parts: a prefix
    // and a sequence number. The object comes with
    // methods for setting the prefix and sequence
    // number, and a gensym method that produces unique
    // strings.
    var prefix = '';
    var seq = 0;
    return {
        with_prefix: function (p) {
            prefix = String(p);
            return this; // this enables fluent interface
        },
        with_seq: function (s) {
            seq = s;
            return this; // it's called cascade pattern
        },
        gensym: function () {
            var result = prefix + seq;
            seq += 1;
            return result;
        }
    };
};
var seqer = serial_maker().with_prefix('Q').with_seq(1000);
document.writeln(seqer.gensym());

/* Memoization */

var fibonacci = memoizer([0, 1], function (shell, n) {
    return shell(n - 1) + shell(n - 2);
});
for (var i = 0; i <= 10; i += 1) {
    document.writeln('// ' + i + ': ' + fibonacci(i));
}
