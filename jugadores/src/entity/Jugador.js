export const Jugador = {
    propiedades: [
        {
            key: 'id',
            type: 'int',
            name: 'Id'
        },
        {
            key: 'name',
            type: 'string',
            name: 'Nombre'
        },
        {
            key: 'ap_paterno',
            type: 'string',
            name: 'Apellido paterno'
        },
        {
            key: 'ap_materno',
            type: 'string',
            name: 'Apellido materno'
        },
        {
            key: 'ci',
            type: 'int',
            name: 'Carnet de identidad'
        },
        {
            key: 'domicilio',
            type: 'string',
            name: 'Domicilio'
        },
        {
            key: 'fecha_nacimiento',
            type: 'string',
            name: 'Fecha de nacimiento'
        }
    ],
    opciones: [
        {
            key: 'deleteJugador',
            name: 'Borrar'
        },
        {
            key: 'updateJugador',
            name: 'Actualizar'
        }
    ],
    recursoName: 'Jugador'
}

export const JugadorForm = [{
    legend: '',
    label: 'Nombre: ',
    element: 'input',
    props: {type : 'text',
            name: 'name',
            value: ''}
},{
    legend: '',
    label: 'Apellido paterno: ',
    element: 'input',
    props: {type : 'text',
            name: 'ap_paterno',
            value: ''}
},{
    legend: '',
    label: 'Apellido materno: ',
    element: 'input',
    props: {type : 'text',
            name: 'ap_materno',
            value: ''}
},{
    legend: '',
    label: 'Carnet de identidad: ',
    element: 'input',
    props: {type : 'number',
            name: 'ci',
            value: 0}
},{
    legend: '',
    label: 'Domicilio: ',
    element: 'input',
    props: {type : 'text',
            name: 'domicilio',
            value: ''}
},{
    legend: '',
    label: 'Fecha de nacimiento: ',
    element: 'input',
    props: {type : 'text',
            name: 'fecha_nacimiento',
            value: ''}
}]