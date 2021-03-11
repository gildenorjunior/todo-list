

const BotaoConcluir = () => {

    const botaoConcluir = document.createElement("button");
    botaoConcluir.innerText = "Concluir";
    botaoConcluir.classList.add("btn", "btn-success");

    botaoConcluir.addEventListener("click", tarefaConcluida)

    return botaoConcluir;

}

const tarefaConcluida = (evento) => {

        const botaoConcluir = evento.target;
        const tarefaConcluir = botaoConcluir.parentElement;
        tarefaConcluir.classList.toggle("sublinhado");
}

export default BotaoConcluir