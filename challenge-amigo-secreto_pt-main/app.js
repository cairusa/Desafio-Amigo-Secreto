//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let participantes = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    if (nome === "") {
        alert("Digite um nome válido!");
        return;
    }

    if (participantes.includes(nome)) {
        alert("Esse nome já foi adicionado!");
        return;
    }

    participantes.push(nome);
    input.value = "";

    // Atualizar contador (se estiver usando)
    const contador = document.getElementById("contador");
    if (contador) {
        contador.textContent = `Participantes: ${participantes.length}`;
    }

    alert("Nome adicionado anonimamente com sucesso! ✅");
}

function sortearAmigo() {
    if (participantes.length < 2) {
        alert("Adicione pelo menos 2 participantes!");
        return;
    }

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "<li>Sorteando... 🎲</li>";

    setTimeout(() => {
        let sorteados = [...participantes];

        // Embaralhar a lista
        for (let i = sorteados.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [sorteados[i], sorteados[j]] = [sorteados[j], sorteados[i]];
        }

        // Verificar se alguém tirou a si mesmo
        for (let i = 0; i < participantes.length; i++) {
            if (participantes[i] === sorteados[i]) {
                return sortearAmigo(); // Refaz sorteio se necessário
            }
        }

        resultado.innerHTML = "";
        for (let i = 0; i < participantes.length; i++) {
            const li = document.createElement("li");
            li.textContent = `${participantes[i]} tirou ${sorteados[i]}`;
            li.style.opacity = 0;
            resultado.appendChild(li);

            setTimeout(() => {
                li.style.transition = "opacity 1s";
                li.style.opacity = 1;
            }, i * 500);
        }
    }, 1500); // Suspense!
}
