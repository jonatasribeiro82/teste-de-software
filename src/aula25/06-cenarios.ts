const cenarios = [
  { nome: "Login com sucesso", automatizar: true },
  { nome: "Verificar cor do botão mudar de tom", automatizar: false },
  { nome: "Adicionar produto ao carrinho", automatizar: true },
  { nome: "Testar usabilidade da tela no sol", automatizar: false }
];

let quantidadeAutomatizaveis = 0;

for (let i = 0; i < cenarios.length; i++) {
  if (cenarios[i].automatizar === true) {
    console.log(`[AUTOMATIZAR] O cenário '${cenarios[i].nome}' é repetitivo e crítico.`);
    quantidadeAutomatizaveis++;
  } else {
    console.log(`[MANUAL] O cenário '${cenarios[i].nome}' exige avaliação humana ou visual.`);
  }
}

console.log(`\nResumo: Temos um total de ${quantidadeAutomatizaveis} cenários automatizáveis.`);