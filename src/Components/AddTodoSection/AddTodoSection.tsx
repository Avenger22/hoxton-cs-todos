import { useStore } from "../../zustand/store"

type props = {
    addTodo: Function
}

export default function AddTodoSection({addTodo}:props) {

    const {todos, setTodos} = useStore()
    
    return (

        <>

            <section className="add-todo-section">

                <h2 className="title">ADD ITEM</h2>

                <form className="add-item" onSubmit={function (e) {
                    e.preventDefault()
                    //@ts-ignore
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