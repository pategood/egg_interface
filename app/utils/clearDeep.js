// delete  在for循环内可能无法生效

// 过滤对象中为null/undefined/''/[]/{}的属性值
export const clearDeep = (obj) => {
  if (!obj || !typeof obj === 'object') return
  const keys = Object.keys(obj)
  for (var key of keys) {
    const val = obj[key]
    if (typeof val === 'undefined' || ((typeof val === 'object' || typeof val === 'string') && !val)) {
      // 如属性值为null或undefined或''，则将该属性删除
      delete obj[key]
    } else if (typeof val === 'object') {
      // 属性值为对象，递归调用
      clearDeep(obj[key])

      if (Object.keys(obj[key]).length === 0) {
        // 如某属性的值为不包含任何属性的独享，则将该属性删除
        delete obj[key]
      }
    }
  }
}


// 去除对象的undefined/null/NAN,不深
// let data = { id:3, password:3, email:222, phoneNumber:12131313, nickName:null, photo:undefined, create_time:'', age:18, sex:313 }
export function clearShallow(obj){
  const keys = Object.keys(obj)
  for (var key of keys) {
    const val = obj[key]
    if (typeof val === 'undefined'|| val === null||isNaN(val)) {
      delete obj[key]   // 变量用[],字段用.
    }
  }
  return obj
}