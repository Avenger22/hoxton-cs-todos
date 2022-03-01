import {Todo} from "../../types/types"
import { useStore } from "../../zustand/store"

type props = {
    todo: Todo
    toggleTodo: Function 
    deleteTodo: Function 
    editTodo: Function
}

export default function TodoLi({todo, toggleTodo, deleteTodo, editTodo}: props) {

    const {todos, setTodos} = useStore()
    
    return (

        <>

            <li className="todo">

                <div className="completed-section">

                    <input className="completed-checkbox" type="checkbox" onChange={function () {
                        toggleTodo(todo.id, todos, setTodos)
                    }}/>
                    
                </div>

                <div className="text-section">
                    <p className="text">{todo.title}</p>
                </div>

                <div className="button-section">

                    <button className="edit">Edit</button>
                    
                    <button className="delete" onClick={function () {
                        deleteTodo(todo.title, todos, setTodos)
                    }}>Delete</button>

                </div>

            </li>

        </>

    )

}