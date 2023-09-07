function primos( isPrimo = []){
    for (let i = 250; i < 551; i++) {
        let div = [];
        for (let y = 1; y < i+1; y++) {
            i % y == 0 ? div.push(y) : undefined;
        }
        if (div.length === 2) {
            isPrimo.push(i);
        }
    }
    console.log(isPrimo);
}