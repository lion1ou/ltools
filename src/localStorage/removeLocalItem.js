/*
 * @Author: lion1ou
 * @Date:   2017-11-25 15:59:04
 * @Last Modified by:   lion1ou
 * @Last Modified time: 2017-11-25 16:00:50
 */
/**
 * [removeLocalItem 删除localStorage，没有参数时会删除所有localStorage]
 * @param  {[type]} key [description]
 * @return {[type]}     [description]
 */
function removeLocalItem(key) {
  if (key) {
    return localStorage.removeItem(key)
  }
  return localStorage.removeItem()
}
