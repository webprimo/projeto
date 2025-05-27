document.addEventListener('DOMContentLoaded', () => {
    const parteEsquerda = document.getElementById('parteEsquerda');
    // Não precisamos mais da referência direta à linhaMeio para mudar seu texto
    // const linhaMeio = document.getElementById('linhaMeio');
    const parteDireita = document.getElementById('parteDireita');
    const btnTrocarCores = document.getElementById('btnTrocarCores');

    const esquemasDeCores = [
        {
            esquerda: '#3498db', // Azul
            direita: '#e74c3c'  // Vermelho
        },
        {
            esquerda: '#2ecc71', // Verde esmeralda
            direita: '#f1c40f'  // Amarelo
        },
        {
            esquerda: '#9b59b6', // Amethyst
            direita: '#34495e'  // Wet Asphalt
        },
        {
            esquerda: '#e67e22', // Cobre
            direita: '#bdc3c7'  // Prata
        }
    ];

    let esquemaAtualIndex = 0;

    function aplicarEsquemaCores(index) {
        const esquema = esquemasDeCores[index];
        parteEsquerda.style.backgroundColor = esquema.esquerda;
        parteDireita.style.backgroundColor = esquema.direita;
    }

    btnTrocarCores.addEventListener('click', () => {
        esquemaAtualIndex = (esquemaAtualIndex + 1) % esquemasDeCores.length;
        aplicarEsquemaCores(esquemaAtualIndex);
    });

    // Removemos os event listeners de mouseover/mouseout da linhaMeio
    // Pois o botão ocupará esse espaço e o texto "10%" não será mais visível

    console.log("Página carregada e scripts prontos!");
});