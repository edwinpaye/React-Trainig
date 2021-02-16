import React from 'react';
// import PropTypes from 'prop-types';

// * hacer otra lista para coleccion de datos no homogeneos *
const ListaCitas = ({dataList}) =>  {

    // Imprimir un mensaje en base a si hay citas o no
    const mensaje = Object.keys(dataList).length === 0 ? 'No hay contenido' : 'Lista de Prueba';

    return ( 
        <div className="card mt-2 py-5">
            <div className="card-body">
                <h2 className="card-title text-center">{mensaje}</h2>
    
                <div className="lista-citas">
                    <ul>
                        {dataList.map(data => (
                            <li key={data.id} >{data.message}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

// ListaCitas.propTypes = {
//     citas : PropTypes.array.isRequired,
//     eliminarCita : PropTypes.func.isRequired
// }
 
export default ListaCitas;
