const personagens = document.querySelectorAll('.personagem');

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {
        const personagemSelecionado = document.querySelector('.selecionado')
        personagemSelecionado.classList.remove('selecionado')

        personagem.classList.add('selecionado')
        const idSelecionado = personagem.attributes.id.value;

        if(idSelecionado === 'doutor-doom') return;





        const imagemJogador1 = document.getElementById('personagem-jogador-1');
        imagemJogador1.src =` ./src/imagens/${idSelecionado}.png`;

        const nomejogador1 = document.getElementById('nome-jogador-1');
        const nomeSelecionado = personagem.getAttribute('data-name');
        nomejogador1.innerHTML = nomeSelecionado

    })
})