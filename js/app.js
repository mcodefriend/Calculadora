let butoes = document.querySelector(".botoes"),
  botao = butoes.querySelectorAll("li");
let valorDo = document.querySelector("input.texto");

botao.forEach((botao) => {
  botao.addEventListener("click", (e) => {
    let valor = e.target.innerText;
    if (e.target.className === "nr" || e.target.className === "sinais") {
      console.log(valor);
      //   console.log(e.target.className);
      valorDo.value += valor;
      //   console.log("testado");
    }
    if (valor === "c") {
      valorDo.value = "";
    }
    if (valor === "=") {
      calcular();
    }
  });
});

function calcular() {
  let resultados = valorDo.value;
}
