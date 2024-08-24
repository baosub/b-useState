import { useState } from 'react';

// Definimos una interfaz para el tipo de datos de una persona
interface Persona {
  nombre: string;
  apellido: string;
  edad: number;
}

function Formulario() {
  // Estado para almacenar el array de personas
  const [personas, setPersonas] = useState<Persona[]>([]);

  // Estado para almacenar los valores del formulario
  const [nombre, setNombre] = useState<string>('');
  const [apellido, setApellido] = useState<string>('');
  const [edad, setEdad] = useState<number>(0);

  // Función que se llama cuando se envía el formulario
  const manejarEnvio = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevenir el comportamiento por defecto del formulario (recarga de la página)

    // Crear un nuevo objeto persona con los valores del formulario
    const nuevaPersona: Persona = {
      nombre,
      apellido,
      edad,
    };

    // Agregar la nueva persona al array de personas
    setPersonas([...personas, nuevaPersona]);

    // Limpiar los campos del formulario
    setNombre('');
    setApellido('');
    setEdad(0);
  };

  return (
    <div>
        <h2>Form</h2>
      {/* Formulario para ingresar nombre, apellido y edad */}
      <form onSubmit={manejarEnvio}>
        <div>
          {/* Input para el nombre */}
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)} // Actualizar estado del nombre
            required
          />
        </div>
        <div>
          {/* Input para el apellido */}
          <label htmlFor="apellido">Apellido:</label>
          <input
            type="text"
            id="apellido"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)} // Actualizar estado del apellido
            required
          />
        </div>
        <div>
          {/* Input para la edad */}
          <label htmlFor="edad">Edad:</label>
          <input
            type="number"
            id="edad"
            value={edad}
            onChange={(e) => setEdad(Number(e.target.value))} // Actualizar estado de la edad
            required
            min="0"
          />
        </div>
        {/* Botón para enviar el formulario */}
        <button type="submit">Agregar Persona</button>
      </form>

      {/* Lista de personas agregadas */}
      <ul>
        {personas.map((persona, index) => (
          <li key={index}>
            {/* Mostrar los datos de cada persona */}
            {persona.nombre} {persona.apellido} - {persona.edad} años
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Formulario;
