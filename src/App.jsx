import { useState } from 'react'
import './App.css'
import { Boton } from './Boton';




function App() {

  const datos = [
    { value: "C", type: "operador" },
    { value: "/", type: "operador" },
    { value: "X", type: "operador" },
    { value: "%", type: "operador" },
    { value: 7, type: "numero" },
    { value: 8, type: "numero" },
    { value: 9, type: "numero" },
    { value: "-", type: "operador" },
    { value: 4, type: "numero" },
    { value: 5, type: "numero" },
    { value: 6, type: "numero" },
    { value: "+", type: "operador" },
    { value: 1, type: "numero" },
    { value: 2, type: "numero" },
    { value: 3, type: "numero" },
    { value: "=", type: "operador" },
  ];

  const [resultado, setResultado] = useState(0);
  const [operacion, setOperacion] = useState(null);
  const [valorAnterior, setValorAnterior] = useState(null);

  const handleButtonClick = (value, type) => {

    console.log(value);
    console.log(type);

    if (type === 'numero') {
      setResultado(prevResultado => {
        if (prevResultado === 0) {
          return value;
        } return `${prevResultado}${value}`;
      });
    } else if (type === 'operador') {
      if (value === 'C') {
        
        setResultado(0);
        setOperacion(null);
        setValorAnterior(null);
      } else if (['/', 'X', '-', '+', '%'].includes(value)) {
        
        setValorAnterior(Number(resultado));
        setOperacion(value);
        setResultado(0);

      } else if (value === '=') {
        
        if (operacion && valorAnterior !== null) {
          let nuevoResultado;
          const valorActual = Number(resultado);
          switch (operacion) {
            case '/':
              nuevoResultado = valorAnterior / valorActual;
              break;
            case 'X':
              nuevoResultado = valorAnterior * valorActual;
              break;
            case '-':
              nuevoResultado = valorAnterior - valorActual;
              break;
            case '+':
              nuevoResultado = valorAnterior + valorActual;
              break;
            case '%':
              nuevoResultado = valorAnterior % valorActual;
              break;
            default:
              return; 
          }
          setResultado(nuevoResultado);
          setOperacion(null);
          setValorAnterior(null);
        }
      }
    }
  };


return (

  <div className='container'>
    <div className='result-container'>
      <span className='result'>{resultado}</span>
    </div>
    <div className='buttons-container'>
      {
        datos.map(item => (
          <Boton
            value={item.value}
            key={item.value}
            type={item.type}
            onClick={handleButtonClick}
          />
        )
        )
      }
    </div>
  </div>

)
}

export default App
