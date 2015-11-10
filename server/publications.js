/**
 * Created by Administrator on 2015/11/10.
 */
Meteor.publish('allPosts',function(){
    return Posts.find({},{fields:{date:false}});
});