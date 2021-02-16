export default {

    create: (arr, item) => {
        let index = arr.length
        index === 0 ? item.id = 1 : item.id = arr[index - 1].id +1;
        arr.push(item);
    },

    update: (arr, i, newData) => {
        arr[i] = newData;
    },

    delete: (arr, i) => {
        arr.splice(i, 1);
    },

    search: (todos, equipoForm, data) => {
        let res = todos.reduce((acc, element, i) => {
            let result = equipoForm.reduce((a, e) => {
                typeof element[e.props.name] === 'string' &&
                    element[e.props.name].includes(data) && (a++);
                return a
            }, 0)
            result > 0 && acc.push(i);
            return acc
        }, []);
        return res;
    },

    // todos = tabla de keys foraneos
    // secondTodos = tabla de entidades
    searchById: (todos, key, secondTodos, secondKey, id) => {
        let res = todos.reduce((acc, item) => {
            item[key] === id && acc.push(secondTodos.find(element => element.id === item[secondKey]));
            return acc;
        }, []);
        return res;
    },

    deleteByKey: (arr, key, data) => {
        let i = arr.findIndex(element => element[key] === data);
        i !== -1 && arr.splice(i, 1);
    }

}