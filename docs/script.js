function iniciarRelogio() {
    // Atualiza o relógio e a data a cada segundo
    setInterval(() => {
        // Obtém a data e hora atual
        const agora = new Date();

        // Obtém as horas, minutos e segundos
        let horas = agora.getHours();
        let minutos = agora.getMinutes();
        let segundos = agora.getSeconds();

        // Formata horas, minutos e segundos para ter sempre dois dígitos
        horas = horas < 10 ? "0" + horas : horas;
        minutos = minutos < 10 ? "0" + minutos : minutos;
        segundos = segundos < 10 ? "0" + segundos : segundos;

        // --- NOVO: Obtém e formata a data atual ---
        let dia = agora.getDate();
        let mes = agora.getMonth() + 1; // Meses são de 0 a 11, então adicionamos 1
        let ano = agora.getFullYear();

        // Formata dia e mês para ter sempre dois dígitos
        dia = dia < 10 ? "0" + dia : dia;
        mes = mes < 10 ? "0" + mes : mes;

        const dataCompleta = `${dia}/${mes}/${ano}`;
        // --- FIM NOVO ---

        // Exibe a hora atual na página
        document.getElementById("horas").innerHTML = horas;
        document.getElementById("minutos").innerHTML = minutos;
        document.getElementById("segundos").innerHTML = segundos;

        // Exibe a data completa na página (substituindo o antigo "dias")
        // Certifique-se de que você tem um elemento HTML com o ID "dataAtual" (ou o ID que você usava para "dias")
        document.getElementById("dias").innerHTML = dataCompleta; // Ou use o ID original, ex: "dias"

    }, 1000);
}

function trocarImagemPorData(dataAlvo, novaImagemUrl) {
    const hoje = new Date();
    const dataAtualFormatada = `${hoje.getFullYear()}-${(hoje.getMonth() + 1)
        .toString()
        .padStart(2, "0")}-${hoje.getDate().toString().padStart(2, "0")}`;

    if (dataAtualFormatada === dataAlvo) {
        const imagem = document.getElementById("targetImage");
        if (imagem) {
            imagem.src = novaImagemUrl;
        }
    }
}

// Configuração da data e da nova imagem para a função trocarImagemPorData
const dataEspecifica = "2025-05-05"; // Formato: AAAA-MM-DD
const novaImagem = "https://i.gifer.com/2Ly8.gif";

// Inicia o relógio e a exibição da data
iniciarRelogio();

// Chama a função para trocar a imagem
trocarImagemPorData(dataEspecifica, novaImagem);