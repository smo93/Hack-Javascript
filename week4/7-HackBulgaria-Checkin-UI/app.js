$(document).ready(function() {
  var studentsData,
    days,
    weeks,
    months,
    visits = {},
    baseDatasets = [
      {
        label: "Core Java",
        fillColor: "rgba(0,220,0,0.5)",
        strokeColor: "rgba(0,220,0,0.8)",
        highlightFill: "rgba(0,220,0,0.75)",
        highlightStroke: "rgba(0,220,0,1)",
        data: []
      },
      {
        label: "Frontend JavaScript",
        fillColor: "rgba(0,0,220,0.5)",
        strokeColor: "rgba(0,0,220,0.8)",
        highlightFill: "rgba(0,0,220,0.75)",
        highlightStroke: "rgba(0,0,220,1)",
        data: []
      },
      {
        label: "Angular JS",
        fillColor: "rgba(151,187,0,0.5)",
        strokeColor: "rgba(151,187,0,0.8)",
        highlightFill: "rgba(151,187,0,0.75)",
        highlightStroke: "rgba(151,187,0,1)",
        data: []
      }];


  $('#interval').on('click', function() {
    fillForm();
    fillChart();
  });

  $('#start').on('click', function() {
    fillChart();
  });

  function fillForm() {
    var intervalType = $('#interval').val(),
      datesSelect = $('#start');

    datesSelect.empty();

    if(intervalType === 'Daily') {
      days.forEach(function(day) {
        datesSelect.append(['<option>', day.format('dddd, DD-MM-YYYY'), '</option>'].join(''));
      });
    } else if(intervalType === 'Weekly') {
      _(weeks).forEach(function(_, key) {
        var currentWeek = moment(key, 'w');

        datesSelect.append([
          '<option value="',
          key,
          '">',
          'from ',
          currentWeek.format('DD-MM-YYYY'),
          ' to ',
          currentWeek.day(6).format('DD-MM-YYYY'),
          '</option>'
          ].join(''));
      });
    } else if(intervalType === 'Monthly') {
      _(months).forEach(function(_, key) {
        var currentMonth = moment(parseInt(key) + 1, 'M');

        datesSelect.append([
          '<option value="',
          key,,
          '">',
          currentMonth.format('MMMM'),
          '</option>'
        ].join(''));
      });
    }
  }

  function calcCourseVisits(course, date) {
    return studentsData.filter(function(studentEntry) {
      return studentEntry.student_courses.filter(function(courses) {
          return _.contains(courses, course);
        }).length &&
        moment(studentEntry.date).isSame(date);
    }).length;
  }

  function fillChart() {
    $('#chart').width('1600px').height('1600px');

    var ctx = $('#chart').get(0).getContext('2d'),
      myNewChart = new Chart(ctx),
      data = {},
      intervalType = $('#interval').val(),
      options = {
        barDatasetSpacing : 15,
        barValueSpacing: 10,
        legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].lineColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
      };

    if(intervalType === 'Daily') {
      data.labels = [$('#start').val()];

      data.datasets = baseDatasets.map(function(course) {
        course.data = [visits[$('#start').val()][course.label]];

        return course;
      });

    } else if(intervalType === 'Weekly') {
      data.labels = weeks[$('#start').val()].map(function(day) { return day.format('DD-MM-YYYY'); });

      data.datasets = baseDatasets.map(function(course) {
        course.data = weeks[$('#start').val()].map(function(day) {
          return visits[day.format('dddd, DD-MM-YYYY')][course.label];
        });

        return course;
      });
    } else if(intervalType === 'Monthly') {
      data.labels = months[$('#start').val()].map(function(day) { return day.format('DD-MM-YYYY'); });

      data.datasets = baseDatasets.map(function(course) {
        course.data = months[$('#start').val()].map(function(day) {
          return visits[day.format('dddd, DD-MM-YYYY')][course.label];
        });

        return course;
      });

    }

    myNewChart.Bar(data, options);
  }

  function calcVisits() {
    days.forEach(function(day) {
      visits[day.format('dddd, DD-MM-YYYY')] = {
        'Frontend JavaScript' : calcCourseVisits('Frontend JavaScript', day),
        'Core Java' : calcCourseVisits('Core Java', day),
        'Angular JS' : calcCourseVisits('Angular JS', day)
      };
    });
  }

  $.getJSON('https://hackbulgaria.com/api/checkins/', function(data) {
    studentsData = data;
    days = _.pluck(studentsData, 'date');
    days = _.uniq(days);
    days = days.map(function(day) { return moment(day, 'YYYY-MM-DD'); });
    weeks = _.groupBy(days, function(day) { return day.week(); });
    months = _.groupBy(days, function(day) { return day.month(); });
    calcVisits();

  }).done(function() {
    $('form').removeClass('hidden');
    fillForm();
    fillChart();
  });
});
