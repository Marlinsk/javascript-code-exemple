const mcLaren = {
    modelo: '765LT',
    velMax: 330
}

const porsche = {
    modelo: '718 Cayman GT4',
    velMax: 302
}

console.log(mcLaren.__proto__);
console.log(mcLaren.__proto__ === Object.prototype);
console.log(porsche.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__ === null);

function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto);
console.log(Object.prototype, MeuObjeto.prototype);