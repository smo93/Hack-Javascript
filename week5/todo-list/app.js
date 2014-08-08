$(document).ready(function() {
  var tasks = JSON.parse(localStorage.getItem("tasks")),
    taskTemplate = Handlebars.compile($('#task-row-template').html());

  if(tasks === null) { tasks = []; }

  function fillTasksTable() {
    var table = $('#tasks-table'),
      tbody = table.children('tbody');

    tbody.empty();

    if(tasks.length === 0) {
      table.hide();
    } else {
      table.show();

      tbody.append(taskTemplate({ tasks: tasks }));

      $('.delete-btn').on('click', function() {
        delTask($(this).data('title'), $(this).data('added'));
      });
    }
  }

  function updateLocalData() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  function delTask(taskTitle, added) {
    tasks = tasks.filter(function(elem) {
      if(elem.title === taskTitle && elem.added === added) { return false; }
      return true;
    });

    updateLocalData();
    fillTasksTable();
  }

  fillTasksTable();

  $('#add-task').on('click', function() {
    var form = $('#new-task-form'),
      task,
      taskTitle,
      added = moment(),
      deadline,
      description,
      started,
      err = false,
      errMsg = [];

    taskTitle = form.find('#task').val();
    if(taskTitle === '') {
      errMsg.push('The title field is empty!');
      form.find('#task').parents('div.form-group').addClass('has-error');
      err = true;
    }

    deadline = moment(form.find('#deadline').val(), 'YYYY-MM-DD');
    if(deadline.isBefore(added)) {
      errMsg.push('The deadline is in the past already!');
      form.find('#deadline').parents('div.form-group').addClass('has-error');
      err = true;
    }

    description = form.find('#description').val();
    if(description === '') {
      errMsg.push('The description field is empty!');
      form.find('#description').parents('div.form-group').addClass('has-error');
      err = true;
    }

    started = form.find('#started').is(':checked').toString();

    if(err) { 
      alert(errMsg.join('\n'));
      return false;
    }

    task = {
      title : taskTitle,
      added : added.format('DD-MM-YYYY'),
      deadline : deadline.format('DD-MM-YYYY'),
      description : description,
      started : started
    };

    $('input, textarea').each(function() {
      $(this).val('');
    });

    tasks.push(task);
    fillTasksTable();

    updateLocalData();

    return false;
  });
});
