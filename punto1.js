function sueldo(grupoEmpleados = prompt('¿Que cantidad de empleados va a usar?')){
    let nombres = [];
    let sueldos = [];
    for (let i = 0; i < grupoEmpleados; i++) {
        let nombre = prompt('Cual es el nombre de su empleado? ');
        let s = prompt('Cual es el sueldo de este?');

        nombres.push(nombre);
        sueldos.push(s);
    }
    let promedio = sueldos.reduce((acumular, actual)=>{
        acumular += actual;
    });
    // no terminado
}