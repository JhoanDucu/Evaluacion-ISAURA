function sumaVector(largor = prompt('Que largo tendra el vector?')){
    let vector = [];
    let suma = 0;
    for (let i = 0; i < largor; i++) {
        let valor = Number(prompt('Ingrese un numero para el vector: '));
        vector.push(valor);
        suma += valor;
    }
    console.log(vector);
    console.log(`La suma es igual a ${suma}`);
}