const personasRouter = require('express').Router();
const Personas = require('./personas');
const Persona = require('./modelos/modelopersona.js');

class PersonasRouter  {
    static router(app){
        personasRouter.get('/persona', function(req, res, next){
            Personas.getPersonas()
            .then((respuesta) => {
                res.send(respuesta);
            })
            .catch((error) => res.send('error'));
        });
        // playerRouter.get('/play', async (req, res, next)=>{
        //     const player = await Player.find();
        //     res.render('index', {player});
        // });

        personasRouter.post('/persona', async (req, res, next)=>{
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
        });
        app.use('/api', personasRouter)
    }
}
module.exports = PersonasRouter;