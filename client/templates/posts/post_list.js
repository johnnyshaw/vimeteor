/**
 * Created by Administrator on 2015/11/10.
 */
var postsData = [
    {
        title: 'baidu',
        url: 'http://www.baidu.com'
    },
    {
        title: 'alibaba',
        url: 'http://www.alibaba.com'
    },
    {
        title: 'tencent',
        url: 'http://www.tencent.com'
    }
];
Template.postsList.helpers({
    posts: function(){
        return Posts.find({author:'johnny',category:'JavaScript'});
    }
});