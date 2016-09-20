/**
 * Created by Administrator on 2016/9/19 0019.
 */
ownsDocument = function(userId, doc) {
    return doc && doc.userId === userId;
}