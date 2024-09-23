import {useState} from 'react'
import './index.css'

const TodoItem = props => {
  const {todoItem, deleteTodo} = props
  const {id, title} = todoItem
  const [isClicked, setClicked] = useState(false)
  const [editText, setText] = useState(title)

  const onDelete = () => {
    deleteTodo(id)
  }

  const onClickEdit = () => {
    setClicked(prev => !prev)
  }

  const onEditTodoItem = event => {
    setText(event.target.value)
  }

  return (
    <li className="todo-item">
      <input
        type="checkbox"
        className="checkbox"
        id="checkbox"
        onChange={onEditTodoItem}
      />

      {isClicked ? (
        <input type="text" className="edit-input" value={editText} />
      ) : (
        <p className="title-style" htmlFor="checkbox">
          {editText}
        </p>
      )}
      <button type="button" className="delete-btn" onClick={onDelete}>
        Delete
      </button>

      <button className="edit-add-button" type="button" onClick={onClickEdit}>
        {isClicked ? 'Save' : 'Edit'}
      </button>
    </li>
  )
}

export default TodoItem
