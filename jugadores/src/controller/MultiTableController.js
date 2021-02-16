import React, {useState} from 'react';
import TableController from '../controller/TableController';
// import FormController from '../controller/FormController';

export default function MultiTableController ({arrTodos, title, arrDataForm, arrEntity, arrTitle, service}) {

  const [state, setState] = useState({select: []});
  // const [panel, setPanel] = useState({form: false});

  let setSelect = index => {
    let {select} = state;
    select.push(index);
    setState({select: select})
  };

  let previusTable = () => {
    let {select} = state;
    select.splice(-1,1);
    setState({select: select})
  }

  // let select = (id, todos) => {
  //   let arr = 
  // }

  return (
    <div>
      <h2>{title}</h2>
      {/* {panel ? </> :  */}
      <TableController 
        todos = {arrTodos[state.select.length]}
        entity= {arrEntity[state.select.length]}
        dataForm= {arrDataForm[state.select.length]}
        title= {arrTitle[state.select.length]}
        dataFunction = {state.select.length <= (arrTodos.length-2) && (index=>setSelect(index))}
        adicionalComponent = {state.select.length > 0 && (()=><>
          <button onClick = {()=>previusTable()}>Regresar</button>
          <button onClick = {()=>console.log('add')}>Agregar</button>
        </>)}
      />
    </div>
  );
};
