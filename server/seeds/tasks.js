Meteor.startup(function() {
    var arr = [];
    function generateInt (){
        for (var i=0, t=5; i<4; i++) {
            arr.push(Math.round(Math.random() * t))
        }
        return arr;
    }
    generateInt();
    console.log(arr)

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
