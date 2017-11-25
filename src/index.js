/*
 * @Author: lion1ou
 * @Date:   2017-11-16 20:06:10
 * @Last Modified by:   lion1ou
 * @Last Modified time: 2017-11-25 17:15:36
 */
const getDevice = require('./get/getDevice')

const arraySort = require('./array/sort')
const arrayUnquie = require('./array/unquie')

const localItem = require('./localStorage/localItem')
const rmLocalItem = require('./localStorage/removeLocalItem')

const getCookie = require('./cookie/getCookie')
const setCookie = require('./cookie/setCookie')

const checkId = require('./check/checkId')
const checkPhone = require('./check/checkPhone')
const checkIsBottom = require('./check/checkIsBottom')

module.exports = {
  getDevice,
  arraySort,
  arrayUnquie,
  localItem,
  rmLocalItem,
  getCookie,
  setCookie,
  checkId,
  checkPhone,
  checkIsBottom
}
