import TodoCompleted from "./TodoCompleted";
import {Todo} from "../types/types"

type props = {
    todos: Todo[]
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
    showCompleted: boolean
    toggleTodo: Function 
    deleteTodo: Function 
    editTodo: Function
    getCompletedTodos: Function
}

export default function CompletedSection({todos, setTodos, showCompleted, toggleTodo, deleteTodo, editTodo, getCompletedTodos}:props) {

    return (

        <>

            <section className="completed-section" style= { showCompleted ? {display: "block"} : {display: "none"} }>

                <h2 className="title">COMPLETED</h2>

                <ul className="completed-list">
                
                    {
                        // @ts-ignore
                        getCompletedTodos().map(todo => 
                            
                            <TodoCompleted 
                                todo = {todo}
                                key = {todo.id}
                                toggleTodo = {toggleTodo}
                                deleteTodo = {deleteTodo}
                                editTodo = {editTodo}
                            />

                        )

                    }

                </ul>

            </section>

        </>

    )
    
}