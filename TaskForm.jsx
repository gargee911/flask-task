import { useState } from "react"

const TaskForm = ({ existingTask ={}, updateCallback}) => {
    const [name, setName] = useState(existingTask.name || "")
    const [priority, setPriority] = useState(existingTask.priority || "")
    const [category, setCategory] = useState(existingTask.category || "")
    const [deadline, setDeadline] = useState(existingTask.deadline || "")

    const updating = Object.entries(existingTask).length !== 0

    const onSubmit =async (e) => {
        e.preventDefault()

        const data = {
            name,
            priority,
            category,
            deadline,
        }
        const url = "http://127.0.0.1:5000/" + (updating ? `update_task/${existingTask.id}` : "create_task")
        const options = {
            method: updating ? "PATCH" :"POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }
        const response = await fetch(url, options)
        if(response.status !== 201 && response.status !== 200){
            const data = await response.json()
            alert(data.message)
        }
        else{
            updateCallback()
        }
    }

    return <form onSubmit={onSubmit}>
        <div>
            <label htmlFor="name">Name:</label>
            <input 
                type="text" 
                id="name" 
                value={name} 
                onChange={(e) => setName(e.target.value)}
             />

        </div>

        <div>
            <label htmlFor="priority">Priority: </label>
            <input 
                type="text" 
                id="priority" 
                value={priority} 
                onChange={(e) => setPriority(e.target.value)}
             />

        </div>
        <div>
            <label htmlFor="category">Category: </label>
            <input 
                type="text" 
                id="category" 
                value={category} 
                onChange={(e) => setCategory(e.target.value)}
             />

        </div>
        <div>
            <label htmlFor="deadline">Deadline: </label>
            <input 
                type="" 
                id="deadline" 
                value={deadline} 
                onChange={(e) => setDeadline(e.target.value)}
             />

        </div>
        <button type="submit">{updating ? "Update": "Create"}</button>
    </form>

}

export default TaskForm
