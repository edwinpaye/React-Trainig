const Producto = {
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
export default Producto;