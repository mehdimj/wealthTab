Meteor.startup(function() {
    var arr = [];
    Factory.define('task', Tasks, {
        name: function() { return Fake.word(); },
        data: function() {
                return
                    for (var i=0, t=4; i<t; i++) {
                        arr.push(Fake.Integer())
                    }
                }
    });

    if (Tasks.find({}).count() === 0) {

        _(10).times(function(n) {
            Factory.create('task');
        });
    }

});
