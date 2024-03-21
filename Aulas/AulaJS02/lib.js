//Funçao para somar dois números
function somarNumeros(numero1, numero2) {
    return numero1 + numero2;
}

//Função para mostrar resuktadi na página HTML
function mostrarResultado() {
    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById('numero2').value);


    //verifica se os valores são válidos
    if (!isNaN(numero1) && !isNaN(numero2)) {
        //calcula a soma dos números usando a função somarNumeros
        const resultado = somarNumeros(numero1, numero2);

        //exibe o resultado na página HTML
        document.getElementById('resultado').innerText = `A soma de ${numero1} e ${numero2} é: ${resultado}`;
    } else {
        //se os valores não forem válidos exibe uma mensagem de erro
        document.getElementById('resultado').innerText = `Por favor, insira números válidos`
    }
}