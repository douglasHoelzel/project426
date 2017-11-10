var testAsset;

(function () {

    angular
        .module('myApp')
        .controller('MainController', function MainController($scope, $http) {
            var vm = this;
            $scope.selectedAsset = " ";
            $scope.tickerId;
            $scope.startDate;
            $scope.toDate;
            $scope.fromDate;
            $scope.endDate;

            $scope.asset = ['AAAP', 'AABA', 'AABA', 'AAME', 'AAOI',
                'AAON', 'AAPL', 'AAWW', 'AAXJ', 'BMTC', 'BNCL',
                'BNDX', 'BNFT', 'BNSO', 'CAKE', 'CALA', 'CALD', 'CALI',
                'CALL', 'CALM', 'DWTR', 'DXGE', 'DXJS', 'ERII',
                'ESBK', 'ESCA'
            ];
            /*testing*/

            $(function () {
                var dateFormat = "mm/dd/yy",
                    from = $("#from")
                    .datepicker({
                        defaultDate: "+1w",
                        changeMonth: true,
                        changeYear: true,
                        numberOfMonths: 1
                    })
                    .on("change", function () {
                        to.datepicker("option", "minDate", getDate(this));
                        startDate = getDate(this);
                    }),
                    to = $("#to").datepicker({
                        defaultDate: "+1w",
                        changeMonth: true,
                        changeYear: true,
                        numberOfMonths: 1
                    })
                    .on("change", function () {
                        from.datepicker("option", "maxDate", getDate(this));
                        endDate = getDate(this);
                    });

                function getDate(element) {
                    var date;
                    try {
                        date = $.datepicker.parseDate(dateFormat, element.value);
                    } catch (error) {
                        date = null;
                    }

                    return date;
                }
            });

            var on_complete = function (response) {
                $scope.data = response.data;
                console.log(response.data);
                console.log(response.data.current_date);
                console.log(response.data.daily_average_return);
            };

            //On Error for Ajax Call
            var on_error = function (response) {
                $scope.error = "Error getting data";
            };

            $scope.searchAsset = function searchAsset(selectedAsset, fromDate, toDate) {
                var fromDate = fromDate.replace("/", "-");
                var toDate = toDate.replace("/", "-");
                var fromDate = fromDate.replace("/", "-");
                var toDate = toDate.replace("/", "-");
                if (fromDate == null || toDate == null || fromDate == "" || toDate == "") {
                    swal(
                        'Please enter a valid start and end date',
                        '',
                        'error'
                    )
                }
                if (selectedAsset == null || selectedAsset == "") {
                    swal(
                        'Please enter an asset name',
                        '',
                        'error'
                    )
                }

                //Change date formatting
                var convert_date = function (date) {
                    return date.replace(/\//g, "-")
                }

                var test_string = "http://localhost:5000/" + selectedAsset + "/" + convert_date(fromDate) + "/" + convert_date(toDate);
                //Will need to change when put on local server
                $http.get("http://localhost:5000/" + selectedAsset + "/" + convert_date(fromDate) + "/" + convert_date(toDate))
                    .then(on_complete, on_error);
            };

            /* End of search bar function */
            $scope.grabCharts = function grabCharts(ticker) {
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
                    }, {
                        name: 'Sample3',
                        data: [2, 3, 4]
                    }]
                });
                /* End Chart Data */
                /* Highchart 2 */
                var myChart2 = Highcharts.chart('highchartsContainer2', {
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
                    }, {
                        name: 'Sample3',
                        data: [9, 2, 5]
                    }]
                });

                $.getJSON('https://www.highcharts.com/samples/data/jsonp.php?filename=goog-c.json&callback=?', function (data) {
                    Highcharts.stockChart('highchartsContainer3', {
                        rangeSelector: {
                            selected: 1
                        },

                        title: {
                            text: ' GOOG Stock Price'
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


            }; // Ends grabCharts() function




        });
}());
