function sueldo(grupoEmpleados = prompt('¿Que cantidad de empleados va a usar?')){
    let nombres = [];
    let sueldos = [];
    let promedio = 0;
    for (let i = 0; i < grupoEmpleados; i++) {
        let nombre = prompt('Cual es el nombre de su empleado? ');
        let s = Number(prompt('Cual es el sueldo de este?'));
        promedio += s;

        nombres.push(nombre);
        sueldos.push(s);
    }
    promedio /= sueldos.length;
    console.log(promedio);
    for (let y = 0; y < sueldos.length; y++){
        if (sueldos[y] > promedio) {
            alert('El empleado '+nombres[y]+' Gana mas que el promedio')
        } else {
            alert(`${nombres[y]} no gana mas del promedio`);
        }
    }
}
