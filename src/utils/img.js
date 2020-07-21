// 用于管理整个项目的图片资源：1、远程图片  2、public中的图片 3、assets目录的图片

import abc from '@/assets/image/1.png'
import uploadIcon from '@/assets/image/upload.png'

const imgBaseUrl = 'http://localhost:9999'      // 开发环境
// const imgBaseUrl = 'http://cdn.com'          // 生产环境

export default {
  abc,
  // 图片服务器地址，与api服务器没有任何关系
  uploadUrl: imgBaseUrl,
  uploadIcon
}
