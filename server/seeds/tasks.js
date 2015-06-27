Meteor.startup(function() {
    var arr = [];
    Factory.define('task', Tasks, {
        name: function() { return Fake.word(); },
        data:[2,4,0,3]
    });
    if (Tasks.find({}).count() === 0) {
        _(5).times(function(n) {
            Factory.create('task');
        });
    }

});
