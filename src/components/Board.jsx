const Board = ({ index, task, taskList, setTaskList }) => {
    const handleDelete = () => {
        taskList.splice(index, 1);
        setTaskList(
            // eslint-disable-next-line
            currentTaskList => currentTaskList.filter(() => index === index)
        );

    }

    return (
        <>
        <div className="col-12 col-md-4 px-2 py-1 py-md-2">
            <div className="border rounded text-center py-3">
                { task }
                <div className="mt-3">
                    <button 
                        className="btn btn-danger"
                        onClick={ handleDelete }
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Board