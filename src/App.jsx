import { useState, useEffect } from "react";
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import ReminderForm from "./ReminderForm";
import ReminderList from "./ReminderList";
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [reminders, setReminders] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTask, setCurrentTask] = useState({});
  const [showTasks, setShowTasks] = useState(true);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const response = await fetch("http://127.0.0.1:5000/tasks");
    const data = await response.json();
    setTasks(data.tasks);
  };

  useEffect(() => {
    fetchReminders();
  }, []);

  const fetchReminders = async () => {
    const response = await fetch("http://127.0.0.1:5000/reminders");
    const data = await response.json();
    setReminders(data.reminders);
  };

  const openEditModal = (task) => {
    setCurrentTask(task);
    setIsModalOpen(true);
  };

  const openCreateModal = () => {
    setCurrentTask({});
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const onUpdate = () => {
    setIsModalOpen(false);
    if (showTasks) {
      fetchTasks();
    } else {
      fetchReminders();
    }
  };

  return (
    <>
      <div className="button-container">
        <button onClick={() => setShowTasks(true)}>Tasks</button>
        <button onClick={() => setShowTasks(false)}>Reminders</button>
      </div>
      {showTasks ? (
        <>
          <TaskList tasks={tasks} updateTask={openEditModal} updateCallback={onUpdate} />
          <button onClick={openCreateModal}>Create New Task</button>
        </>
      ) : (
        <>
          <ReminderList reminders={reminders} />
          <button onClick={openCreateModal}>Create New Reminder</button>
        </>
      )}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            {showTasks ? (
              <TaskForm existingTask={currentTask} updateCallback={onUpdate} />
            ) : (
              <ReminderForm existingReminder={currentTask} updateCallback={onUpdate} />
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default App;