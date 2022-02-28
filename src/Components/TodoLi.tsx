import {Todo} from "../types/types"

type props = {
    todo: Todo
    toggleTodo: Function 
    deleteTodo: Function 
    editTodo: Function
}

export default function TodoLi({todo, toggleTodo, deleteTodo, editTodo}: props) {

    return (

        <>

            <li className="todo">

                <div className="completed-section">

                    <input className="completed-checkbox" type="checkbox" onChange={function () {
                        toggleTodo(todo.id)
                    }}/>
                    
                </div>

                <div className="text-section">
                    <p className="text">{todo.title}</p>
                </div>

                <div className="button-section">

                    <button className="edit">Edit</button>
                    
                    <button className="delete" onClick={function () {
                        deleteTodo(todo.title)
                    }}>Delete</button>

                </div>

            </li>

        </>

    )

}