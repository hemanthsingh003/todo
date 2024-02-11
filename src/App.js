import { useState } from "react";
import Input from "./components/Input";
import Board from "./components/Board";

function App() {
    const [taskList, setTaskList] = useState([]);

    return (
        <>
        <div className="container pt-3">
            <h1 className="d-flex justify-content-center">To-do</h1>
            <div className="row justify-content-center mt-4 gap-3">
                <div className="col-12 col-md-6 col-xl-4">
                    <Input taskList={ taskList } setTaskList={ setTaskList }/>
                </div>
                <div classname="col-12">
                    <div className="row">
                        {
                            taskList.map((task, index) => 
                                <Board 
                                    key={ index }
                                    index={ index }
                                    task={ task }
                                    taskList={ taskList }
                                    setTaskList={ setTaskList }
                                /> 
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default App;
