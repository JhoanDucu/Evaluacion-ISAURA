function sueldoAnual(bono = parseFloat( prompt('De cuanto es el porcentaje de la bonificacion mensual (ej. 30 es igual al 30%)?')), sueldo = parseFloat( prompt('Cual es el sueldo diario de su empleado?'))){
    let sueldoMes = sueldo*30;
    let sueldoAno = sueldoMes;
    for (let i = 0; i < 12; i++) {
        sueldoAno += sueldoMes - (sueldoMes * (bono/100));
    }

    alert(`El sueldo al año es de: ${sueldoAno}`);
}