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


});
