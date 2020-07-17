import React from 'react'
import './style.scss'

import { connect } from 'react-redux'
import { addTodo, delTodo, editTodo, clearTodo } from '@/store/actions/todo'

function mapStateToProps(state) {
  return {
    todolist: state.todo.list
  }
}

function mapActionToProps(dispatch) {
  return {
    addTodo: (payload)=>dispatch(addTodo(payload)),
    delTodo: (payload)=>dispatch(delTodo(payload)),
    editTodo: (payload)=>dispatch(editTodo(payload)),
    clearTodo: (payload)=>dispatch(clearTodo(payload))
  }
}

class Todo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      task: ''
    }
  }
  componentDidMount() {
    console.log('props', this.props)
  }
  // 渲染todolist
  createTodoList() {
    let { todolist } = this.props


    return todolist.map(ele=>(
      <div key={ele.id} className='row'>
        <span>{ele.id}</span>
        <span>-</span>
        <span>{ele.task}</span>
        <span onClick={this.deleteTodo.bind(this,ele.id)}>删除</span>
      </div>
    ))
  }
  // 表单取值
  inputChange(e) {
    this.setState({
      task: e.target.value
    })
  }
  // 添加todo
  inputEnter(e) {
    let { task } = this.state
    if(e.keyCode===13){
      console.log('enter')
      // 添加一条todo
      // dispatch一个addTodo
      this.props.addTodo({id:Date.now(), task})
      this.setState({task: ''})
    }
  }
  // 删除todo
  deleteTodo(id) {
    console.log(id)
    this.props.delTodo(id)
  }
  // 清除todo
  clearTodo() {
    this.props.clearTodo()
  }
  render() {
    let { task } = this.state
    return(
      <div>
        <h1>TodoList</h1>
        <input
          value={task}
          onChange={this.inputChange.bind(this)}
          onKeyUp={this.inputEnter.bind(this)}
          type="text"/>
        {
          this.createTodoList()
        }
        <button onClick={this.clearTodo.bind(this)}>清除</button>

      </div>
    )
  }
}
export default connect(mapStateToProps, mapActionToProps)(Todo)
