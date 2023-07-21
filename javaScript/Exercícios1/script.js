function maiorNumero(){
    const numero1 = parseInt(document.getElementById("numero1").value, 10);
    const numero2 = parseInt(document.getElementById("numero2").value, 10);
    if(numero1 > numero2){
        document.getElementById("maiorNumero").innerHTML = numero1;
    }else if(numero1 < numero2){
        document.getElementById("maiorNumero").innerHTML = numero2;
    }else{
        document.getElementById("maiorNumero").innerHTML = "Números iguais";
    }

}

function nota(){
    const nota = document.getElementById("nota").value;
    if(nota < 6){
        document.getElementById("notaresultado").innerHTML = "Reprovado";
    }else if(nota <=8 && nota >= 6){
        document.getElementById("notaresultado").innerHTML = "Aprovado";
    }else {
        document.getElementById("notaresultado").innerHTML = "Aprovado com louvor";
    }

}

function media(){
    const input = document.getElementById('vetor').value;
    const numeros = input.split(/,| /).map(Number);
    const soma = numeros.reduce((a, b) => a + b, 0);
    const media = soma / numeros.length;
    document.getElementById('mediaresultado').textContent = `Media: ${media}`;
}

function letra(){
    const letra = document.getElementById("letra").value;
    if(letra == "a"){
        document.getElementById("letraresultado").innerHTML = "A";
    }else if(letra == "b"){
        document.getElementById("letraresultado").innerHTML = "B";
    }else{
        document.getElementById("letraresultado").innerHTML = "Outra letra";
    }
}

function matriz(){
    const input = document.getElementById('matriz').value;
    const numeros = input.split(/,| /).map(Number);
    const soma = numeros.reduce((a, b) => a + b, 0);
    const media = soma / numeros.length;
    document.getElementById('matrizresultado').textContent = `Media: ${media}`;
}

function fatorial(){
    const numero = document.getElementById("fatorial").value;
    let resultado = 1;
    for(let i = 1; i <= numero; i++){
        resultado *= i;
    }
    document.getElementById("fatorialresultado").innerHTML = resultado;
}

function opcao(){
    const opcao = document.getElementById("opcao").value;
    switch(opcao){
        case "1":
            document.getElementById("opcaoresultado").innerHTML = "Opção 1";
            break;
        case "2":
            document.getElementById("opcaoresultado").innerHTML = "Opção 2";
            break;
        case "3":
            document.getElementById("opcaoresultado").innerHTML = "Opção 3";
            break;
        default:
            document.getElementById("opcaoresultado").innerHTML = "Opção inválida";
            break;
    }
}

function maiorVetor(){
    const input = document.getElementById('vetor2').value;
    const numeros = input.split(/,| /).map(Number);
    const maior = Math.max(...numeros);
    document.getElementById('maiorVetorResultado').textContent = `Maior: ${maior}`;
}

function mediaMatriz(){
    const input = document.getElementById('matriz2').value;
    const numeros = input.split(/,| /).map(Number);
    const soma = numeros.reduce((a, b) => a + b, 0);
    const media = soma / numeros.length;
    document.getElementById('mediaMatrizResultado').textContent = `Media: ${media}`;
}