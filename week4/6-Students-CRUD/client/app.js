var serverAddr = 'http://localhost:3030/';

$(document).ready(function() {
  function loadStudents(callBack) {
    $.ajax({
      type : 'GET',
      url : serverAddr + 'students'
    }).done(callBack);
  }

  function fillAccordion(data) {
    var studentPanelTemplate = $('#student-panel').html(),
      studentPanel = Handlebars.compile(studentPanelTemplate),
      panelContainer = $('#accordion'),
      newPanel, fn;

    panelContainer.empty();

    data.forEach(function(student) {
      newPanel = $(studentPanel(student));
      fn = newPanel.data('fn');

      newPanel.on('click', '.delete', function() {
        $.ajax({
          headers : { 'Access-Control-Allow-Methods' : 'GET, POST, OPTIONS, DELETE' },
          type : 'DELETE',
          url : serverAddr + 'student/' + fn
        }).done(function() {
          loadStudents(fillAccordion);
        });

      return false;
      });

      panelContainer.append(newPanel);
    });

    //panelContainer.find('.panel-collapse').first().addClass('in');
  }

  function checkNumberField() {
    var $this = $(this),
      val = $this.val(),
      parsedVal = parseInt(val);

    if(isNaN(parsedVal)) {
      $this.parent().addClass('has-error');
    } else {
      $this.parent().removeClass('has-error');
    }
  }

  function clearForm() {
    $('#fn').val('');
    $('#name').val('');
    $('#courses').val('');
  }

  $('#fn').on('keyup', checkNumberField);
  $('#add').on('click', function() {
    var fn = $('#fn').val(),
      studentName = $('#name').val(),
      c = $('#courses').val();

    $.ajax({
      contentType : 'application/json',
      data : JSON.stringify( {
        name : studentName,
        facultyNumber : fn,
        courses : c
      } ),
      type : 'POST',
      url : serverAddr + 'student'
    }).done(function() {
      alert('done');
      loadStudents(fillAccordion);
    });

    clearForm();

    return false;
  });

  loadStudents(fillAccordion);
});
