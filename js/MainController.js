(function () {

    angular
        .module('myApp')
        .controller('MainController', function MainController($scope){
var vm = this;
$scope.selectedAsset = undefined;
$scope.tickerId;
$scope.startDate;
$scope.endDate;
// Current array for testing typeahead feature
// This needs to be an ajax call in the future to populate
// the asset array w/ all ticker symbols
$scope.asset = ['AAAP', 'AABA', 'AABA', 'AAME', 'AAOI',
  'AAON', 'AAPL', 'AAWW', 'AAXJ', 'BMTC', 'BNCL',
  'BNDX', 'BNFT', 'BNSO', 'CAKE', 'CALA', 'CALD', 'CALI',
  'CALL', 'CALM', 'DWTR', 'DXGE', 'DXJS', 'ERII',
  'ESBK', 'ESCA'];

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
          console.log("start date: " + startDate);
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
        console.log("end date: " + endDate);
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

 $scope.grabCharts = function grabCharts(){
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
