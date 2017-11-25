/*
* @Author: lion1ou
* @Date:   2017-11-25 15:50:41
* @Last Modified by:   lion1ou
* @Last Modified time: 2017-11-25 15:52:52
*/
/**
 * [setCookie 设置cookie值]
 * @param {[type]} key        [cookie的key]
 * @param {[type]} value      [cookie的value]
 * @param {[type]} expiredays [cookie的过期时间]
 */
function setCookie (key, value, expiredays) {
  let exdate = new Date()
  exdate.setDate(exdate.getDate() + expiredays)
  document.cookie = key + '=' + escape(value) + ((expiredays === null) ? '' : ';expires=' + exdate.toGMTString())
}
module.exports = setCookie;
