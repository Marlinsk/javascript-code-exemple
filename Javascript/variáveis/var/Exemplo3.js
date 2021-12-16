for (var i = 0; i < 11; i++){
    console.log(i);
}

console.log('Último elemento do array é', i);

const funcs = []

for (var i = 0; i < 11; i++){
    funcs.push(function() {
        console.log(i);
    });
}

funcs[2]()
funcs[8]()