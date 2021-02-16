import React, {useState} from 'react';
import TableController from '../controller/TableController';

export default function PanelController ({firstTodos, secondTodos, title, unitTodos, service}) {

  const [state, setState] = useState({equipo: null});

  // let history = useHistory();
  // let handleClick = () => history.push({pathname: '/table'});
  // let cancelEquipo = () => setState({equipo: null});

  let setEquipo = index => setState({equipo: index});

  return (
    <div>
      <h1>Panel Controller</h1>
      <h2>{title}</h2>
      {state.equipo !== null ? <TableController
          {...secondTodos} 
          options = {index => (<>
              <button onClick = {
                () => service.create(unitTodos, ({
                  id_equipo: firstTodos.todos[state.equipo].id,
                  id_jugador: secondTodos.todos[index].id
                }))
              }>Seleccionar</button>
          </>)}
          adicionalComponent = {()=><button onClick = {()=>setEquipo(null)}>Atras</button>}
        /> : <TableController {...firstTodos} dataFunction = {setEquipo}/>
      }
      {/* <button onClick={handleClick}>Go to Home</button> */}
    </div>
  );
};
