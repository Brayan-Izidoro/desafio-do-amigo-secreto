let listaDeNomesQueSeraSorteado = [];
let sorteioRealizado = false;

function adicionarAmigo() {
    if (sorteioRealizado) {
        alert("Não é possível adicionar novos nomes após o sorteio. Atualize a página para começar novamente.");
        return;
    }

    const nome = document.getElementById("amigo").value.trim();
    if (!nome) {
        alert("Por favor, insira um nome.");
        return;
    }
    // Verifica se o nome já está na lista (caso já tenha sido inserido)
    if (listaDeNomesQueSeraSorteado.includes(nome)) {
        alert("Este nome já foi adicionado. Adicione um sobrenome para diferenciá-lo ou insira um novo nome.");
    } else {
        listaDeNomesQueSeraSorteado.push(nome);
        atualizarListaDeAmigos();
        limparCampo();
    }
}

function atualizarListaDeAmigos() {
    const listaDeSorteio = document.getElementById("listaAmigos");
    listaDeSorteio.innerHTML = "";

    listaDeNomesQueSeraSorteado.forEach(nome => {
        const nomeDosAmigos = document.createElement("li");
        nomeDosAmigos.textContent = nome;
        listaDeSorteio.appendChild(nomeDosAmigos);
    });
}

function sortearAmigo() {
    if (sorteioRealizado) {
        alert("O sorteio já foi realizado. Atualize a página para realizar um novo sorteio.");
    } else if (listaDeNomesQueSeraSorteado.length === 0) {
        alert("A lista de nomes para o sorteio está vazia!");
    } else if (listaDeNomesQueSeraSorteado.length === 1) {
        alert("Adicione mais de um nome para realizar o sorteio.");
    } else {
        const indiceSorteado = Math.floor(Math.random() * listaDeNomesQueSeraSorteado.length);
        const amigoSorteado = listaDeNomesQueSeraSorteado[indiceSorteado];

        // Limpa a lista exibida
        document.getElementById("listaAmigos").innerHTML = "";

        // Exibe o resultado
        const resultado = document.getElementById("resultado");
        resultado.innerHTML = `<li>O amigo secreto sorteado foi: ${amigoSorteado}</li>`;

        // Define que o sorteio foi realizado
        sorteioRealizado = true;
    }
}

function limparCampo() {
    document.getElementById("amigo").value = "";
}
