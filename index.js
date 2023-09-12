import Express  from "express";
import { crud_estudiante } from "./controlador/crud_estudiantes.js";
const app_e = Express();
app_e.use(Express.static('./vista'))
app_e.use(Express.static('./controlador'))
app_e.use(Express.static('./modelo'))
//motor
app_e.set('views','./vista')
app_e.set('view engine','ejs')
app_e.listen('5000',function(){
    console.log('Aplicación iniciada en: http://localhost:5000 ')
})


app_e.get('/',crud_estudiante.leer);