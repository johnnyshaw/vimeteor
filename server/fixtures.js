/**
 * Created by Administrator on 2015/11/10.
 */
if(Posts.find().count()===0){
    console.log("------server---------");
    Posts.insert({
       title: 'baidu1',
        url: 'http://www.baidu.com'
    });

    Posts.insert({
       title: 'alibaba1',
        url: 'http://www.alibaba.com'
    });

    Posts.insert({
        title: 'tencent1',
        url: 'http://www.tencent.com'
    });

}