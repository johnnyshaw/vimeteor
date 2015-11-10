/**
 * Created by Administrator on 2015/11/10.
 */
Router.configure({
    layoutTemplate:'layout',
    loadingTemplate:'loading',
    notFoundTemplate:'notFound',
    waitOn:function(){return Meteor.subscribe('posts');}
});

Router.onBeforeAction('dataNotFound',{only:'postPage'});

Router.route('/',{name:'postsList'});
Router.route('/posts/:_id',{
    name:'postPage',
    data: function(){
        return Posts.findOne(this.params._id);
    }
});