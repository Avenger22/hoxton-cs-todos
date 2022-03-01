import { useStore } from "../../zustand/store";
import TodoCompleted from "../TodoCompleted/TodoCompleted";

type props = {
    toggleTodo: Function 
    deleteTodo: Function 
    editTodo: Function
    getCompletedTodos: Function
}

export default function CompletedSection({toggleTodo, deleteTodo, editTodo, getCompletedTodos}:props) {

    const {showCompleted, todos, setTodos} = useStore()
    
    return (

        <>

            <section className="completed-section" style= { showCompleted ? {display: "block"} : {display: "none"} }>

                <h2 className="title">COMPLETED</h2>

                <ul className="completed-list">
                
                    {
                        // @ts-ignore
                        getCompletedTodos(todos).map(todo => 
                            
                            <TodoCompleted 
                                todo = {todo}
                                key = {todo.id}
                                toggleTodo = {toggleTodo}
                                deleteTodo = {deleteTodo}
                                editTodo = {editTodo}
                                todos = {todos}
                                //@ts-ignore
                                setTodos = {setTodos}
                            />

                        )

                    }

                </ul>

            </section>

        </>

    )
    
}