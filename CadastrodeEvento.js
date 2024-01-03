//data do evento nao pdoe ser anterior a data atual
//participantes tem que ser maior de 18 anos
//listar participantes e palestrantes do evento
//quantidade maxima de 100 pessoas

let dataHoje = new Date (2021-12-8)
let dataEvento = new Date (2021-12-12)
if (dataEvento < dataHoje){
    console.log("É possivel cadastrar o evento, data dentro do prazo necessário")
    
} else {
    console.log("Não é possivel cadastrar o evento, data fora do prazo necessário")

}

let idade = 23;
if(idade >= 18){
    console.log("Idade dentro do minimo necessário para o cadastro")

} else {
    console.log("Idade fora do minimo necessário para o cadastro")

}

let listadePessoas = ["Miguel","Arthur","Helena","Alice","Laura","Gabriel","Manuela","Lucas","Gabriela","José"]
let listadePalestrantes = ["Gael","Cecilia","Marcos","Jessica","Heitor"]
if(listadePessoas.length + listadePalestrantes.length < 100){
    console.log("É possivel cadastrar mais pessoas, maximo de 100 pessoas")

} else {
    console.log("Não foi possivel fazer o cadastro, limite maximo de pessoas excedido")

}

