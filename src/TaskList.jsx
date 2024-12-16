import React from "react"


const TaskList = ({tasks, updateTask, updateCallback}) => {

    const onDelete = async (id) => {
        try {
            const options = {
                method: "DELETE"
            }
            const response = await fetch(`http://127.0.0.1:5000/delete_task/${id}`, options)
            if (response.status === 200) {
                updateCallback()
            } else {
                console.error("Failed to delete")
            }
        } catch (error) {
            alert(error)
        }
    }


    return <div>
        <h2>Tasks</h2>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Priority</th>
                    <th>Category</th>
                    <th>Deadline</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    tasks.map((task) => (
                        <tr key={task.id}>
                            <td>{task.name}</td>
                            <td>{task.priority}</td>
                            <td>{task.category}</td>
                            <td>{task.deadline}</td>
                            <td>
                                <button onClick={() => updateTask(task)}>Update</button>
                                <button onClick={() => onDelete(task.id)}>Delete</button>
                            </td>
                        </tr>
                    ))
                }

            </tbody>
        </table>
    </div>    
}

export default TaskList