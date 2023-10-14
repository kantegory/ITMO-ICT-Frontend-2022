"use strict";

let sessions_data = JSON.parse(myVar);
console.log(sessions_data);

let dates_sucs_sessions = sessions_data.success_sessions.dates;
let points_sucs_sessions = sessions_data.success_sessions.points;
let dates_fail_sessions = sessions_data.failed_sessions.dates;
let points_fail_sessions = sessions_data.failed_sessions.points;

let dates_sucs_sessions_for_charts;
let points_sucs_sessions_for_charts;
let dates_fail_sessions_for_charts;
let points_fail_sessions_for_charts;

if (dates_fail_sessions.length > 20) {
  dates_sucs_sessions_for_charts = dates_sucs_sessions.slice(-20);
  points_sucs_sessions_for_charts = points_sucs_sessions.slice(-20);
  dates_fail_sessions_for_charts = dates_fail_sessions.slice(-20);
  points_fail_sessions_for_charts = points_fail_sessions.slice(-20);
}
else {
  dates_sucs_sessions_for_charts = dates_sucs_sessions;
  points_sucs_sessions_for_charts = points_sucs_sessions;
  dates_fail_sessions_for_charts = dates_fail_sessions;
  points_fail_sessions_for_charts = points_fail_sessions;
}

var randomChartData = function randomChartData(n, min, max) {
  var data = [];
  for (var i = 0; i < n; i++) {
    data.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }

  return data;
};


function updateScale(chart) {
  let fromDateChartDisplay = document.getElementById("inputDateFrom").value;
  let toDateChartDisplay = document.getElementById("inputDateTo").value;
  console.log("FAC1!!!!", fromDateChartDisplay);

  if (fromDateChartDisplay !== "" && toDateChartDisplay !== "") {
    let left_filter_index = dates_sucs_sessions.indexOf(fromDateChartDisplay);
    let right_filter_index = dates_sucs_sessions.indexOf(toDateChartDisplay);

    dates_sucs_sessions_for_charts = dates_sucs_sessions.slice(left_filter_index, right_filter_index);
    points_sucs_sessions_for_charts = points_sucs_sessions.slice(left_filter_index, right_filter_index);
    dates_fail_sessions_for_charts = dates_fail_sessions.slice(left_filter_index, right_filter_index);
    points_fail_sessions_for_charts = points_fail_sessions.slice(left_filter_index, right_filter_index);
  }

  if (chart === chrt1 || chart === chrt2) {
    chart.data.datasets = [{
      fill: false,
      borderColor: chartColors["default"].primary,
      borderWidth: 2,
      borderDash: [],
      borderDashOffset: 0.0,
      pointBackgroundColor: chartColors["default"].primary,
      pointBorderColor: 'rgba(255,255,255,0)',
      pointHoverBackgroundColor: chartColors["default"].primary,
      pointBorderWidth: 20,
      pointHoverRadius: 4,
      pointHoverBorderWidth: 15,
      pointRadius: 4,
      data: points_sucs_sessions_for_charts,
    }, {
      fill: false,
      borderColor: chartColors["default"].info,
      borderWidth: 2,
      borderDash: [],
      borderDashOffset: 0.0,
      pointBackgroundColor: chartColors["default"].info,
      pointBorderColor: 'rgba(255,255,255,0)',
      pointHoverBackgroundColor: chartColors["default"].info,
      pointBorderWidth: 20,
      pointHoverRadius: 4,
      pointHoverBorderWidth: 15,
      pointRadius: 4,
      data: points_fail_sessions_for_charts,
    }];
    chart.data.labels = dates_sucs_sessions_for_charts;
    chart.update();
  }
  else if (chart === chrt3) {
    chart.data.datasets = [{
          label: "Необработанные заявки",
          type: "line",
          borderColor: "#8e5ea2",
          data: points_fail_sessions_for_charts,
        }, {
          label: "Обработанные заявки",
          type: "line",
          borderColor: "#3e95cd",
          data: points_sucs_sessions_for_charts,
          fill: false
        }, {
          label: "Необработанные заявки",
          fill: false,
          borderColor: chartColors["default"].info,
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: chartColors["default"].info,
          pointBorderColor: 'rgba(255,255,255,0)',
          pointHoverBackgroundColor: chartColors["default"].info,
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: points_fail_sessions_for_charts,
        }, {
          fill: false,
          borderColor: chartColors["default"].primary,
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: chartColors["default"].primary,
          pointBorderColor: 'rgba(255,255,255,0)',
          pointHoverBackgroundColor: chartColors["default"].primary,
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          label: "Обработанные заявки",
          data: points_sucs_sessions_for_charts,
        }
      ];
    chart.data.labels = dates_sucs_sessions_for_charts;
    chart.update();
  }
}

let chartColors = {
  "default": {
    primary: '#00D1B2',
    info: '#FF3860',
    danger: '#FF3860'
  }
};



