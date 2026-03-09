let par = 0, impar = 0;
for(let i = 1 ; i <= 50; i++){
    i % 2 == 0 ? par+=1 : impar+=1;
}

console.log(`Par : ${par}, Impar: ${impar}`)