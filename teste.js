function factorial(num) {
  var x = num;
  while (x > 1) {
    num *= x-1;
    x--;
  }
  return num;
}

console.log(factorial(4))


function fatorial(num){ // num é o número que você quer o saber o fatorial
  let x = num // agora x tem o mesmo valor inicial de num
  while (x>1){ // enquanto x menor que 1
    num = num * (x - 1) // num é igual a num * (x - 1)
    x -- // num - 1 
  }
  return num // retorna o valor de num pra função pra ela poder imprimir no console.log()
}


console.log(fatorial(4))