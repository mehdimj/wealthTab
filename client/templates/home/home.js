Tracker.autorun(function(){
    Meteor.subscribe("tasks", function(){
    });
});
Template.home.rendered = function() {
    var duties = Tasks.find().fetch();
    console.log(duties);
    var result = [];
    duties.forEach(function(data){
        result.push({
            name : data.name,
            data : data.data
        })
    });
    console.log(result);
    $(function(){
        $('#container').highcharts({
            chart: {
                type: 'bar'
            },
            title: {
                text: 'Task Counter'
            },
            xAxis: {
                categories: ['Clean', 'Work', 'Travel', 'Eat']
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Assignee'
                }
            },
            legend: {
                reversed: true
            },
            plotOptions: {
                series: {
                    stacking: 'normal'
                }
            },
            series: result
        });
    });
};