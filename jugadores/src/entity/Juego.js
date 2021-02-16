export const Juego = {
    propiedades: [
        {
            key: 'id',
            type: 'int',
            name: 'Id'
        },
        {
            key: 'equipo_local_id',
            type: 'int',
            name: 'Equipo local Id'
        },
        {
            key: 'equipo_visitante_id',
            type: 'int',
            name: 'Equipo visitante Id'
        },
        {
            key: 'resultado_equipo_local',
            type: 'int',
            name: 'Resultado equipo local'
        },
        {
            key: 'resultado_equipo_visitante',
            type: 'int',
            name: 'Resultado equipo visitante'
        },
        {
            key: 'fecha',
            type: 'string',
            name: 'Fecha'
        },
        {
            key: 'hora',
            type: 'string',
            name: 'Hora'
        }
    ],
    opciones: [
        {
            key: 'deleteTorneo',
            name: 'Borrar'
        },
        {
            key: 'updateTorneo',
            name: 'Actualizar'
        }
    ],
    recursoName: 'Juego'
}

export const JuegoForm = [{
    legend: '',
    label: 'Equipo local: ',
    element: 'select',
    props: {type : 'text',
            name: 'equipo_local_id',
            value: '',
            options: []}
},{
    legend: '',
    label: 'Equipo visitante: ',
    element: 'select',
    props: {type : 'text',
            name: 'equipo_visitante_id',
            value: '',
            options: []}
},{
    legend: '',
    label: 'Fecha: ',
    element: 'input',
    props: {type : 'text',
            name: 'fecha',
            value: ''}
},{
    legend: '',
    label: 'Hora: ',
    element: 'input',
    props: {type : 'text',
            name: 'hora',
            value: ''}
},{
    legend: '',
    label: 'Resultado visitante: ',
    element: 'input',
    props: {type : 'number',
            name: 'resultado_equipo_visitante',
            value: 0}
},{
    legend: '',
    label: 'Resultado local: ',
    element: 'input',
    props: {type : 'number',
            name: 'resultado_equipo_local',
            value: 0}
}]