"use strict";

$(document).ready(function() {
    //alert("Hooray, everything runs ok. You can remove this annoying alert from the code.");
    //
    var allStudents = [],
        studentsByGroups = {};

    var generateThead = function(fields) {
        var html = ['<thead>'],
            i = 0,
            n = fields.length;

        fields.forEach(function(field, i) {
            if(i === 0) {
                html.push('<th width="20px">' + field.toUpperCase() + '</th>');
            } else {
                html.push('<th width="200px">' + field + '</th>');
            }
        });

        html.push('</thead>');

        return html;
    };

    var generateTbody = function(rows) {
        var html = ['<tbody>'];

        rows.forEach(function(row) {
            html.push('<tr>');

            for(var i in row) {
                html.push('<td>' + row[i] + '</td>');
            }

            html.push('</tr>');
        });

        return html;
    };

    var generateTable = function(data) {
        var fields = Object.keys(data[0]),
            html = ['<table class="table table-striped">'];

        html = html.concat(generateThead(fields));
        html = html.concat(generateTbody(data));
        html.push('</table>');

        return html.join('\n');
    };

    $.getJSON('http://localhost:3000/students', function(students, textStatus) {
        console.log(textStatus);
        console.log(students);

        allStudents = students;
        var tableHtml = generateTable(students);

        $('#tables').append('<div class="row"><div class="col-xs-12"></div></div>');

        $('#tables').find('.row').find('.col-xs-12').append(tableHtml);
    });

    var highlight = function() {
        var searched = $("#search-box").val(),
            fullName;

        $('tr').removeClass();

        if(searched === '') {return;}

        fullName = allStudents.map(function(student) {
            return student.name;
        }).filter(function(student) {
            return student.toLowerCase().search(searched.toLowerCase()) != -1;
        });

        fullName.forEach(function(name) {
            $('tr:contains(\'' + name + '\')').addClass('success');
        });
    };

    $("#group-btn").on("click", function() {
        var i = 0, n = allStudents.length,
            row, keys;

        for(i; i < n; i++) {
            if(!studentsByGroups.hasOwnProperty(allStudents[i].course)) {
                studentsByGroups[allStudents[i].course] = [];
            }

            studentsByGroups[allStudents[i].course].push(allStudents[i]);
        }

        $('#tables').empty();

        keys = Object.keys(studentsByGroups);
        keys.forEach(function(val, i) {
            var html = generateTable(studentsByGroups[val]);
            console.log(html);

            if(i % 3 === 0) {
                $('#tables').append('<div id="row' + i + '" class="row">');
                row = $('#tables').find('#row' + i);
            }
            row.append('<div class="col-xs-4 ' + i % 3 + '"></div>');
            row.find('.' + i % 3).append('<h4>' + val + '</h4>');
            row.find('.' + i % 3).append(html);
        });
    });

    $("#search-btn").on("click", highlight);
    $("#search-box").keyup(function(e) {
        var code = e.which;

        if(code === 13) {
            highlight();
        }
    });
});
