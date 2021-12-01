function avaliacao(nota){
    if(nota > 60){
        console.log('Parabéns você foi Aprovado!')
    }
    if(nota < 60){
        console.log('Você foi Reprovado!')
    }
}

avaliacao(61);
avaliacao(45);

function seForVerdadeEuFalo(valor){
    if(valor){
        console.log(`O ${valor} é verdadeiro!`);
    }
}

seForVerdadeEuFalo();
seForVerdadeEuFalo(null);
seForVerdadeEuFalo(undefined);
seForVerdadeEuFalo(NaN);
seForVerdadeEuFalo('');
seForVerdadeEuFalo(0);
seForVerdadeEuFalo(-1);
seForVerdadeEuFalo(' ');
seForVerdadeEuFalo('?');
seForVerdadeEuFalo([]);
seForVerdadeEuFalo([1, 2]);
seForVerdadeEuFalo({});