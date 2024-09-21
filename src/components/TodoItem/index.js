import './index.css'

const TodoItem = props => {
  const {todoItem, deleteTodo} = props
  const {id, title} = todoItem

  const onDelete = () => {
    deleteTodo(id)
  }

  return (
    <li className="todo-list">
      <p className="title-style">{title}</p>
      <button type="button" className="delete-btn" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
