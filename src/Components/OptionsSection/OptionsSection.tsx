import { useStore } from "../../zustand/store"

export default function OptionsSection() {

    const {showCompleted, setShowCompleted} = useStore()

    return (

        <>

            <section className="options-section">

                <h2 className="title">OPTIONS</h2>

                <label>

                    Show completed
                    
                    <input className="show-completed-checkbox" type="checkbox" checked={showCompleted} 
                    onChange = {function (e) {
                        setShowCompleted()
                    }}/>

                </label>

            </section>

        </>

    )
    
}