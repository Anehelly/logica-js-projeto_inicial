window.alert('Bem vindo(a) ao jogo do número secreto');
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto)
let numeroChute; 
let tentativa = 1;

while (numeroChute != numeroSecreto){
numeroChute = window.prompt(`Informe um número de 1 a ${numeroMaximo}`);
if(numeroChute==numeroSecreto){
    break
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

//operador ternário
// tentativa é maior que 1? se sim TENTATIVAS senão TENTATIVA
let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa';
alert(`Parabéns, você descobriu o número secreto: ${numeroSecreto} com ${tentativa} ${palavraTentativa}`)


/*
if(tentativa > 1){
    alert (`Parabéns, você descobriu o número secreto: ${numeroSecreto} com ${tentativa} tentativas`);
}else{
    alert (`Parabéns, você descobriu o número secreto: ${numeroSecreto} com ${tentativa} tentativa`);
}*/




