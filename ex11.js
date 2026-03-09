let numeros = [10, 5, 8, 20, 15]
let sum = 0;

for(let i = 0 ; i < numeros.length ; i++){
    sum += numeros[i]
}
console.log("Soma: "+sum)
console.log("Média: "+(sum / numeros.length))