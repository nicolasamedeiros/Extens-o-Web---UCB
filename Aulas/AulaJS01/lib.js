/*
var nome = prompt("Digite o Nome: ")
var sobrenome = prompt("Digite o Sobrenome: ")
console.log("Bem Vindo " + nome + " Sobrenome " + sobrenome)
document.write("Bem Vindo " + nome + " Sobrenome " + sobrenome)
*/

/*
if (nome === 'Chaves') {
    document.write("<img src='https://www.rbsdirect.com.br/imagesrc/35488734.jpg?w=700'>")
}else {
    document.write("<img src='https://img.freepik.com/fotos-gratis/pessoa-de-origem-indiana-se-divertindo_23-2150285283.jpg?size=626&ext=jpg&ga=GA1.1.1395880969.1709078400&semt=ais'>")
}
*/

for (var i = 0; i < 4; i++){
    var n = Number(prompt("Digite um número: "))
    var result = n % 2
    if (result === 0) {
        document.write("Par " + n)
    }
    else {
        document.write("Impar " + n)
    }
}