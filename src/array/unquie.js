/*
 * @Author: lion1ou
 * @Date:   2017-11-25 16:09:46
 * @Last Modified by:   lion1ou
 * @Last Modified time: 2017-11-25 16:36:01
 */
/**
 * [unquie 数组去重]
 * @param  {[type]} arr [数组]
 * @return {[type]}     [description]
 */
function unquie(arr) {
  var temp = [];
  for (var i = 0; i < arr.length; i++) {
    if (indexOf(temp, arr[i]) === -1) {
      temp.push(arr[i]);
    }
  }
  return temp;
}

function indexOf(tempArr, item) { // 用户支持没有indexOf方法的问题
  if ([].indexOf()) {
    return tempArr.indexOf(item);
  } else {
    for (var i = 0; i < tempArr.length; i++) {
      if (tempArr[i] === item) {
        return i;
      }
      return -1;
    }
  }
}
module.exports = unquie;
