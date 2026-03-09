let requests = [12, 30, 5, 18, 40, 22, 8]
let limite = 25

let valid = 0, invalid = 0;

for(let i = 0 ; i < requests.length; i++){
    if(requests[i] <= limite){
        console.log("OK")
        valid++;
    }else{
        console.log("LIMIT EXCEEDED")
        invalid++;
    }
}

console.log("MAIOR: " + Math.max(...requests))
console.log("VALIDOS: "+valid)
console.log("INVALIDOS: "+invalid)