import './Boton.css';

export const Boton = ({value, type, onClick}) => {

  

  return (
    <div  onClick={() => onClick(value, type)} className={type === 'operador' ? 'operador' : 'boton'}><span>{value}</span></div>
  )
}
