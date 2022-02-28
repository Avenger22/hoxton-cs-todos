import {Todo} from "../../types/types"

type props = {
    todo: Todo
    toggleTodo: Function 
    deleteTodo: Function 
    editTodo: Function
    todos: Todo[]
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

export default function TodoCompleted({todo, toggleTodo, deleteTodo, editTodo, todos, setTodos}:props) {

    return (

        <>

            <li className="todo completed">

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