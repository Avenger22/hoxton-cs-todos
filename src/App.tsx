// #region "Importing"
import OptionsSection from "./Components/OptionsSection.jsx"
import CompletedSection from "./Components/CompletedSection.jsx"
import AddTodoSection from "./Components/AddTodoSection.jsx"
import TodosSection from "./Components/TodosSection.jsx"

import './App.css'
import { useState } from "react"
import {Todo} from "./types/types"
// #endregion

function App() {

  // #region "State Objects and pieces"
  const initialTodos: Todo[] = [
    {
      id: 1,
      title: 'Buy milk',
      completed: true
    },
    {
      id: 2,
      title: 'Cook dinner',
      completed: true
    },
    {
      id: 3,
      title: 'Learn JS',
      completed: true
    },
    {
      id: 4,
      title: 'YAYYYY',
      completed: true
    }
  ]

  const [todos, setTodos] = useState<Todo[]>(initialTodos)
  const [showCompleted, setShowCompleted] = useState<boolean>(false)
  // #endregion

  // #region "Helper functions"
  function getCompletedTodos (): Todo[] {
    return todos.filter(todo => todo.completed === true)
  }
  
  function getIncompleteTodos (): Todo[] {
    return todos.filter(todo => todo.completed === false)
  }
  
  function toggleTodo (individualTodoId: Todo): void {

    // const match: Todo | undefined = todos.find(todo => todo.title = individualTodo.title)
    // // @ts-ignore
    // match.completed = !match.completed

    let todosCopy = JSON.parse(JSON.stringify(todos))

    // @ts-ignore
    const index: number = todosCopy.findIndex(target => target.id === individualTodoId)
    const todo = todosCopy[index]

    const newTodo = {
        ...todo,
        completed: !todo.completed
    }

    todosCopy[index] = newTodo
    setTodos(todosCopy)

  }

  function addTodo (newTitle: string): void {

    const todo: Todo = {
      title: newTitle,
      completed: false
    }
  
    const newTodos: Todo[] = [...todos, todo]
    setTodos(newTodos)

  }
  
  function deleteTodo (title: string): void {
    const updatedTodos: Todo[] = todos.filter(todo => todo.title !== title)
    setTodos(updatedTodos)
  }
  
  function editTodo (individualTodo: Todo, newTitle: string): void {

    const match: Todo | undefined = todos.find(todo => todo.title = individualTodo.title)
    // @ts-ignore
    match.title = newTitle

    const newTodo = {
      title: newTitle,
      // @ts-ignore
      completed: match.completed
    }

    const newArray = [...todos, newTodo]
    
  }
  
  function toggleShowCompleted (): void {
    setShowCompleted(!showCompleted)
  }
  // #endregion

  // #region "Returning HTML JSX"
  return (
    
    <main>

      <OptionsSection 
        showCompleted = {showCompleted}
        setShowCompleted = {setShowCompleted}
      />

      <AddTodoSection 
        addTodo = {addTodo}
      />

      <TodosSection 
        todos = {todos}
        setTodos = {setTodos}
        toggleTodo = {toggleTodo}
        deleteTodo = {deleteTodo}
        editTodo = {editTodo}
        getIncompleteTodos = {getIncompleteTodos}
      />

      <CompletedSection 
        todos = {todos}
        setTodos = {setTodos}
        showCompleted = {showCompleted}
        toggleTodo = {toggleTodo}
        deleteTodo = {deleteTodo}
        editTodo = {editTodo}
        getCompletedTodos = {getCompletedTodos}
      />

    </main>

  )
  // #endregion

}

export default App