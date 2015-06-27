Meteor.startup(function() {
    var arr = [];
    Factory.define('task', Tasks, {
        name: function() { return Fake.word(); },
        data: function() {return [0,1,3,4,3]}
    });

    if (Tasks.find({}).count() === 0) {

        _(10).times(function(n) {
            Factory.create('task');
        });
    }

});
