/*Una convecion es: Usar el guion o doble guion bajo para indicar que
algo es privado*/

var Beer = function(name) {
    this.__name = name || "unnamed";
    this.setName = function(newname) {
        if (newname) {
            this.__name = newname;
        }
    }
    this.getName = function() {
        return this.__name;
    }
}

var beer = new Beer("Punk IPA");
console.log(beer.getName());        // Imprime Punk IPA
beer.setName();
console.log(beer.getName());        // Imprime Punk IPA
beer.__name = undefined;
console.log(beer.getName());        // Imprime undefined
