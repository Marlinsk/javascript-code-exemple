const nome = 'Tatu-bola-do-nordeste'
const especie = 'Tolypeutes tricinctus'
const genero = 'Tolypeutes'
const filo = 'Chordata'
const ordem = 'Cingulata'
const subordem = 'Xenartros'
const familia = 'Clamiforídeos'

const template = `
   nome do animal: ${nome}
   espécie: ${especie}
   família: ${familia}
   filo: ${filo}
   ordem: ${ordem}
   subordem: ${subordem}
   género: ${genero}    

`
console.log(template);

// expressões...
console.log(`1 +1 = ${1 + 1}`);

const up = texto => texto.toUpperCase();
console.log(`God ${up('morgon')}!`);