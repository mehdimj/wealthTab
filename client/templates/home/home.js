Template.home.rendered = function() {
       //ChartJS Example
//    var tasks = Tasks.find().fetch();
//    console.log(tasks);
//    var names= [];
//    var ages = [];
//    tasks.forEach(function(data){
//        names.push([data.name]);
//        ages.push([data.age]);
//    });
//    console.log(names);
//    console.log(ages);
//    function drawChart(){
//        var data = {
//            type:'bar',
//            labels : names,
//            datasets : [
//                {
//                    fillColor : "rgba(220,220,220,0.5)",
//                    strokeColor : "rgba(220,220,220,1)",
//                    pointColor : "rgba(220,220,220,1)",
//                    pointStrokeColor : "#fff",
//                    data : ages
//                }
//            ]
//        };
//        var ctx = $("#myChart").get(0).getContext("2d");
//        var myNewChart = new Chart(ctx);
//        new Chart(ctx).Line(data);
//    }
//    drawChart();
};
//HighChart Example
Template.highchart.rendered = function() {
    var people = Tasks.find();
    var names;
    var ages = [];
    var points = [];

    people.forEach(function(data){
        points.push([data.name],[data.age]);
    });
    console.log(points);
    chartOptions = {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: "bar",
            renderTo: "highchart"
        },
        series: [{
        type: 'bar',
        name: 'WealthTab',
        data: points
    }]
};

var chart = new Highcharts.Chart(chartOptions);
};