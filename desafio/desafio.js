const usuarios = [
  { nome: "Ana", idade: 20, ativo: true, compras: [100, 50, 25] },
  { nome: "Bruno", idade: 17, ativo: false, compras: [30, 20] },
  { nome: "Carlos", idade: 32, ativo: true, compras: [200, 150, 50, 100] },
  { nome: "Diana", idade: 25, ativo: true, compras: [] },
  { nome: "Eduardo", idade: 15, ativo: false, compras: [10] }
];

const arrayTamanho = usuarios.length;

// Total compras
const totalCompras = (a) => {
    for(let i = 0 ; i < arrayTamanho; i++){
        let total = 0;
        for(let n of a[i].compras){
            total+=n
        }
        console.log(`${a[i].nome}: total= ${total}`)
    }
}
console.log("----------")
totalCompras(usuarios)
console.log("----------")

// Usuarios ativos

const userOn = (a) => {
    for(let n in a){
        if(n, a[n].ativo){
            console.log(`${a[n].nome} está online!`)
        }
    }
}
userOn(usuarios)
console.log("----------")

// maior de idade

const maiorIdade = (a) => {
    for(let n in a){
        if((n, a[n].idade) >= 18){
            console.log(`${a[n].nome} é maior de idade!`)
        }
    }
}
maiorIdade(usuarios)
console.log("----------")

const maiorCompra = (a) => {
    let maior = 0; nome = "";
    for(let i = 0 ; i < arrayTamanho; i++){
        let total = 0;
        for(let n of a[i].compras){
            total+=n
        }
        if(total > maior){
            maior = total;
            nome = a[i].nome;
        }
    }
    console.log("Maior: "+maior+" Nome: "+nome)
}

maiorCompra(usuarios)
console.log("----------")

console.log("5" + 2); //concatenação de string, ele pega a string ja existente que é 5 e concatena com o valor 2
console.log("5" - 2); // aqui ele entende que não é concatenação e sim uma operação matematica 
console.log(true + 1); // aqui ele entende que true é 1 e false é 0 valor em byte
console.log(false == 0); // aqui ele entende que true é 1 e false é 0 valor em byte
console.log(false === 0); // aqui ele entende que false é um boolean e 0 é numero

console.log("----------")

const pessoa = {
  nome: "Maria",
  falar: () => {
    console.log(this.nome);
  }
};

pessoa.falar();