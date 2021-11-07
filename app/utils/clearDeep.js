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
