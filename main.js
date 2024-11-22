let originalContent;

document.addEventListener('DOMContentLoaded', () => {
    // Armazena o conteúdo inicial da página após o DOM ser carregado
    originalContent = document.body.innerHTML;
});

function openCard(cardId) {
    // Certifique-se de que originalContent já foi inicializado
    if (!originalContent) {
        console.error('Erro: originalContent não foi inicializado.');
        return;
    }

    // Seleciona o card clicado pelo ID
    const selectedCard = document.getElementById(cardId);

    if (!selectedCard) {
        console.error(`Erro: Não foi possível encontrar o card com o ID ${cardId}`);
        return;
    }

    // Limpa o conteúdo do body
    document.body.innerHTML = '';

    // Adiciona o card selecionado ao body
    document.body.appendChild(selectedCard)
    

    // Cria e adiciona um botão de retorno
    const backButton = document.createElement('button');
    const imgVoltar = document.createElement('img')
    imgVoltar.src = 'https://cdn-icons-png.flaticon.com/512/93/93634.png'
    backButton.className = 'returnButton'
    backButton.appendChild(imgVoltar)
    backButton.onclick = returnToMainPage;
  

    const button_info = document.getElementById('more-info')
    button_info.parentNode.removeChild(button_info);

    const divTextPlant = document.createElement('div');
    selectedCard.appendChild(divTextPlant)
    divTextPlant.className = 'textPlant'

    if(cardId == '1'){
        divTextPlant.textContent = 'Lorem ipsum odor amet, consectetuer adipiscing elit. Ad rutrum faucibus at sem sem porta dictum. Ultricies nulla velit gravida; nostra ridiculus nibh nec? Platea metus nunc amet platea magnis interdum vulputate tellus. Dolor vitae orci proin nam sapien pellentesque enim sociosqu. Id netus nisi cubilia volutpat sagittis ut dictumst placerat purus. Odio interdum vulputate ut vehicula neque ac ipsum. Arcu class dui ornare augue fusce semper.'
    }
    else if(cardId == '2'){
        divTextPlant.textContent = 'teste'
    }

    selectedCard.appendChild(backButton)
    

    selectedCard.className = 'big-card'

    const buttonVoltar = selectedCard.querySelector(':first-child');

    selectedCard.insertBefore(backButton,buttonVoltar)

    const bigHR = selectedCard.children[1]; 
    bigHR.className = 'big-img-div'

    // hr divisão foto e texto

    const divText = selectedCard.children[2]; 
    divText.className = 'big-hr'



    const principalInfo = selectedCard.children[3]
    const title = principalInfo.children[0]

    selectedCard.insertBefore(title,divText)

    //hr divisão principal info e texto
    const newHR = document.createElement('hr')
    newHR.class = 'big-hr2'
    selectedCard.insertBefore(newHR,divTextPlant)

    
    
    
}

function returnToMainPage() {
    // Certifique-se de que originalContent foi inicializado
    if (!originalContent) {
        console.error('Erro: originalContent não foi inicializado.');
        return;
    }

    // Restaura o conteúdo original da página
    document.body.innerHTML = originalContent;
}
