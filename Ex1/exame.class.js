export class Exame {
  constructor(respostasCorretas, pesos) {
    this.respostasCorretas = respostasCorretas 
    this.pesos = pesos
    this.provas = []
  }

  adicionar(prova) {
    let nota = 0

    for (let questao in prova.respostas) {
      let respostaAluno = prova.respostas[questao]
      let respostaCorreta = this.respostasCorretas[questao]
      let peso = this.pesos[questao]

      if (respostaAluno === respostaCorreta) {
        nota += peso
      }
    }

    prova.nota = nota
    this.provas.push(prova)
  }

  media() {
    if (this.provas.length === 0) return 0

    let somaNotas = 0
    for (let prova of this.provas) {
      somaNotas += prova.nota;
    }

    return (somaNotas / this.provas.length).toFixed(2)
  }

  menor(qtd = 1) {
    let notas = this.provas.map(p => p.nota)

    let menores = [];
    for (let i = 0; i < qtd; i++) {
      let min = Math.min(...notas)
      menores.push(min)

      let index = notas.indexOf(min)
      notas.splice(index, 1)
    }
    return menores
  }

  maior(qtd = 1) {
    let notas = this.provas.map(p => p.nota)

    let maiores = []
    for (let i = 0; i < qtd; i++) {
      let max = Math.max(...notas)
      maiores.push(max)

      let index = notas.indexOf(max)
      notas.splice(index, 1)
    }
    return maiores
  }

  abaixoDe(limite) {
    let resultado = []
    for (let prova of this.provas) {
      if (prova.nota < limite) {
        resultado.push(prova.nota)
      }
    }
    return resultado
  }

  acimaDe(limite) {
    let resultado = []
    for (let prova of this.provas) {
      if (prova.nota > limite) {
        resultado.push(prova.nota)
      }
    }
    return resultado
  }
}