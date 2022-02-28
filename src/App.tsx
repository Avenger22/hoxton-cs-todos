// #region "Importing"
import OptionsSection from "./Components/OptionsSection/OptionsSection"
import CompletedSection from "./Components/CompletedSection/CompletedSection"
import AddTodoSection from "./Components/AddTodoSection/AddTodoSection"
import TodosSection from "./Components/TodosSection/TodosSection"

import {
getCompletedTodos,
getIncompleteTodos,
deleteTodo,
editTodo,
addTodo,
toggleShowCompleted,
toggleTodo
} from "./helpers/helpersFunctions"

import './App.css'
import { useState } from "react"
import {Todo} from "./types/types"
// #endregion

export const initialTodos: Todo[] = [
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

export const [todos, setTodos] = useState<Todo[]>(initialTodos)

function App() {

  // #region "State Objects and pieces"
  
  // const [todos, setTodos] = useState<Todo[]>(initialTodos)
  const [showCompleted, setShowCompleted] = useState<boolean>(false)
  
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
        todos = {todos}
        setTodos = {setTodos}
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