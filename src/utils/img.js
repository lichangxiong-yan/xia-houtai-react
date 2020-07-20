// 用于管理整个项目的图片资源：1、远程图片  2、public中的图片 3、assets目录的图片


import abc from '@/assets/image/1.png'
import uploadIcon from '@/assets/image/upload.png'

// let imgUploadUrl = '...w.'

export default {
  abc,
  // 图片服务器地址，与api服务器没有任何关系
  uploadUrl: 'http://localhost:9999',
  uploadIcon
}
