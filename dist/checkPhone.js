/*
 * @Author: lion1ou
 * @Date:   2017-11-25 15:38:50
 * @Last Modified by:   lion1ou
 * @Last Modified time: 2017-11-25 15:43:53
 */
/**
 * [checkPhone 检查是否为手机号码]
 * @param  {[String]} phone [手机号码]
 * @return {[Boolean]}       [是否是]
 */
function checkPhone (phone) {
  if (!(/^1[34578]\d{9}$/.test(phone))) {
    return false
  }
  return true
}
module.exports = checkPhone;
