// Crie uma função que recebe um número (de 1 a 12 e retorne o mês correspondente como uma string. Por
//     exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2° mês.
//     Exemplos:
//     nomeDoMes(1) // retornará "janeiro"
//     nomeDoMes(4) // retornará "abril"


// tentativa -> meu erro foi não ter usado função para realizar o exercicio
// let nomeDoMes = 12;

// switch(Math.ceil(nomeDoMes)) {
//     case 1: console.log('Janeiro'); break;
//     case 2: console.log('Fevereiro'); break;
//     case 3: console.log('Março'); break;
//     case 4: console.log('Abril'); break;
//     case 5: console.log('Maio'); break;
//     case 6: console.log('Junho'); break;
//     case 7: console.log('Julho'); break;
//     case 8: console.log('Agosto'); break;
//     case 9: console.log('Setembro'); break;
//     case 10: console.log('Outubro'); break;
//     case 11: console.log('Novembro'); break;   
//     case 12: console.log('Dezembro'); break;  
//     default: console.log('Mês inválido!');
// }

// console.log('Fim!')


//Resposta
function receberNomeDoMes(numero) {
    switch(numero){
        case 1:
            return "Janeiro";
        case 2:
            return "Fevereiro";
        case 3:
            return "Março";
        case 4: 
            return "Abril";
        case 5:
            return "Maio";
        case 6:
            return "Junho";
        case 7:
            return "Julho";
        case 8:
            return "Agosto";
        case 9:
            return "Setembro";
        case 10:
            return "Outubro";
        case 11:
            return "Novembro";
        case 12:
            return "Dezembro";
    }
}

console.log(receberNomeDoMes(10))