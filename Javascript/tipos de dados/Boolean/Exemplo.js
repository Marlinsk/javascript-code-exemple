let isAtivo = true;
console.log(isAtivo);

isAtivo = false;
console.log(isAtivo);

isAtivo = 1;
console.log(!!isAtivo);

isAtivo = 0;
console.log(!!isAtivo);

console.log('Os verdadeiros:');
console.log(!!3);
console.log(!!-1);
console.log(!!'string');
console.log(!!' ');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));

console.log('Os falsos:');
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log('Outros exemplos:');
console.log(!!('' || null || 0 || ''));
console.log(('' || null || 0 || 'string')); // retorna o primeiro valor verdadeiro que achar

let nome = ''

console.log(nome || 'Desconhecido');
