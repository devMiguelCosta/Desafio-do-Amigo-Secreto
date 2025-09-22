// Variáveis que guardam lista de amigos e os elementos da página
var listaAmigos = [];
var listaAmigosElement = document.getElementById("listaAmigos");
var resultadoElement = document.getElementById("resultado");

// Função para adicionar um novo amigo
function adicionarAmigo() {
    var input = document.getElementById("amigo");
    var nome = input.value; // Pega o valor do input 

    //  Verifica se o input está vazio
    if (nome == "") {
        alert("Digite um nome válido!");
        return; // Sai da função
    }

    // 2. Verifica se o nome já existe na lista (usando um laço 'for')
    var nomeJaExiste = false;
    for (var i = 0; i < listaAmigos.length; i++) {
        if (listaAmigos[i] == nome) {
            nomeJaExiste = true;
            break; // Para o laço se já encontrou o nome
        }
    }

    if (nomeJaExiste) {
        alert("Esse nome já foi adicionado!");
        input.value = "";
        return; // Sai da função
    }

    // 3. Adiciona o nome na lista e atualiza a tela
    listaAmigos.push(nome);
    atualizarLista();

    // Limpa o campo de texto para o próximo nome
    input.value = "";
    input.focus();
}

// Função para mostrar a lista de amigos na tela
function atualizarLista() {
    // Limpa a lista da tela antes de adicionar os nomes de novo
    listaAmigosElement.innerHTML = "";

    // Usa um laço 'for' para percorrer cada item da lista de amigos
    for (var i = 0; i < listaAmigos.length; i++) {
        var nomeAtual = listaAmigos[i];

        // Cria um novo elemento de lista <li>
        var li = document.createElement("li");
        li.textContent = nomeAtual;

        // Adiciona o <li> na lista <ul> da página
        listaAmigosElement.appendChild(li);
    }
}

// Função para realizar o sorteio
function sortearAmigo() {
    if (listaAmigos.length < 2) {
        alert("Adicione pelo menos 2 amigos para sortear.");
        return;
    }

    // Gera um número aleatório baseado no tamanho da lista
    var indiceSorteado = Math.floor(Math.random() * listaAmigos.length);

    // Pega o nome sorteado e o remove da lista
    var nomeSorteado = listaAmigos.splice(indiceSorteado, 1);

    // Mostra o resultado na tela usando concatenação de strings com '+'
    resultadoElement.innerHTML = "<li>O amigo secreto sorteado é: <strong>" + nomeSorteado + "</strong></li>";

    // Atualiza a lista na tela (agora com um amigo a menos)
    atualizarLista();
}

// Função para limpar tudo
function limparLista() {
    // Simplesmente redefine a lista como um array vazio
    listaAmigos = [];

    // Limpa os elementos visuais da tela
    atualizarLista();
    resultadoElement.innerHTML = "";
}

// Adiciona um "ouvinte de evento" para a tecla pressionada no campo de texto
document.getElementById("amigo").addEventListener("keydown", function (event) {
    // Verifica se a tecla pressionada foi o "Enter" (código 13)
    if (event.keyCode === 13) {
        event.preventDefault(); // Evita que o formulário seja enviado
        adicionarAmigo();
    }
});