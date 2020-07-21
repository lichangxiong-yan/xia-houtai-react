import loadable from '@loadable/component'
// 动态加载
// import Home from './home/Home'
const Home = loadable(()=>import('./home/Home'))
const Good = loadable(()=>import('./good/Good'))
const GoodAdd = loadable(()=>import('./good/GoodAdd'))

const Todo = loadable(()=>import('./todo/Todo'))

export default [
  {
    id: 1,
    title: '统计概况',
    children: [
      {
        id: 10,
        path: '/',
        component: Home,
        text: '首页统计'
      }
    ]
  },
  {
    id: 2,
    title: '测试管理',
    children: [
      {
        id: 20,
        path: '/todo',
        component: Todo,
        text: 'todolist'
      }
    ]
  },
  {
    id: 3,
    title: '商品管理',
    children: [
      {
        id: 301,
        path: '/good',
        component: Good,
        text: '商品列表',
        children: [
          {
            id: 30101,
            path: '/good/add/:id',
            component: GoodAdd,
            text: '商品添加'
          }
        ]
      },
    ]
  }
]
