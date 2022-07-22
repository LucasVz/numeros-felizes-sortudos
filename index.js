import PromptSync from "prompt-sync";

function feliz(num) {
  let soma = 0;
  while (num !== 0) {
    soma += (num % 10) * (num % 10);
    num = Math.floor(num / 10);
  }
  return soma;
}

function ehFeliz(num) {
  num = num * num;
  for (let i = 0; i < 100; i++) {
    num = feliz(num);
    if (num === 1) {
      return true;
    }
  }
  return false;
}

function criarLista(num) {
  const arr = [];
  for (let i = 1; i <= num; i++) {
    arr.push(i);
  }
  return arr;
}

function sortudo(lista, sequencia) {
  let arr = [];
  for (let i = 0; i < lista.length; i++) {
    if ((i + 1) % sequencia !== 0) {
      arr.push(lista[i]);
    }
  }
  return arr;
}

function ehSortudo(num) {
  let lista = criarLista(num);
  let sequencia = 2;
  let cont = 1;
  while (sequencia < lista.length) {
    lista = sortudo(lista, sequencia);
    sequencia = lista[cont];
    cont++;
  }

  if (lista[lista.length - 1] === Number(num)) {
    return true;
  } else return false;
}

function main() {
  let prompt = PromptSync();
  let num = prompt("digite um número: ");
  const feliz = ehFeliz(num);
  if (feliz) {
    console.log("É feliz");
  } else console.log("Não é feliz");
  const sortudo = ehSortudo(num);
  if (sortudo) {
    console.log("É sortudo");
  } else console.log("Não é sortudo");
}

main();
