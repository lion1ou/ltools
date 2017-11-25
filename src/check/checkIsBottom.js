/*
 * @Author: lion1ou
 * @Date:   2017-11-25 15:40:43
 * @Last Modified by:   lion1ou
 * @Last Modified time: 2017-11-25 15:44:28
 */
/**
 * [isScrollBottom 判断是否滚动到底部了]
 * @return {Boolean} [description]
 */
function isScrollBottom() {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
  return document.body.scrollHeight - scrollTop - window.screen.height <= 0
}
module.exports = isScrollBottom;
