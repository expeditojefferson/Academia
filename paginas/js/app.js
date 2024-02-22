/* Essa parte do script é para automatizar a parte do 'Treino de Hoje'. Dependendo do dia da semana o card terar um conteudo diferente. */

let dataDaSemana = new Date().getDay();
let diasDaSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado'];

let hoje = diasDaSemana[dataDaSemana];

let ElementCard = document.querySelector('.card-container')

let elementH3 = document.querySelector('#nome-treino')

let elementP = document.querySelector('#frase')

let cardImg = ''
let nomeTreino = ''
let frase = ''

switch(hoje)
{
    case 'Domingo':
        break;
    case 'Segunda':
        cardImg = "url('../assets/SiteAcademia/treino-de-peito.jpg')"
        nomeTreino = 'Peito'
        frase = 'Para todas as partes do corpo 💪'
        break;
    case 'Terça':
        cardImg = "url('../assets/SiteAcademia/treino-de-costas.jpg')"
        nomeTreino = 'Dorsal'
        frase = 'Para todas as partes do corpo 💪'
        break;
    case 'Quarta':
        cardImg = "url('../assets/SiteAcademia/treino-de-coxa.jpg')"
        nomeTreino = 'Pernas'
        frase = 'Para todas as partes do corpo 💪'
        break;
    case 'Quinta':
        cardImg = "url('../assets/SiteAcademia/treino-de-deltoides.jpg')"
        nomeTreino = 'Deltoides e Panturrilhas'
        frase = 'Foco nos seus inferiores 💪'
        break;
    case 'Sexta':
        cardImg = "url('../assets/SiteAcademia/treino-de-braço.jpg')"
        nomeTreino = 'Braço Completo'
        frase = 'Para todas as partes do corpo 💪'
        break;
    case 'Sabado':
        break;
}
// Conteudo do Card
ElementCard.style.backgroundImage = `${cardImg}`
elementH3.innerHTML = nomeTreino
elementP.innerHTML = frase

/* Fim */