/**
 * RegExp.test() 匹配规则
 * RegExp.exec() 捕获
 */

let reg = /\d+/ // d代表0-9，+出现1次以上
reg = /[@+]+/ // []内的符号代表其本身原意，此例中的+就是一个普通的加号
reg = /[\d]/ // 但是这个代表0-9
/**
 * 验证有效数字，规则如下
 * 1. 有可能出现+ -，也可能不出现
 * 2. 一位数字0-9都可以，两位以上首位不能是0
 * 3. 可能出现小数点，一旦出现小数点后面必须跟数字
 */
reg = /^[+-]?(\d|([1-9]\d+))(\.\d+)?$/
let r = reg.test('0.456')
console.log('有效数字', r)
/**
 * 验证密码，规则如下
 * 1. 6～12位
 * 2. 字母数字下划线
 */
reg = /^\w{6,12}$/
r = reg.test('_ihao234')
console.log('密码', r)
/**
 * 验证姓名，规则如下
 * 1. 汉字
 */
reg = /^[\u4E00-\u9FA5]{2,4}$/
r = reg.test('汉字')
console.log('汉字', r)
/**
 * 验证邮箱，规则如下
 * 1. @符之前以数字字母下划线开头，后面可以跟-或者.然后再跟数字字母下划线
 * 2. @符之后必须是字母或数字，
 */
reg = /^\w+((-\w+)(\.\w+))*@[A-Za-z0-9]+((-|\.)[A-Za-z0-9]*)+\.[A-Za-z0-9]+$/
r = reg.test('fu@163.com.cn')
console.log('邮箱', r)
/**
 * 转换日期
 * 2019-08-12 to 2019年08月12日
 */
let str = '2019-08-12'
str = str.replace(/(\d{4})-(\d{1,2})-(\d{1,2})/g, '$1年$2月$3日')
console.log(str)