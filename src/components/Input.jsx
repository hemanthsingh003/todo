import { useState } from "react"

const Input = ({ taskList, setTaskList }) => {
    const [input, setInput] = useState("")

    const handleAdd = (e) => {
        e.preventDefault();
        if(input.trim().length > 0) {
            setTaskList([...taskList, input]);
        }
        setInput("");
    }

    return (
        <>
        <form>
            <div className="input-group">
                <input
                    className="form-control p-3"
                    type="text"
                    placeholder="Add a task"
                    value={ input }
                    onChange={ (e) => { setInput(e.target.value) } }
                />
                <button 
                    className="btn btn-dark px-4"
                    onClick={ handleAdd }
                >
                    Add
                </button>
            </div>
        </form>
        </>
    )
}

export default Input