import { useState } from 'react';

function BinputString() {
  // Estado para almacenar el nombre del usuario
  const [nombre, setNombre] = useState<string>(''); // Inicializamos con una cadena vacía
console.log(`the name: ${nombre}`);

  return (
    <div>
        
        <h2>Input with string</h2>
      {/* Input para que el usuario escriba su nombre */}
      <input
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)} // Actualizamos el estado con el valor del input
        placeholder="Escribe tu nombre"
      />

      {/* Mostrar el nombre actual del usuario */}
      <p>Hola, {nombre}!</p>
    </div>
  );
}

export default BinputString;
