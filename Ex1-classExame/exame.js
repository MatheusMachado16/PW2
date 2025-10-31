import { Exame } from "./exame.class.js";


const gabarito = { q1: "A", q2: "B", q3: "C" };
const pesos = { q1: 2, q2: 3, q3: 5 };


const exame = new Exame(gabarito, pesos);


exame.adicionar({
  nome: "Maria",
  respostas: { q1: "A", q2: "B", q3: "D" } 
});

exame.adicionar({
  nome: "João",
  respostas: { q1: "A", q2: "C", q3: "C" } 
});

exame.adicionar({
  nome: "Ana",
  respostas: { q1: "A", q2: "B", q3: "C" } 
});

console.log(exame.media());
console.log(exame.menor());
console.log(exame.maior());
console.log(exame.abaixoDe(8));
console.log(exame.acimaDe(6));
