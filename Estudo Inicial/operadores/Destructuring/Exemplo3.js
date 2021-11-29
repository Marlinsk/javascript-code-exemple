function rand({ min = 0, max = 2000 }) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor);
}

const obj = { max: 1000, min: 1 }
console.log(rand(obj))
console.log(rand({ min: 999 }))
console.log(rand({}))
console.log(rand())