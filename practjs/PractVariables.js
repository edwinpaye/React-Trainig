/*Una convecion es: Usar el guion o doble guion bajo para indicar que
algo es privado*/

// var Variable = function(name) {
//     this.__name = name || "sin nombre";
//     this.setName = function(newname) {
//         if (newname) {
//             this.__name = newname;
//         }
//     }
//     this.getName = function() {
//         return this.__name;
//     }
// }

// var variable = new Variable("variable uno");
// console.log(variable.getName());        // Imprime variable uno
// variable.setName();
// console.log(variable.getName());        // Imprime variable uno
// variable.__name = undefined;
// console.log(variable.getName());        // Imprime undefined


/*Por defecto si no devolvemos nada, las funciones en JavaScript
devuelven undefined, excepto si son llamadas con new que entonces
devuelven el propio objeto que se está creando (y que se referencia
por this). Pero nada impide devolver otro objeto que contenga
tan solo los miembros públicos:*/

var Variable = function(name) {
    var __name = name || "sin nombre";
    var setName = function(newname) {
        if (newname) {
            __name = newname;
        }
    }
    var getName = function() {
        return __name;
    }

    return {
        getName: getName,
        setName: setName
    }
}

var variable = new Variable("variable uno");
var variable2 = new Variable("variable dos");
var variable3 = new Variable();
variable2.__name = "change __name";
variable2.setName("change var 2");
console.log(variable3.getName());
console.log(variable3.__name);

console.log(variable.getName());    // Imprime variable uno
console.log(variable2.getName());   // Imprime change dos
console.log(variable.__name);       // Imprime undefined
console.log(variable2.__name);      // Imprime change __name
