export const Torneo = {
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
            key: 'gestion',
            type: 'int',
            name: 'Gestion del torneo'
        },
        {
            key: 'fecha_inicio',
            type: 'string',
            name: 'Fecha de inicio'
        },
        {
            key: 'fecha_fin',
            type: 'string',
            name: 'Fecha de clausura'
        },
        {
            key: 'ficture',
            type: 'string',
            name: 'Ficture'
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
    recursoName: 'Torneo'
}

export const TorneoForm = [{
    legend: '',
    label: 'Nombre: ',
    element: 'input',
    props: {type : 'text',
            name: 'name',
            value: ''}
},{
    legend: '',
    label: 'Gestion: ',
    element: 'input',
    props: {type : 'number',
            name: 'gestion',
            value: ''}
},{
    legend: '',
    label: 'Fecha inicio: ',
    element: 'input',
    props: {type : 'text',
            name: 'fecha_inicio',
            value: ''}
},{
    legend: '',
    label: 'Fecha de clausura: ',
    element: 'input',
    props: {type : 'text',
            name: 'fecha_fin',
            value: ''}
},{
    legend: '',
    label: 'Ficture: ',
    element: 'input',
    props: {type : 'text',
            name: 'ficture',
            value: ''}
}]