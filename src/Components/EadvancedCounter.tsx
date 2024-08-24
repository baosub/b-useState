import { useState } from 'react';

function ContadorAvanzado() {

    
  // Estado para almacenar el valor del contador
  const [contador, setContador] = useState<number>(0);

  // Función para incrementar el contador de manera segura
  const incrementarSeguro = () => {
    setContador((valorPrevio) => valorPrevio + 1); // Usamos una función que recibe el valor previo
  };

  // Función para decrementar el contador de manera segura
  const decrementarSeguro = () => {
    setContador((valorPrevio) => valorPrevio - 1);
  };

  return (
    <div>
        <h2>Safer counter</h2>
      <p>Valor del contador: {contador}</p>
      <button onClick={incrementarSeguro}>Incrementar de forma segura</button>
      <button onClick={decrementarSeguro}>Decrementar de forma segura</button>
    </div>
  );
}

export default ContadorAvanzado;
