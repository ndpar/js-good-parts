// In a purely prototypal pattern, we dispense with classes.
// We focus instead on the objects. Prototypal inheritance
// is conceptually simpler than classical inheritance: a new
// object can inherit the properties of an old object.

var myMammal = {
    name : 'Herb the Mammal',
    get_name : function () {
        return this.name;
    },
    says : function () {
        return this.saying || '';
    }
};

/* Differential Inheritance */

var myCat = Object.create(myMammal);
myCat.name = 'Henrietta';
myCat.saying = 'meow';
myCat.purr = function (n) {
    var i, s = '';
    for (i = 0; i < n; i += 1) {
        if (s) {
            s += '-';
        }
        s += 'r';
    }
    return s;
};
myCat.get_name = function () {
    return this.says() + ' ' + this.name + ' ' + this.says();
};

/* Functional Inheritance */

var mammal = function (spec) {
    var that = {};

    that.get_name = function () {
        return spec.name;
    };
    that.says = function () {
        return spec.saying || '';
    };
    return that;
};
var myMammal = mammal({name: 'Herb'});
document.writeln(myMammal.get_name());

var cat = function (spec) {
    spec.saying = spec.saying || 'meow';
    var that = mammal(spec);
    that.purr = function (n) {
        var i, s = '';
        for (i = 0; i < n; i += 1) {
            if (s) {
                s += '-';
            }
            s += 'r'; }
        return s;
    };
    that.get_name = function () {
        return that.says() + ' ' + spec.name + ' ' + that.says();
    };
    return that;
};
var myCat = cat({name: 'Henrietta'});
document.writeln(myCat.get_name());

var coolcat = function (spec) {
    var that = cat(spec),
        super_get_name = that.superior('get_name');
    that.get_name = function (n) {
        return 'like ' + super_get_name() + ' baby';
    };
    return that;
};
var myCoolCat = coolcat({name: 'Bix'});
document.writeln(myCoolCat.get_name());
