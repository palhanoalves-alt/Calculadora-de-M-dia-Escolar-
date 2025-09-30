function calcularMedia() {
  const nome = document.getElementById("nome").value;
  const notas = document.querySelectorAll(".nota");
  let soma = 0;
  let quantidade = 0;

  notas.forEach(nota => {
    const valor = parseFloat(nota.value);
    if (!isNaN(valor)) {
      soma += valor;
      quantidade++;
    }
  });

  if (quantidade === 0) {
    document.getElementById("resultado").innerText = "Insira pelo menos uma nota válida.";
    return;
  }

  const media = soma / quantidade;
  let status = "";

  if (media >= 6) {
    status = "Aprovado ✅";
  } else if (media >= 5) {
    status = "Recuperação ⚠️";
  } else {
    status = "Reprovado ❌";
  }

  document.getElementById("resultado").innerText =
    `${nome} teve média ${media.toFixed(2)} - ${status}`;
}
