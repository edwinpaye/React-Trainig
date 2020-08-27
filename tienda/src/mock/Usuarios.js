export const list = [
    {id: 1, message: "hola", other: "otros", options: "delete and update"},
    {id: 2, message: "como estas", other: "varios", options: "pagar"},
    {id: 3, message: "mensaje con mas detalles", other: "mas", options: "cancelar"},
    {id: 4, message: "mensaje con mas detalles", other: "detalles", options: "cancelar"},
    {id: 5, message: "mensaje con mas detalles", other: "relacionados", options: "otros"}
];

export const desc = [
    {id: '5', name: 'gorra', stock: 1, description: 'tejido a mano'},
    {id: '10', name: 'medias', stock: 1, description: 'tejido a mano'},
    {id: '1', name: 'guantes', stock: 1, description: 'tejido a mano'}
];

export const desc2 = [
    {id: 'asdasd', name: 'abrigo', stock: 1, description: 'tejido a mano'},
    {id: '123', name: 'bufanda', stock: 1, description: 'tejido a mano'},
    {id: 'asda1231', name: 'chaleco', stock: 1, description: 'tejido a mano'}
];

export const arr = [{
    legend: '',
    label: 'Nombre: ',
    element: 'input',
    props: {type : 'file',
            name: 'nombre',
            value: ''}
},{
    legend: '',
    label: 'Apellido: ',
    element: 'input',
    props: {type : 'range',
            name: 'apellido',
            value: 10}
},{
    legend: '',
    label: 'Seleccione: ',
    element: 'select',
    props: {name: 'select',
            value: 'css3',
            options: [
                'css3',
                'html5',
                'JavaScript']}
},{
    legend: '',
    label: 'Comentario: ',
    element: 'textarea',
    props: {name: 'comentario',
            value: ''}
}]