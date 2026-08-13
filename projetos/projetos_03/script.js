const frases = [
    "Acredite em você, mesmo quando ninguém mais acreditar.",
    "Cada dia é uma nova chance para recomeçar.",
    "Não desista só porque está difícil.",
    "Pequenos passos também levam a grandes conquistas.",
    "Você é capaz de muito mais do que imagina.",
    "Erros fazem parte do caminho para o sucesso.",
    "Continue tentando, mesmo quando parecer impossível.",
    "Seu esforço de hoje constrói seu futuro.",
    "Tenha paciência com seu próprio processo.",
    "Nunca pare de lutar pelos seus sonhos."
];

const fraseTexto = document.querySelector(".frase");
const btnFrase = document.querySelector(".btnFrase");

function mostrarFrase() {
    let indice = Math.floor(Math.random() * frases.length);
  fraseTexto.textContent = frases[indice];
}

btnFrase.addEventListener("click", function(){
    mostrarFrase();
});
