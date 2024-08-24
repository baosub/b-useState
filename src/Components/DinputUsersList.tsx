import { useState } from 'react';

function ListaTareas() {
  // Estado para almacenar las tareas
  const [tareas, setTareas] = useState<string[]>([]); // Inicializamos con un array vacío
  const [nuevaTarea, setNuevaTarea] = useState<string>(''); // Para manejar la nueva tarea

  // Función para añadir una nueva tarea a la lista
  const agregarTarea = () => {
    setTareas([...tareas, nuevaTarea]); // Añadimos la nueva tarea al array
    setNuevaTarea(''); // Limpiamos el input
  };

  return (
    <div>
        <h2>Task List</h2>
      {/* Input para la nueva tarea */}
      <input
        type="text"
        value={nuevaTarea}
        onChange={(e) => setNuevaTarea(e.target.value)}
        placeholder="Escribe una tarea"
      />

      {/* Botón para añadir la tarea */}
      <button onClick={agregarTarea}>Añadir tarea</button>

      {/* Mostrar la lista de tareas */}
      <ul>
        {tareas.map((tarea, index) => (
          <li key={index}>{tarea}</li> // Mostramos cada tarea con un índice único
        ))}
      </ul>
    </div>
  );
}

export default ListaTareas;
