Meteor.startup(function() {
    var arr = [];
    function generateInt (){
        for (var i=0, t=5; i<4; i++) {
            arr.push(Math.round(Math.random() * t))
        }
        return arr;
    }
    generateInt();
    Factory.define('task', Tasks, {
        name: function() { return Fake.word(); },
        duties:function() { return generateInt()}
    });
    if (Tasks.find({}).count() === 0) {
        _(6).times(function(n) {
            Factory.create('task');
        });
    }
});
