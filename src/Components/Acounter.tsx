import { useState } from "react"

 
const Acounter = () => {
    //Solo en algunos casos se debe especificar el tipo de dato en useState porque typescript puede inferir
    const [contador, setContador]= useState<number>(0)
  return (
    <div>
        <h2>This is a Counter</h2>
        <p>The counter is: {contador}</p>
        <button onClick={()=>setContador(contador + 1)}>+</button>
        <button onClick={()=>setContador(contador - 1)}>-</button>
        <button onClick={()=> setContador(0)}>Reset</button>
      
    </div>
  )
}

export default Acounter
