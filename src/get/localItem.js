/*
 * @Author: lionluo
 * @Date:   2017-11-25 15:56:03
 * @Last Modified by:   lion1ou
 * @Last Modified time: 2017-11-25 16:00:57
 */
/**
 * [localItem localStorage存储或读取，只传一个参数则是获取]
 * @param  {[type]} key   [description]
 * @param  {[type]} value [description]
 * @return {[type]}       [description]
 */
function localItem(key, value) {
  if (arguments.length == 1) {
    return localStorage.getItem(key)
  } else {
    return localStorage.setItem(key, value)
  }
}
module.exports = localItem;
