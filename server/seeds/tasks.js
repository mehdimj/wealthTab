Meteor.startup(function() {

    function generateInt (){
        var arr = [];
        for (var i=0, t=4; i<t; i++) {
            arr.push(Math.round(Math.random() * t))
        }
        document.write(arr);
        return arr;
    }

    Factory.define('task', Tasks, {
        name: function() { return Fake.word(); },
        data:function() { return generateInt()}
    });
    if (Tasks.find({}).count() === 0) {
        _(5).times(function(n) {
            Factory.create('task');
        });
    }

});
