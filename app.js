window.alert('Bem vindo(a) ao jogo do número secreto');
let numeroSecreto = 9;
let numeroChute; 
let tentativa = 1;

while (numeroChute != numeroSecreto){
numeroChute = window.prompt('Informe um número de 1 a 10:');
if(numeroChute==numeroSecreto){
    alert (`Parabéns, você descobriu o número secreto: ${numeroSecreto} com ${tentativa} tentativas`);
}else{
    alert('Você errou :(')
    if(numeroChute > numeroSecreto){
        alert(`O número secreto é menor que ${numeroChute}`);
    }else{
        alert(`O número secreto é maior que ${numeroChute}`);
    }
    tentativa++;
    }
}

