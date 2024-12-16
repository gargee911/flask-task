import React from "react";

const ReminderList = ({reminders, updateReminder, updateCallback}) => {
    
    const onDelete = async (id) => {
        try {
            const options = {
                method: "DELETE"
            }
            const response = await fetch(`http://127.0.0.1:5000/delete_reminder/${id}`, options)
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
        <h2> Reminders</h2>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Priority</th>
                    <th>Time</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    reminders.map((reminder) => (
                        <tr key={reminder.id}>
                            <td>{reminder.name}</td>
                            <td>{reminder.priority}</td>
                            <td>{reminder.time}</td>
                            <td>{reminder.isCompleted}</td>
                            <td>
                                <button onClick={() => updateReminder(reminder)}>Update</button>
                                <button onClick={() => onDelete(reminder.id)}>Delete</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
}

export default ReminderList