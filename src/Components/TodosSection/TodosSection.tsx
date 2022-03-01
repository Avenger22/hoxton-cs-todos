import { useStore } from "../../zustand/store";
import TodoLi from "../TodoLi/TodoLi";

type props = {
    toggleTodo: Function 
    deleteTodo: Function 
    editTodo: Function
    getIncompleteTodos: Function
}

export default function TodosSection({toggleTodo, deleteTodo, editTodo, getIncompleteTodos}:props) {

    const {todos, setTodos} = useStore()
    
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
                                // @ts-ignore
                                todos = {todos}
                                // @ts-ignore
                                setTodos = {setTodos}
                            />  
                            
                        )

                    }

                </ul>

            </section>

        </>

    )
    
}