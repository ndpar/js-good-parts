/* Prototype */

if (typeof Object.create !== 'function') {
    Object.create = function (o) {
        var F = function () {};
        F.prototype = o;
        return new F();
    };
}

/* Augmenting Types */

Function.prototype.method = function (name, func) {
    if (!this.prototype[name]) {
        this.prototype[name] = func;
    }
    return this;
};

Number.method('integer', function () {
    return Math.trunc(this);
});

Function.method('curry', function () {
    let args = [...arguments], // just to cast arguments to Array
        that = this;
    return function () {
        return that.apply(null, args.concat([...arguments]));
    };
});

Object.method('superior', function (name) {
    var that = this,
        method = that[name];
    return function () {
        return method.apply(that, arguments);
    };
});

/* Closures */

String.method('entityify', function () {
    let character = {
        '<' : '&lt;',
        '>' : '&gt;',
        '&' : '&amp;',
        '"' : '&quot;'
    };
    // Return the string.entityify method, which
    // returns the result of calling the replace method.
    // Its replaceValue function returns the result of
    // looking a character up in an object. This use of
    // an object usually outperforms switch statements.
    return function () {
        return this.replace(/[<>&"]/g, function (c) {
            return character[c];
        });
    };
}());

/* Memoization */

var memoizer = function (memo, fundamental) {
    var shell = function (n) {
        var result = memo[n];
        if (typeof result !== 'number') {
            result = fundamental(shell, n);
            memo[n] = result;
        }
        return result;
    };
    return shell; // recursive closure
};

/* Arrays */

var is_array = function (value) {
    return value &&
        typeof value === 'object' &&
        typeof value.length === 'number' &&
        typeof value.splice === 'function' &&
        !(value.propertyIsEnumerable('length'));
};
