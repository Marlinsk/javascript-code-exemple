let variavel1 = 4; 
{
    let variavel2 = 5;
    console.log('Dentro=',variavel2);
}
console.log('Fora=',variavel1);

function teste() {
    let variavel3 = 'variável local';
    console.log(variavel3);
}