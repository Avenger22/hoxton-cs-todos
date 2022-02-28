type props = {
    showCompleted: boolean,
    setShowCompleted: React.Dispatch<React.SetStateAction<boolean>>
}

export default function OptionsSection({showCompleted, setShowCompleted}:props) {

    return (

        <>

            <section className="options-section">

                <h2 className="title">OPTIONS</h2>

                <label>

                    Show completed
                    
                    <input className="show-completed-checkbox" type="checkbox" checked={showCompleted} 
                    onChange = {function (e) {
                        setShowCompleted(!showCompleted)
                    }}/>

                </label>

            </section>

        </>

    )
    
}