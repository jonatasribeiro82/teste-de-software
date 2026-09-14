// 1. Tipagem Básica
let linguagem: string = "TypeScript";
let versao: number = 5;
let ativo: boolean = true;

// 2. Erro do TypeScript documentado
// let numeroErro: number = "vinte";
// O TypeScript acusa o erro: Type 'string' is not assignable to type 'number'.

// 3. Condicional if/else
let idade: number = 25;
if (idade >= 18) {
  console.log("Maior de idade");
} else {
  console.log("Menor de idade");
}

// 4. Condicional if/else if/else
let nota: number = 8;
if (nota >= 7) {
  console.log("Aprovado");
} else if (nota >= 5 && nota < 7) {
  console.log("Recuperação");
} else {
  console.log("Reprovado");
}

// 5. Switch
let diaDaSemana: number = 4;
switch (diaDaSemana) {
  case 1: console.log("Domingo"); break;
  case 2: console.log("Segunda"); break;
  case 3: console.log("Terça"); break;
  case 4: console.log("Quarta"); break;
  case 5: console.log("Quinta"); break;
  case 6: console.log("Sexta"); break;
  case 7: console.log("Sábado"); break;
  default: console.log("Dia inválido");
}

// 6. Loop for (1 a 10)
console.log("--- Questão 6 ---");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 7. Loop while (Pares entre 1 e 20)
console.log("--- Questão 7 ---");
let contador: number = 1;
while (contador <= 20) {
  if (contador % 2 === 0) {
    console.log(contador);
  }
  contador++;
}

// 8. Array e for..of (Soma)
console.log("--- Questão 8 ---");
let numeros: number[] = [10, 20, 30, 40, 50];
let soma: number = 0;
for (let num of numeros) {
  soma += num;
}
console.log(`Total da soma: ${soma}`);

// 9. Loop for com condicional (Ímpares 1 a 15)
console.log("--- Questão 9 ---");
for (let i = 1; i <= 15; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

// 10. Desafio (Par ou Ímpar no Array)
console.log("--- Questão 10 ---");
let desafioArray: number[] = [7, 14, 22, 33, 40];
for (let i = 0; i < desafioArray.length; i++) {
  if (desafioArray[i] % 2 === 0) {
    console.log(`O número ${desafioArray[i]} é par`);
  } else {
    console.log(`O número ${desafioArray[i]} é ímpar`);
  }
}