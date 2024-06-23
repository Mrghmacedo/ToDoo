const button = document.querySelector('.button-add-task')
const input = document.querySelector('.ïnput-task')
const listaCompleta = document.querySelector('.list-tasks')
let minhaLista = []


function adicionarTarefa() {
    minhaLista.push({ 
        tarefa: input.value,
        concluida: false
    })

    input.value = ''

    mostrarTarefas()

}

function mostrarTarefas() {
    let novaLi = ''

    minhaLista.forEach((item, posicao) => {
        novaLi = novaLi + `
        
        <li class="task ${item.concluida && "done"}">
        <img src="./img/check.png" alt="check-na-tarefa" onclick="concluirTarefa(${posicao})">
        <p>${item.tarefa}</p>
        <img src="./img/lixo.png" alt="exclua-a-tarefa" onclick="deletarItem(${posicao})">  

</li>

`                   

    })

    listaCompleta.innerHTML = novaLi

    //Guardar na memoria do P                           C

    localStorage.setItem('lista', JSON.stringify(minhaLista))                       

}       

function deletarItem(posicao){
    minhaLista.splice(posicao, 1)
    
    mostrarTarefas()

}

function concluirTarefa(posicao){
    minhaLista[posicao].concluida = !minhaLista[posicao].concluida 

    mostrarTarefas()
}

function recarregarTarefas(){

    const tarefaslocalStorage = localStorage.getItem('lista')

    if(tarefaslocalStorage){
    minhaLista = JSON.parse(tarefaslocalStorage)
    }
    mostrarTarefas()

}


recarregarTarefas()

button.addEventListener('click', adicionarTarefa)