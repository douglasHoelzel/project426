var myApp = angular.module('myApp', []);

myApp.controller('MainController', function MainController($scope){

console.log("inside of MainController");
var vm = this;
$scope.name = "doug";
$scope.dummyData = [{
                    "id": "694653"
                    ,"t" : "GOOG"
                    ,"e" : "NASDAQ"
                    ,"l" : "58.84"
                    ,"l_cur" : "58.84"
                    ,"s": "0"
                    ,"ltt":"4:00PM EDT"
                    ,"lt" : "AUG 30, 4:00PM IST"
                    ,"c" : "+0.16"
                    ,"cp" : "0.05"
                    ,"ccol" : "chg"
                },{
                    "id": "694653"
                    ,"t" : "AAPL"
                    ,"e" : "NASDAQ"
                    ,"l" : "33.84"
                    ,"l_cur" : "38.34"
                    ,"s": "0"
                    ,"ltt":"3:00PM EDT"
                    ,"lt" : "AUG 19, 4:00PM IST"
                    ,"c" : "+0.11"
                    ,"cp" : "0.11"
                    ,"ccol" : "chg"
                }];

                console.log("before ajax calls");
                $.ajax({
                  type: "GET",
                  url: "~/pythoncode.py",
                  data: { param: text}
                }).done(function( o ) {
                   // do something
                });

                $.ajax({
                       url: '/api/your_controller_name/SayHi/' + your_param,
                       type: 'GET',
                       success: function (response) {
                           console.log(response);
                       },
                       error: function (error) {
                           console.log(error);
                       }
                    });
                 console.log("after ajax calls");

/* Chart Data */
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
/* End Chart Data */
/* Highchart 2 */
var myChart2 =
 Highcharts.chart('highchartsContainer2', {
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
        data: [3, 1, 1]
    }, {
        name: 'Sample2',
        data: [9, 8, 2]
    },{
        name: 'Sample3',
        data: [9, 2, 5]
    }]
});
/* End Highchart 2 */
/* Highchart 3 */
$.getJSON('https://www.highcharts.com/samples/data/jsonp.php?filename=goog-c.json&callback=?', function (data) {

    Highcharts.stockChart('highchartsContainer3', {
        rangeSelector: {
            selected: 1
        },

        title: {
            text: 'GOOG Stock Price'
        },

        series: [{
            name: 'GOOG Stock Price',
            data: data,
            marker: {
                enabled: true,
                radius: 3
            },
            shadow: true,
            tooltip: {
                valueDecimals: 2
            }
        }]
    });
});

/* End Highchart 3 */



});
