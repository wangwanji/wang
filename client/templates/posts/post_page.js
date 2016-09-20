/**
 * Created by Administrator on 2016/9/19 0019.
 */
Template.postPage.helpers({
    comments: function() {
        return Comments.find({postId: this._id});
    }
});