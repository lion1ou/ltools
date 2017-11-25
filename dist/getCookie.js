/*
* @Author: lion1ou
* @Date:   2017-11-25 15:46:24
* @Last Modified by:   lion1ou
* @Last Modified time: 2017-11-25 15:51:10
*/
/**
 * [getCookie 获取cookie值]
 * @param  {[type]} key [cookie的key]
 * @return {[type]}      [description]
 */
function getCookie (key) {
  let reg = new RegExp('(^| )' + key + '=([^;]*)(;|$)')
  let arr = document.cookie.match(reg)
  if (arr) {
    return unescape(arr[2])
  }
  return null
}
module.exports = getCookie;
