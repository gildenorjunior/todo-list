

const BotaoExcluir = () => {

    const botaoExcluir = document.createElement("button");
    botaoExcluir.innerText = "Excluir";
    botaoExcluir.classList.add("btn", "btn-danger")

    botaoExcluir.addEventListener("click", tarefaExcluida);

    return botaoExcluir;

}

const tarefaExcluida = (evento) => {
    const botaoExcluir = evento.target;
    const excluirTarefa = botaoExcluir.parentElement;
    excluirTarefa.remove(); 
}

export default BotaoExcluir