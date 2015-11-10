/**
 * Created by Administrator on 2015/11/10.
 */
Meteor.publish('posts',function(){
    return Posts.find();
});