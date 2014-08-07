"use strict";

var format = function(str, dict) {
    var re = /\{.+?\}/,
        i = 0,
        found = re.exec(str);

    while (found) {
        if (dict.hasOwnProperty(found[0].slice(1, found[0].length - 1))) {
            str = str.replace(found[0],
                dict[found[0].slice(1, found[0].length - 1)]);
        }
        re.lastIndex = found.index+1;
        found = re.exec(str);
    }

    return str;
};

exports.format = format;
