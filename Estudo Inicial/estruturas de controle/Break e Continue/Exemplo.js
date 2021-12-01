const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log('Laço com break');
for (let i in numeros) {
    if (i == 9){
        break
    }
    console.log(`${i} = ${numeros[i]}`);
}

console.log('\nLaço com continue - primeiro exemplo');
for (let i in numeros) {
    if(i == 5) {
        continue
    }
    console.log(`${i} = ${numeros[i]}`)    
}

console.log('\nExternal reference')
externo: for (a in numeros){
    for (b in numeros) {
        if(a == 2 && b == 3) break externo
        console.log(`Par = ${a},${b}`);
    }
}

console.log('Fim!');