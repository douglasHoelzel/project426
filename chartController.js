
$(function () {
    var myChart = Highcharts.chart('highchartsContainer', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Stock Header Here'
        },
        colors: ['#4BA2EA', '#CBCBCB', '#266FAD'],
        xAxis: {
            categories: ['Div', 'EL Fix', 'LTT']
        },
        yAxis: {
            title: {
                text: ''
            }
        },
        series: [{
            name: 'Sample1',
            data: [1, 4, 4]
        }, {
            name: 'Sample2',
            data: [5, 7, 3]
        },{
            name: 'Sample3',
            data: [2, 3, 4]
        }]
    });
}); //Ends JavaScript Function
