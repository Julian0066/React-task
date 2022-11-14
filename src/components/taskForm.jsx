import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function taskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({ title, description });
    console.log(description);

    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
    
    <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4" action="" >
    <h1 className="text-2xl font-bold text-white mb-3">Crea tu tarea </h1>
      <input
      className="bg-slate-300 p-3 w-full mb-2 "
        autoFocus
        value={title}
        placeholder="escribe tu tarea"
        type="text"
        onChange={(e) => {
          return setTitle(e.target.value);
        }}
      />


    

      <textarea
         className="bg-slate-300 p-3 w-full mb-2 "
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="escribe la descripcion de la tarea"
        name=""
        id=""
        cols="30"
      ></textarea>
      <button className="bg-indigo-500 px-3 py-1 text-white rounded-md">Guardar</button>
    </form>
    </div>
  );
  
}

export default taskForm;
