function calculoSaldo(vitoria, derrota){
    return vitoria - derrota
}

let saldoVitorias = calculoSaldo(123, 41)
let nivel

if (saldoVitorias < 10){
    nivel = "Ferro"
} else if (saldoVitorias <= 20){
    nivel = "Bronze"
} else if (saldoVitorias <= 50){
    nivel = "Prata"
} else if (saldoVitorias <= 80){
    nivel = "Ouro"
} else if (saldoVitorias <= 90){
    nivel = "Diamante"
} else if (saldoVitorias <= 100){
    nivel = "Lendário"
} else {
    nivel = "Imortal"
}

console.log(`O Herói tem saldo de ${saldoVitorias} vitórias e está no nível ${nivel}`)
