import {Todo} from "../../types/types"

type props = {
    addTodo: Function
    todos: Todo[]
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

export default function AddTodoSection({addTodo, todos, setTodos}:props) {

    return (

        <>

            <section className="add-todo-section">

                <h2 className="title">ADD ITEM</h2>

                <form className="add-item" onSubmit={function (e) {
                    e.preventDefault()
                    addTodo(e.target.title.value, todos, setTodos)
                }}>

                    <input className="text-input" type="text" name="title" required={true} minLength={3}
                        onChange = {function (e) {
                            // addTodo(e.target.value)
                        }}
                    />
                    
                    <button type="submit">Add</button>

                </form>

            </section>

        </>

    )
    
}