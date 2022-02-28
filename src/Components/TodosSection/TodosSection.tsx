import TodoLi from "../TodoLi/TodoLi";
import {Todo} from "../../types/types"

type props = {
    todos: Todo[]
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
    toggleTodo: Function 
    deleteTodo: Function 
    editTodo: Function
    getIncompleteTodos: Function
}

export default function TodosSection({todos, setTodos, toggleTodo, deleteTodo, editTodo, getIncompleteTodos}:props) {

    return (

        <>

            <section className="todo-section">

                <h2 className="title">TODO</h2>

                <ul className="todo-list">
                
                    {
                        //@ts-ignore
                        getIncompleteTodos(todos).map(todo => 
                            
                            <TodoLi
                                todo = {todo}
                                key = {todo.id}
                                toggleTodo = {toggleTodo}
                                deleteTodo = {deleteTodo}
                                editTodo = {editTodo}
                                todos = {todos}
                                setTodos = {setTodos}
                            />  
                            
                        )

                    }

                </ul>

            </section>

        </>

    )
    
}