/*
 * @Author: lion1ou
 * @Date:   2017-11-25 15:36:34
 * @Last Modified by:   lion1ou
 * @Last Modified time: 2017-11-25 15:44:49
 */
/**
 * [checkId 检测身份证号码是否正确]
 * @param  {[type]} pId [身份证号码]
 * @return {[type]}     [description]
 */
function checkId(pId) {
  const arrVerifyCode = [1, 0, 'x', 9, 8, 7, 6, 5, 4, 3, 2]
  const Wi = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
  // const Checker = [1, 9, 8, 7, 6, 5, 4, 3, 2, 1, 1]
  if (pId.length !== 15 && pId.length !== 18) return '身份证号共有15位或18位'
  var Ai = pId.length === 18 ? pId.substring(0, 17) : pId.slice(0, 6) + '19' + pId.slice(6, 16)
  if (!/^\d+$/.test(Ai)) return '身份证除最后一位外，必须为数字！'
  let yyyy = Ai.slice(6, 10)
  let mm = Ai.slice(10, 12) - 1
  let dd = Ai.slice(12, 14)
  let d = new Date(yyyy, mm, dd)
  let now = new Date()
  let year = d.getFullYear()
  let mon = d.getMonth()
  let day = d.getDate()
  if (year != yyyy || mon != mm || day != dd || d > now || year < 1800) return '身份证输入错误！'
  for (var i = 0, ret = 0; i < 17; i++) ret += Ai.charAt(i) * Wi[i]
  Ai += arrVerifyCode[ret %= 11]
  return pId.length === 18 && pId != Ai ? '身份证输入错误！' : Ai
}

module.exports = checkId;
