/**
 * Created by Administrator on 2016/9/12 0012.
 */
/*var postsData = [
    {
        title: 'Introducing Telescope',
        url: 'http://sachagreif.com/introducing-telescope/'
    },
    {
        title: 'Meteor',
        url: 'http://meteor.com'
    },
    {
        title: 'The Meteor Book',
        url: 'http://themeteorbook.com'
    },
    {
        title: 'User',
        url: 'http://themeteorbook.com'
    },
    {
        title: 'Product',
        url: 'http://themeteorbook.com'
    }
];
Template.postsList.helpers({
    posts: postsData
});*/
Template.postsList.helpers({
    posts: function() {
        return Posts.find();
    }
});
