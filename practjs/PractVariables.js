/*Una convecion es: Usar el guion o doble guion bajo para indicar que
algo es privado*/

// var Beer = function(name) {
//     this.__name = name || "unnamed";
//     this.setName = function(newname) {
//         if (newname) {
//             this.__name = newname;
//         }
//     }
//     this.getName = function() {
//         return this.__name;
//     }
// }

// var beer = new Beer("Punk IPA");
// console.log(beer.getName());        // Imprime Punk IPA
// beer.setName();
// console.log(beer.getName());        // Imprime Punk IPA
// beer.__name = undefined;
// console.log(beer.getName());        // Imprime undefined


/*Por defecto si no devolvemos nada, las funciones en JavaScript
devuelven undefined, excepto si son llamadas con new que entonces
devuelven el propio objeto que se está creando (y que se referencia
por this). Pero nada impide devolver otro objeto que contenga
tan solo los miembros públicos:*/

var Beer = function(name) {
    var __name = name || "unnamed";
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

var beer = new Beer("Punk IPA");
var beer2 = new Beer("Hoegaarden");
var beer3 = new Beer();
beer2.__name = "Sang de rabo de drac";
beer2.setName("Devil's IPA");
console.log(beer3.getName());
console.log(beer3.__name);
// console.log(beer.getName());    // Imprime Punk IPA
// console.log(beer2.getName());   // Imprime Devil's IPA
// console.log(beer.__name);       // Imprime undefined
// console.log(beer2.__name);      // Imprime Sang de rabo de drac
