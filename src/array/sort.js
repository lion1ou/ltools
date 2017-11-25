/*
 * @Author: lion1ou
 * @Date:   2017-11-25 16:15:04
 * @Last Modified by:   lion1ou
 * @Last Modified time: 2017-11-25 16:18:41
 */
/**
 * [sort 快速排序]
 * @param  {[type]} arr [数组]
 * @return {[type]}     [description]
 */
function sort(arr) {
  if (arr.length === 0) {
    return arr;
  }
  var cIndex = Math.floor(arr.length / 2); //确定中间位置
  var c = arr.splice(cIndex, 1); //获取中间值
  var left = [];
  var right = [];
  for (var i = 0; i < arr.length; i++) {
    if (c > arr[i]) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return sort(left).concat(c, sort(right));
}
module.exports = sort;
