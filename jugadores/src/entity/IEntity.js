producto = {
    id: 'int',
    name: 'string',
    stock: '',
    description: ''
}

// ejemplo de descripcion de un esquema de recurso api rest hypermedia HATEOAS

campoDescription = {
    key: 'nombre del campo del dato',
    type: 'tipo de dato',
    name: 'nombre del campo'
}

operacionDescripcion = {
    // implementar propiedades de respuesta del servidor como error u otros
    key: 'nombre del href de la operacion',
    name: 'nombre de la operacion'
}

recursoDescripcion = {
    key: 'nombre del campo del recurso',
    propiedades: 'campos del recurso(coleccion de campoDescription)',
    opciones: 'operaciones crud disponibles del recurso(coleccion de operacionDescripcion)',
    name: 'nombre del recurso'
}

coleccionRecursosDescripcion = {
    key: 'nombre del campo de la coleccion',
    todos: 'coleccion de recursos',
    opciones: 'operaciones crud, paginado, etc. de la coleccion de recursos',
    name: 'nombre de la coleccion de recursos'
}

ejemploProducto = {
    propiedades: [
        {
            key: 'id',
            type: 'int',
            name: 'ID del Producto'
        },
        {
            key: 'name',
            type: 'string',
            name: 'Nombre del Producto'
        },
        {
            key: 'stock',
            type: 'int',
            name: 'Stock del producto'
        },
        {
            key: 'description',
            type: 'string',
            name: 'Descripcion del Producto'
        }
    ],
    opciones: [
        {
            key: 'deleteProduct',
            name: 'Borrar'
        },
        {
            key: 'updateProduct',
            name: 'Actualizar'
        },
        {
            key: 'hself',
            name: 'Refrescar'
        }
    ],
    recursoName: 'Producto'
}
// hacer un ejemplo de descripcion de un esquema de endpoints api rest hypermedia HATEOAS