let senhaSecreta = gerarSenha();
let tentativas = [];

function gerarSenha() {
  let digitos = [];
  while (digitos.length < 4) {
    let n = Math.floor(Math.random() * 10);
    if (!digitos.includes(n)) digitos.push(n);
  }
  return digitos.join('');
}

function verificarTentativa() {
  const tentativa = document.getElementById("tentativa").value;
  if (!/^\d{4}$/.test(tentativa) || new Set(tentativa).size !== 4) {
    alert("Digite uma sequência válida de 4 dígitos diferentes.");
    return;
  }

  let bulls = 0,
    cows = 0;
  for (let i = 0; i < 4; i++) {
    if (tentativa[i] === senhaSecreta[i]) {
      bulls++;
    } else if (senhaSecreta.includes(tentativa[i])) {
      cows++;
    }
  }

  tentativas.unshift(`${tentativa} - ${bulls} Bulls, ${cows} Cows`);
  atualizarHistorico();
  document.getElementById("tentativa").value = "";
}

function atualizarHistorico() {
  const lista = document.getElementById("historico");
  lista.innerHTML = "";
  tentativas.forEach((t) => {
    const li = document.createElement("li");
    li.textContent = t;
    lista.appendChild(li);
  });
}

function mostrarSenha() {
  alert("Senha secreta: " + senhaSecreta);
}