var ctx = document.getElementById('big-line-chart').getContext('2d');
var chrt1 = new Chart(ctx, {
  type: 'line',
  data: {
    datasets: [{
      fill: false,
      borderColor: chartColors["default"].primary,
      borderWidth: 2,
      borderDash: [],
      borderDashOffset: 0.0,
      pointBackgroundColor: chartColors["default"].primary,
      pointBorderColor: 'rgba(255,255,255,0)',
      pointHoverBackgroundColor: chartColors["default"].primary,
      pointBorderWidth: 20,
      pointHoverRadius: 4,
      pointHoverBorderWidth: 15,
      pointRadius: 4,
      data: points_sucs_sessions_for_charts,
    }, {
      fill: false,
      borderColor: chartColors["default"].info,
      borderWidth: 2,
      borderDash: [],
      borderDashOffset: 0.0,
      pointBackgroundColor: chartColors["default"].info,
      pointBorderColor: 'rgba(255,255,255,0)',
      pointHoverBackgroundColor: chartColors["default"].info,
      pointBorderWidth: 20,
      pointHoverRadius: 4,
      pointHoverBorderWidth: 15,
      pointRadius: 4,
      data: points_fail_sessions,
    }],
    labels: dates_sucs_sessions_for_charts,
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    responsive: true,
    tooltips: {
      backgroundColor: '#f5f5f5',
      titleFontColor: '#333',
      bodyFontColor: '#666',
      bodySpacing: 4,
      xPadding: 12,
      mode: 'nearest',
      intersect: 0,
      position: 'nearest'
    },
    scales: {
      yAxes: [{
        barPercentage: 1.6,
        gridLines: {
          drawBorder: false,
          color: 'rgba(29,140,248,0.0)',
          zeroLineColor: 'transparent'
        },
        ticks: {
          padding: 20,
          fontColor: '#9a9a9a'
        }
      }],
      xAxes: [{
        barPercentage: 1.6,
        gridLines: {
          drawBorder: false,
          color: 'rgba(225,78,202,0.1)',
          zeroLineColor: 'transparent'
        },
        ticks: {
          padding: 20,
          fontColor: '#9a9a9a'
        }
      }]
    }
  }
});



// TEMP
var ctx = document.getElementById('big-line-chart2').getContext('2d');
var chrt2 = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: dates_sucs_sessions_for_charts,
      datasets: [
        {
          fill: false,
          borderColor: chartColors["default"].primary,
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: chartColors["default"].primary,
          pointBorderColor: 'rgba(255,255,255,0)',
          pointHoverBackgroundColor: chartColors["default"].primary,
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          label: "Обработанные заявки",
          data: points_sucs_sessions_for_charts,
        }, {
          fill: false,
          borderColor: chartColors["default"].info,
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: chartColors["default"].info,
          pointBorderColor: 'rgba(255,255,255,0)',
          pointHoverBackgroundColor: chartColors["default"].info,
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          label: "Необработанные заявки",
          data: points_fail_sessions_for_charts,
        },

      ]
    },
    options: {
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    responsive: true,
    tooltips: {
      backgroundColor: '#f5f5f5',
      titleFontColor: '#333',
      bodyFontColor: '#666',
      bodySpacing: 4,
      xPadding: 12,
      mode: 'nearest',
      intersect: 0,
      position: 'nearest'
    },
    scales: {
      yAxes: [{
        barPercentage: 1.6,
        gridLines: {
          drawBorder: false,
          color: 'rgba(29,140,248,0.0)',
          zeroLineColor: 'transparent'
        },
        ticks: {
          padding: 20,
          fontColor: '#9a9a9a'
        }
      }],
      xAxes: [{
        barPercentage: 1.6,
        gridLines: {
          drawBorder: false,
          color: 'rgba(225,78,202,0.1)',
          zeroLineColor: 'transparent'
        },
        ticks: {
          padding: 20,
          fontColor: '#9a9a9a'
        }
      }]
    }
  }
});

var ctx = document.getElementById('big-line-chart3').getContext('2d');
var chrt3 = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: dates_sucs_sessions_for_charts,
      datasets: [{
          label: "Необработанные заявки",
          type: "line",
          borderColor: "#8e5ea2",
          data: points_fail_sessions_for_charts,
        }, {
          label: "Обработанные заявки",
          type: "line",
          borderColor: "#3e95cd",
          data: points_sucs_sessions_for_charts,
          fill: false
        }, {
          label: "Необработанные заявки",
          fill: false,
          borderColor: chartColors["default"].info,
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: chartColors["default"].info,
          pointBorderColor: 'rgba(255,255,255,0)',
          pointHoverBackgroundColor: chartColors["default"].info,
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: points_fail_sessions_for_charts,
        }, {
          fill: false,
          borderColor: chartColors["default"].primary,
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: chartColors["default"].primary,
          pointBorderColor: 'rgba(255,255,255,0)',
          pointHoverBackgroundColor: chartColors["default"].primary,
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          label: "Обработанные заявки",
          data: points_sucs_sessions_for_charts,
        }
      ]
    },

    options: {
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    responsive: true,
    tooltips: {
      backgroundColor: '#f5f5f5',
      titleFontColor: '#333',
      bodyFontColor: '#666',
      bodySpacing: 4,
      xPadding: 12,
      mode: 'nearest',
      intersect: 0,
      position: 'nearest'
    },
    scales: {
      yAxes: [{
        barPercentage: 1.6,
        gridLines: {
          drawBorder: false,
          color: 'rgba(29,140,248,0.0)',
          zeroLineColor: 'transparent'
        },
        ticks: {
          padding: 20,
        }
      }],
      xAxes: [{
        barPercentage: 1.6,
        gridLines: {
          drawBorder: false,
          color: 'rgba(225,78,202,0.1)',
          zeroLineColor: 'transparent'
        },
        ticks: {
          padding: 20,

        }
      }]
    }
  }
});