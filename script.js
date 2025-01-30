
// 1. Selecionando os elementos da página
const inputTarefa = document.getElementById('novaTarefa');
const botaoAdicionar = document.getElementById('adicionar');
const listaTarefas = document.getElementById('listaTarefas');

// 2. Função para adicionar uma nova tarefa
function adicionarTarefa(){
    const tarefaTexto = inputTarefa.ariaValueMax.trim();
    
    if(tarefaTexto !== '') {
        //Criando um novo item de lista
        const itemLista = document.createElement('li');
        itemLista.textContent = tarefaTexto;

        //Criando o botão de excluir
        const botaoExcluir = document.createElement('button');
        botaoExcluir.addEventListener('click', () =>{
            listaTarefas.removeChild(itemLista);
        });

        //adicionado o botão á tarefa
        itemLista.appendChild(botaoExcluir);

        // Adicionando a tarefa à lista
        listaTarefas.appendChild(itemLista);

        // Limpando o campo de input
        inputTarefa.value = '';

    }   
}

// 4. Adicionando os eventos aos elementos
botaoAdicionar.addEventListener('click', adicionarTarefa);
listaTarefas.addEventListener('click', marcarComoFeita);