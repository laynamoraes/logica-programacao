const parceirosId = [
  "19660156627897, Fernanda Santos",
  "23998058019370, Rafael Souza",
  "92291338611, Maria Silva",
  "55443795656, Maria Souza",
  "77743761456, Ana Costa",
  "47202302326, Maria Ferreira",
  "58017232567, Sofia Costa",
  "16733009491247, Lucas Silva",
  "63351859919, Rafael Souza",
  "84297701780, Carlos Oliveira",
]

const parceirosAgrupados = {
  PF: [],
  PJ: [],
}

parceirosId.forEach((parceiro) => {
  const parceirosDivididos = parceiro.split(",")
  const parceiroIdentificador = parceirosDivididos[0]
  const parceiroNome = parceirosDivididos[1].slice(1)

  if (parceiroIdentificador.length == 11) {
    parceirosAgrupados.PF.push({
      ["parceiroId"]: parceiroIdentificador,
      ["nome"]: parceiroNome,
    })
  } else {
    parceirosAgrupados.PJ.push({
      ["parceiroId"]: parceiroIdentificador,
      ["nome"]: parceiroNome,
    })
  }

  return parceirosAgrupados
})

console.log(parceirosAgrupados)
