google.charts.load('current', {'packages':['line']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

    var data = new google.visualization.DataTable();
    data.addColumn('number', 'Day');
    data.addColumn('number', 'Sales');

    data.addRows([
        [1, 1000],
        [2, 2000],
        [3, 3000],
        [4, 0],
        [5, 100],
        [6, 1500],
        [7, 9000],
        [8, 1300],
        [9, 150],
        [10, 3400],
        [11, 0],
        [12, 0],
        [13, 100],
        [14, 220],
        [15, 0],
        [16, 1000],
        [17, 1000],
        [18, 0],
        [19, 2000],
        [20, 3000],
        [21, 3000],
        [22, 0],
        [23, 3000],
        [24, 0],
        [25, 100],
        [26, 1500],
        [27, 9000],
        [28, 1300],
        [29, 150],
        [30, 9000],
        [31, 1300],
    ]);

    var options = {
        height: 500,
        legend: { position: 'none' },
        lineWidth: 4,
    };

    var chart = new google.charts.Line(document.getElementById('linechart_material'));
    chart.draw(data, google.charts.Line.convertOptions(options));
}