var testAsset;

(function () {

    angular
        .module('myApp')
<<<<<<< HEAD
        .controller('MainController', function MainController($scope){
=======
        .controller('MainController', function MainController($scope, $http){
>>>>>>> doug_branch
var vm = this;
$scope.selectedAsset = undefined;
$scope.tickerId;
$scope.startDate;
$scope.toDate;
$scope.fromDate;
$scope.endDate;
// Current array for testing typeahead feature
// This needs to be an ajax call in the future to populate
// the asset array w/ all ticker symbols
$scope.asset = ['AAAP', 'AABA', 'AABA', 'AAME', 'AAOI',
  'AAON', 'AAPL', 'AAWW', 'AAXJ', 'BMTC', 'BNCL',
  'BNDX', 'BNFT', 'BNSO', 'CAKE', 'CALA', 'CALD', 'CALI',
  'CALL', 'CALM', 'DWTR', 'DXGE', 'DXJS', 'ERII',
  'ESBK', 'ESCA'];
 /*testing*/
 // Simple GET request example:
 // url: 'https://www.quandl.com/api/v3/datasets/WIKI/AAPL.json?trim_start=2015-01-01&trim_end=2015-12-31'




 /*end testing */
 //https://www.quandl.com/api/v3/datasets/WIKI/AAPL.json?trim_start=2012-01-01&trim_end=2012-12-31
  /* Datepicker Functions */
  $( function() {
    var dateFormat = "mm/dd/yy",
      from = $( "#from" )
        .datepicker({
          defaultDate: "+1w",
          changeMonth: true,
          changeYear: true,
          numberOfMonths: 1
        })
        .on( "change", function() {
          to.datepicker( "option", "minDate", getDate( this ) );
          startDate = getDate(this);
        }),
      to = $( "#to" ).datepicker({
        defaultDate: "+1w",
        changeMonth: true,
        changeYear: true,
        numberOfMonths: 1
      })
      .on( "change", function() {
        from.datepicker( "option", "maxDate", getDate( this ) );
        endDate = getDate(this);
      });

    function getDate( element ) {
      var date;
      try {
        date = $.datepicker.parseDate( dateFormat, element.value );
      } catch( error ) {
        date = null;
      }

      return date;
    }
  } );
/* End of Datepicker functions */

<<<<<<< HEAD
 $scope.grabCharts = function grabCharts(){
=======
/* Takes in values from the search bar
 * validates the entries
 */
 $scope.searchAsset = function searchAsset(selectedAsset,fromDate, toDate){
     if (fromDate == null || toDate == null || fromDate == "" || toDate == ""){
         swal(
              'Please enter a valid start and end date',
              '',
              'error'
            )
     }
     if (selectedAsset == null){
         swal(
              'Please enter an asset name',
              '',
              'error'
            )
     }
 };

 /* End of search bar function */
 $scope.grabCharts = function grabCharts(ticker){
     console.log(ticker);
>>>>>>> doug_branch
     console.log("calling for charts");
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

    /* End Highchart 3 */
};// Ends grabCharts() function




});
}());
