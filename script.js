import BotaoConcluir from './componentes/tarefaConcluida.js';
import BotaoExcluir from './componentes/excluirTarefa.js'


const lista = document.querySelector('[data-lista]');
const botao = document.querySelector('[data-button-adicionar]')
const input = document.querySelector('[data-input]')

botao.addEventListener("click", () => {
    const li = document.createElement("li");
    li.classList.add("item-tarefa")

    const p = document.createElement("p");
    lista.appendChild(li);

    p.innerHTML = input.value;
    li.appendChild(p);

    li.appendChild(BotaoConcluir());
    li.appendChild(BotaoExcluir());

    input.value = "";

})


