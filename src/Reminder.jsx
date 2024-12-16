import { useState, useEffect} from "react";
import TaskList from './ReminderList';
import './App.css';
import TaskForm from './ReminderForm';
import ReminderList from "./ReminderList";
import ReminderForm from "./ReminderForm";

function Reminder() {
  const [reminders, setReminders] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentReminder, setCurrentReminder] = useState({})

  useEffect(() => {
    fetchReminders()
  }, []);

  const fetchReminders = async () => {
    const response = await fetch("http://127.0.0.1:5000/reminders");
    console.log(response);
    const data = await response.json();
    console.log(data);
    setReminders(data.reminders);
  };


  const closeModal = () => {
    setIsModalOpen(false)
    setCurrentReminder({})
  }

  const openCreateModal = () => {
    if (!isModalOpen) setIsModalOpen(true)
  }

  const openEditModal = (reminder) => {
    if (isModalOpen) return
    setCurrentReminder(reminders)
    setIsModalOpen(true)
  }

  const onUpdate = () => {
    closeModal()
    fetchReminders()
  }
  
  return (
    <>
      <ReminderList reminders={reminders} updateReminder={openEditModal} updateCallback={onUpdate}/>
      <button onClick={openCreateModal}>Create New Reminder</button>
      {
        isModalOpen && <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <ReminderForm existingReminder={currentReminder} updateCallback={onUpdate}/>
          </div>
        </div>
      }
      
    </>);




}

export default Reminder;