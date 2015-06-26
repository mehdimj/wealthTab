Tasks = new Mongo.Collection("tasks");
Tasks.helpers({

});
Tasks.before.insert(function (userId, doc) {
    doc.createdAt = moment().toDate();
});
