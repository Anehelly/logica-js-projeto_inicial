window.alert('Bem vindo(a) ao jogo do número secreto');
let numeroSecreto = 9;
console.log(numeroSecreto)
let numeroChute = window.prompt('Informe um número de 1 a 100:');
if(numeroChute==numeroSecreto){
    alert (`Parabéns, você descobriu o número secreto: ${numeroSecreto}`);
}else{
    alert('Você errou :(')
}

