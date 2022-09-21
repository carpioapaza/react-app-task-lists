import { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

function TaskForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, description);
    createTask({
      title,
      description,
    });
    setTitle('');
    setDescription('');
  };

  return (
    <div className='max-w-md mx-auto'>
      <form className='bg-slate-900 p-10 mb-4' onSubmit={handleSubmit}>
        <h1 className='text-2x1 font-bold text-white mb-3'>Crea tu tarea</h1>
        <input
          className='bg-slate-300 p3 w-full mb-2'
          placeholder='Write your task'
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus
        />
        <textarea
          className='bg-slate-300 p3 w-full mb-2'
          placeholder='Write description'
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        ></textarea>
        <button className='bg-indigo-500 px-3 py-1 text-white'>Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
