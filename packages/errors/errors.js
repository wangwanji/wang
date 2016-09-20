/**
 * Created by Administrator on 2016/9/19 0019.
 */
Errors = {
    // Local (client-only) collection
    collection: new Mongo.Collection(null),

    throw: function(message) {
        Errors.collection.insert({message: message, seen: false})
    }
};