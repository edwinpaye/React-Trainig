export const Equipo = {
    propiedades: [
        {
            key: 'id',
            type: 'int',
            name: 'Id'
        },
        {
            key: 'nombre',
            type: 'string',
            name: 'Nombre'
        },
        {
            key: 'estado',
            type: 'string',
            name: 'Estado'
        },
        {
            key: 'entrenador',
            type: 'string',
            name: 'Entrenador'
        }
    ],
    opciones: [
        {
            key: 'deleteEquipo',
            name: 'Borrar'
        },
        {
            key: 'updateEquipo',
            name: 'Actualizar'
        }
    ],
    recursoName: 'Equipo'
}

export const EquipoForm = [{
    legend: '',
    label: 'Nombre: ',
    element: 'input',
    props: {type : 'text',
            name: 'nombre',
            value: ''}
},{
    legend: '',
    label: 'Estado: ',
    element: 'input',
    props: {type : 'text',
            name: 'estado',
            value: ''}
},{
    legend: '',
    label: 'Entrenador: ',
    element: 'input',
    props: {type : 'text',
            name: 'entrenador',
            value: ''}
}]