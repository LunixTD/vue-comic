import axios from 'axios'
import {ERR_OK} from 'api/config'

// 获取分类下全数据
export function getCategory(type) {
  let page = 0  // 初始化总页数
  let arr = []
  let catagoryData = [] // 分类下的总数据
  let requestArr = [] // 存放单页的请求函数

  // 请求第一页数据，判断是否有多页，有则并发请求其他页数据并整合；没有则返回第一页数据
  getPageData(type, 1).then((response) => {
    let res = response.data
    if (res.errNo === ERR_OK) {
      catagoryData = arr.concat(res.data.data)
    }
    // 超过一页
    page = res.data.totalPages
    if (page > 1) {
      for (let i = page; i > 1; i--) {
        requestArr.push(getPageData(type, i))
      }
      // 并发请求
      axios.all(requestArr)
        .then((resArr) => {
          resArr.reverse().map(res => {
            let data = res.data.data.data
            catagoryData = catagoryData.concat(data)
          })
          catagoryData.map(item => {
            item.thumb = item.thumb.replace('/upload', 'http://pic01.ishuhui.com')
          })
          console.log(catagoryData)
          return catagoryData
        })
    } else {
      catagoryData.map(item => {
        item.thumb = item.thumb.replace('/upload', 'http://pic01.ishuhui.com')
      })
      console.log(catagoryData)
      return catagoryData
    }
  })
}

// 获取单页数据
function getPageData(type, page) {
  const url = 'http://api.ishuhui.com/cartoon/category_latest/ver/07218148/category/' + type + '/page/' + page + '.json'
  return axios.get(url)
}
