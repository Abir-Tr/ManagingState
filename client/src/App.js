
import { useState } from 'react';
import './App.css';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';


function App() {

  const[tasks,setTasks]=useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);
  const addingtask=(newTask)=>{
    setTasks([...tasks,newTask])}
    const deleteItem=(index)=>{
       // Demande de confirmation avant de supprimer
      const isConfirmed = window.confirm("Are you sure you want to delete this task?");
      if (isConfirmed)
        // Si l'utilisateur confirme la suppression, supprime la tâche
      setTasks(tasks.filter((t,i)=>i!==index))   
       }
       
      const completed= (index) => {
        setTasks(tasks.map((task,i)=> i===index ? {...task , complete: !task.complete}: task ))
       
      }
      const editItem = (task, index) => {
        setTaskToEdit({ ...task, index }); // Pré-remplir les informations de la tâche à éditer
        setIsModalOpen(true); // Ouvre le modal
      };
      const saveEdit = (updatedTask) => {
        const updatedTasks = [...tasks];
        updatedTasks[taskToEdit.index] = updatedTask; // Remplace la tâche modifiée
        setTasks(updatedTasks);
        setIsModalOpen(false); // Ferme le modal après la sauvegarde
        setTaskToEdit(""); // Réinitialise l'état de la tâche à éditer
      };
    
  return ( <>
     <div className="App">
      <h1 className="title">To do list </h1>
     <TaskForm  addingtask={addingtask}/>
     <TaskList tasks={tasks} deleteItem={deleteItem} completed={completed}  editItem={editItem} />
    </div>

    {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Edit Task</h2>
            <input
              type="text"
              value={taskToEdit.name}
              onChange={(e) =>
                setTaskToEdit({ ...taskToEdit, name: e.target.value })
              }
              placeholder="Task name"
            />
            <textarea
              value={taskToEdit.description}
              onChange={(e) =>
                setTaskToEdit({ ...taskToEdit, description: e.target.value })
              }
              placeholder="Task description"
            />
            <div className="modal-buttons">
              <button onClick={() => saveEdit(taskToEdit)} className="save-button">
                Save
              </button>
              <button onClick={() => setIsModalOpen(false)} className="cancel-button">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

  
  </>
    
  );
}

export default App;
