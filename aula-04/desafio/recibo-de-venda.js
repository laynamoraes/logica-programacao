const reciboDeVenda =
  "régua/valor3=cupom0;lápis/valor0.5=cupom0;mochila/valor50=cupom10;estojo/valor8=cupom0;cola/valor4=cupom0;cola/valor4=cupom0;mochila/valor50=cupom10;lápis/valor0.5=cupom0;cola/valor4=cupom0;lápis/valor0.5=cupom0;mochila/valor50=cupom10;tesoura/valor5=cupom0;caneta/valor1=cupom0;cola/valor4=cupom0;estojo/valor8=cupom0;borracha/valor2=cupom0;caderno/valor15=cupom5;lápis/valor0.5=cupom0;lápis/valor0.5=cupom0;tesoura/valor5=cupom0;"

const vendasSeparadas = reciboDeVenda.split(";")

const vendasFiltradas = vendasSeparadas.filter((venda) => venda != "")

const listaDaVenda = []

vendasFiltradas.forEach((venda) => {
  const produto = venda.split("/")[0]
  const valor = venda.split("valor")[1].split("=")[0]
  const cupom = venda.split("cupom")[1]
  let quantidade = 1

  listaDaVenda.push({
    ["produto"]: produto.charAt(0).toUpperCase() + produto.slice(1),
    ["valor"]: valor,
    ["cupom"]: cupom + "%",
    ["quantidade"]: quantidade,
  })
})

// console.log(vendasSeparadas)
