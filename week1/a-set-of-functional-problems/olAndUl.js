"use strict";

var ol = function(items) {
    var htmlStr = ['<ol>'],
        nestedList;


    items.forEach(function(i) {
        htmlStr.push('    <li>' + i.label);
        if(i.hasOwnProperty('children')) {
            nestedList = ol(i.children).split('\n');
            nestedList.map(function(_, j) {
                nestedList[j] = '        ' + nestedList[j];
            });
            htmlStr = htmlStr.concat(nestedList);
            htmlStr.push('    </li>');
        } else {
            htmlStr[htmlStr.length - 1] += '</li>';
        }
    });

    htmlStr.push('</ol>');

    return htmlStr.join('\n');
};

exports.ol = ol;

var ul = function(items) {
    var htmlStr = ['<ul>'],
        nestedList;

    items.forEach(function(i) {
        htmlStr.push('    <li>' + i.label);
        if(i.hasOwnProperty('children')) {
            nestedList = ul(i.children).split('\n');
            nestedList.map(function(_, j) {
                nestedList[j] = '        ' + nestedList[j];
            });
            htmlStr = htmlStr.concat(nestedList);
            htmlStr.push('    </li>');
        } else {
            htmlStr[htmlStr.length - 1] += '</li>';
        }

    });

    htmlStr.push('</ul>');

    return htmlStr.join('\n');

};

exports.ul = ul;
