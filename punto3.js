function factorial( numero = parseInt(prompt('Averiguar la factorial de que numero? (ej. 2! = 2)'))){
    let f = 1;
    for (let i = 1; i <= numero; i++) {
        f *= i;
    }
    isNaN(numero) ? alert('Factorial de 0 es '+f) : alert('Factorial de '+numero+' es '+f);
}