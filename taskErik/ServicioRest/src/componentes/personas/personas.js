class Personas{
    static getPersonas(){
        return (new Promise((resolve, reject)=>{
            //consultar la db
            resolve([
                { name: 'edwin', ci: '5654'},
                { name: 'jesu', ci: '15135'}
            ]);
        }));
    }
    static getPersona(personaId) {
        const promisePlayers  = new Promise((resolve, reject) => {
            // consultar la bd
            resolve();
        });
        return promisePlayers;
    }
    static postPersona(persona){
        const peticion = req.body;
            const persona = new Persona(peticion);
            console.log(persona);
            try{
                persona.save();
                res.send('item saved to database');
            }catch(error){
                console.log(error);
                res.send('unable to save to database');
            };
    }
}
module.exports = Personas;