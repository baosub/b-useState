import { useState } from 'react';

// Definimos una interfaz para el tipo de datos del usuario
interface Usuario {
  nombre: string;
  edad: number;
}

function InformacionUsuario() {
  // Estado para almacenar la información del usuario
  const [usuario, setUsuario] = useState<Usuario>({ nombre: '', edad: 0 });

  // Función para actualizar el nombre del usuario
  const actualizarNombre = (nombre: string) => {
    setUsuario({ ...usuario, nombre }); // Usamos el operador spread para mantener la edad
  };

  // Función para actualizar la edad del usuario
  const actualizarEdad = (edad: number) => {
    setUsuario({ ...usuario, edad }); // Usamos el operador spread para mantener el nombre
  };

  return (
    <div>
        <h2>Info User</h2>
      {/* Input para que el usuario escriba su nombre */}
      <input
        type="text"
        value={usuario.nombre}
        onChange={(e) => actualizarNombre(e.target.value)}
        placeholder="Escribe tu nombre"
      />

      {/* Input para que el usuario escriba su edad */}
      <input
        type="number"
        value={usuario.edad}
        onChange={(e) => actualizarEdad(Number(e.target.value))}
        placeholder="Escribe tu edad"
      />

      {/* Mostrar la información actual del usuario */}
      <p>Nombre: {usuario.nombre}</p>
      <p>Edad: {usuario.edad}</p>
    </div>
  );
}

export default InformacionUsuario;
