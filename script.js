
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
        
    }
}