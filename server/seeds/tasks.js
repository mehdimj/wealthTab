Meteor.startup(function() {
    var arr = [];
    Factory.define('task', Tasks, {
        name: function() { return Fake.word(); },
        data: function() {return [2,4,0,3]}
    });
    if (Tasks.find({}).count() === 0) {
        _(6).times(function(n) {
            Factory.create('task');
        });
    }

});
