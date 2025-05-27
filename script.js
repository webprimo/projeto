document.addEventListener('DOMContentLoaded', () => {
    const parteEsquerda = document.getElementById('parteEsquerda');
    const parteDireita = document.getElementById('parteDireita');
    const btnTrocarCores = document.getElementById('btnTrocarCores');
    const hexCodeEsquerda = document.getElementById('hexCodeEsquerda');
    const hexCodeDireita = document.getElementById('hexCodeDireita');

    // Função para gerar uma cor hexadecimal aleatória
    function randomColor() {
        let letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Função que aplica as cores aleatórias e atualiza os textos HEX
    function aplicarCoresAleatorias() {
        const corEsquerda = randomColor();
        const corDireita = randomColor();

        parteEsquerda.style.backgroundColor = corEsquerda;
        parteDireita.style.backgroundColor = corDireita;
        hexCodeEsquerda.innerHTML = corEsquerda;
        hexCodeDireita.innerHTML = corDireita;
    }

    // Adiciona o evento de clique ao botão
    // A função aplicarCoresAleatorias() só será chamada quando o botão for clicado.
    btnTrocarCores.addEventListener('click', () => {
        aplicarCoresAleatorias();
    });

    // Opcional: Chama a função uma vez ao carregar a página para definir as cores iniciais
    aplicarCoresAleatorias();

    console.log("Página carregada e scripts prontos!");
});