google.charts.load('current', {
    'packages': ['corechart', 'table']
});
google.charts.setOnLoadCallback(drawCharts);

function drawCharts() {
    drawTable();
    drawTable2();
}

function drawTable() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Category name');
    data.addColumn('number', 'Not completed');
    data.addColumn('number', 'Completed');

    data.addRows([
        ['Cat1', 3, 4],
        ['Cat2', 42, 344],
        ['Cat3', 1, 3],
        ['Cat4', 33, 345],
        ['Cat5', 12, 343]
    ]);

    var options = {
        allowHtml: true,
        showRowNumber: true,
        sortColumn: 0,
        width: '80%',
        height: '100%'
    };

    var table = new google.visualization.Table(document.getElementById('divTable'));
    table.draw(data, options);
}

function drawTable2() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Bookmarked content');//change on a page basis?
    data.addColumn('string', 'Lastest');
    data.addColumn('string', 'Status');
    data.addColumn('string', 'Remove');
    data.addColumn('string', 'setCategory');

    data.addColumn('string', 'Category');
    data.addColumn('string', 'linkToContent');
    data.addColumn('string', 'linkToCover');
    data.addColumn('string', 'tooltipText');

}
