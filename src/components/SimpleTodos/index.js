import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import TodoItem from '../TodoItem'

import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

class SimpleTodos extends Component {
  state = {
    todoDetailsList: initialTodosList,
    textInput: '',
  }

  deleteTodo = id => {
    const {todoDetailsList} = this.state
    const updatedTodoList = todoDetailsList.filter(
      eachTodo => eachTodo.id !== id,
    )

    this.setState({todoDetailsList: updatedTodoList})
  }

  onChangeInputText = event => {
    this.setState({textInput: event.target.value})
  }

  onClickAdd = () => {
    const {textInput} = this.state
    const newTodo = {
      id: uuidv4(),
      title: textInput,
    }
    this.setState(prev => ({
      todoDetailsList: [...prev.todoDetailsList, newTodo],
    }))
  }

  render() {
    const {todoDetailsList, textInput} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="todo-heading">Simple Todos</h1>
          <div className="form-controls">
            <input
              type="text"
              className="input"
              value={textInput}
              onChange={this.onChangeInputText}
            />
            <button
              type="button"
              className="add-button"
              onClick={this.onClickAdd}
            >
              Add
            </button>
          </div>

          <ul className="todo-item-container">
            {todoDetailsList.map(eachTodo => (
              <TodoItem
                todoItem={eachTodo}
                key={eachTodo.id}
                deleteTodo={this.deleteTodo}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
