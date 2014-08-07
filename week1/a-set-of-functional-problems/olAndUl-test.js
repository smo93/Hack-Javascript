"use strict";

var ol = require('./olAndUl').ol,
    ul = require('./olAndUl').ul;

exports.testOl = function(test) {
    var expected = [
        '<ol>',
        '    <li>1</li>',
        '    <li>2</li>',
        '</ol>'];

    test.equal(expected.join('\n'), ol([{'label': '1'}, {'label': '2'}]));
    test.done();
};

exports.testOlWithNestedLists = function(test) {
    var expected = [
        '<ol>',
        '    <li>Item 1</li>',
        '    <li>Item 2',
        '        <ol>',
        '            <li>Level 2 of Item 2</li>',
        '            <li>Another level 2</li>',
        '        </ol>',
        '    </li>',
        '</ol>'],
        items = [{ "label" : "Item 1"},
            { "label" : "Item 2", "children" : [
                {
                    "label" : "Level 2 of Item 2"
                },
                {
                    "label" : "Another level 2"
                }
             ]}];
    test.equal(expected.join('\n'), ol(items));
    test.done();
};

exports.testUl = function(test) {
    var expected = [
        '<ul>',
        '    <li>2</li>',
        '    <li>1</li>',
        '</ul>'];

    test.equal(expected.join('\n'), ul([{'label': '2'}, {'label': '1'}]));
    test.done();
};

exports.testUlWithNestedLists = function(test) {
    var expected = [
        '<ul>',
        '    <li>Item 1</li>',
        '    <li>Item 2',
        '        <ul>',
        '            <li>Level 2 of Item 2</li>',
        '            <li>Another level 2</li>',
        '        </ul>',
        '    </li>',
        '</ul>'],
        items = [{ "label" : "Item 1"},
            { "label" : "Item 2", "children" : [
                {
                    "label" : "Level 2 of Item 2"
                },
                {
                    "label" : "Another level 2"
                }
             ]}];

    test.equal(expected.join('\n'), ul(items));
    test.done();
};
