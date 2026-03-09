let valores = [12, 7, 25, 3, 18, 10, 2, 30]

let sum = 0;

const quantidade = valores.filter(n => n > 10).length;

for(let i = 0 ; i < valores.length ; i++){
    sum += valores[i]
}

console.log("Média: "+(sum / valores.length))
console.log("Maior: "+Math.max(...valores))
console.log("Menor: "+Math.min(...valores))
console.log("Maior que 10: " + quantidade)