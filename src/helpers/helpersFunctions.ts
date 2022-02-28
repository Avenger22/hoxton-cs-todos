import {Todo} from "../types/types"

// #region "Helper functions"
export function getCompletedTodos (todos: Todo[]): Todo[] {
    return todos.filter(todo => todo.completed === true)
}
  
export function getIncompleteTodos (todos: Todo[]): Todo[] {
    return todos.filter(todo => todo.completed === false)
}
  
export function toggleTodo (individualTodoId: Todo, todos: Todo[], setTodos:any): void {

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

export function addTodo (newTitle: string, todos: Todo[], setTodos: any): void {

    const todo: Todo = {
      title: newTitle,
      completed: false
    }
  
    const newTodos: Todo[] = [...todos, todo]
    setTodos(newTodos)

}
  
export function deleteTodo (title: string, todos: Todo[], setTodos: any): void {
    const updatedTodos: Todo[] = todos.filter(todo => todo.title !== title)
    setTodos(updatedTodos)
}
  
export function editTodo (individualTodo: Todo, newTitle: string, todos: Todo[]): void {

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
  
export function toggleShowCompleted (showCompleted: boolean, setShowCompleted: any): void {
    setShowCompleted(!showCompleted)
}
// #endregion