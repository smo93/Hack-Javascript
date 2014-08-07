$(document).ready(function() {
    var studentsByGroups = {},
        onChange, onChangeStudent,
        coursesSelect = $("#courses"),
        studentSelect = $("#students");

    onChange = function() {
        var currentCourse = coursesSelect.find("option:selected").text();

        $("#students").empty();

        studentsByGroups[currentCourse].forEach(function(student) {
            newOption = $("<option>" + student.name + "</option>");
            studentSelect.append(newOption);
        });

        onChangeStudent();
    };

    onChangeStudent = function() {
        var selectedStudent = studentSelect.find("option:selected").text(),
            currentCourse = coursesSelect.find("option:selected").text(),
            studentInfo = $("#student-info");

        studentsByGroups[currentCourse].forEach(function(student) {
            if(student.name === selectedStudent) {
                studentInfo.text("GitHub for " + student.name + " is " + student.github);
            }
        });
    };

    $.getJSON('http://localhost:3000/students', function(students, textStatus) {
        var newOption;

        students.forEach(function(student) {
            if(!studentsByGroups.hasOwnProperty(student.course)) {
                studentsByGroups[student.course] = [];
            }
            studentsByGroups[student.course].push(student);
        });


        Object.keys(studentsByGroups).forEach(function(key) {
            console.log(key);
            newOption = $("<option>" + key + "</option>");
            coursesSelect.append(newOption);
        });
        onChange();
    });

    $("#courses").on("change", function() {
        onChange();
    });

    $("#students").on("change", function() {
        onChangeStudent();
    });
});
