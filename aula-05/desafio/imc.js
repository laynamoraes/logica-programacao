let peso = prompt("Informe seu peso (em kg)")
let altura = prompt("Informe sua altura (em metros)")

const imc = (Number(peso) / (Number(altura) * Number(altura))).toFixed(2)

if(imc < 18.5) {
  alert("Você está abaixo do peso!")
} else if(imc >= 18.5 && imc < 24.9) {
  alert("Seu peso está normal!")
} else if(imc >= 24.9 && imc < 29.9) {
  alert(" Atenção: você está com sobrepeso!")
} else if(imc >= 30) {
  alert(" Atenção: você está com obesidade!")
} else {
  alert('Não foi possível determinar o IMC. Tente novamente!')
}

console.log(peso)
console.log(altura)
console.log(imc)
