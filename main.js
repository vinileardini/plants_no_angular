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
    

    //Altera classe das principais info no página principal da planta

    const bigInfo = document.getElementById('info')
    bigInfo.className = 'big-info'

    const button_info = document.getElementById('more-info')
    button_info.parentNode.removeChild(button_info);

    // Cria a div para o texto mais detalhado sobre a planta

    const divTextPlant = document.createElement('div');
    selectedCard.appendChild(divTextPlant)
    divTextPlant.className = 'textPlant'

    if(cardId == '1'){
        divTextPlant.textContent = 'Pode ser plantada em áreas pequenas. Deve ter boa drenagem de água e bastante matéria orgânica. Necessita de pelo menos 6-8 horas de luz solar por dia. Deve ser regada regularmente. Os frutos podem ser colhidos entre 90 a 100 dias.'
    }
    else if(cardId == '2'){
        divTextPlant.textContent = 'Prefere solos bem drenados e ricos em matéria orgânica. Necessita de pelo menos 6-8 horas de luz solar direta por dia. Deve ser regada regularmente. Os frutos podem ser colhidos quando atingem a coloração vermelha, entre 80 a 100 dias.'
    }
    else if(cardId == '3'){
        divTextPlant.textContent = 'Prefere solos bem drenados e ricos em matéria orgânica. Necessita de pelo menos 6 horas de luz solar por dia. Deve ser regado regularmente. É uma planta resistente ao frio, mas não tolera geadas severas. As folhas podem ser colhidas a partir de 60 a 90 dias após o plantio. O ideal é colher antes da floração para obter um sabor mais intenso.'
    }
    else if(cardId == '4'){
        divTextPlant.textContent = 'Prefere solos bem drenados e ricos em matéria orgânica. Necessita de pelo menos 6 horas de luz solar por dia. Deve ser regado regularmente, mas sem encharcar. As mudas devem ser transplantadas quando atingirem cerca de 10 cm de altura, com 4 a 6 folhas definitivas. As folhas podem ser colhidas a partir de 60 a 90 dias após o plantio. '
    }
    else if(cardId == '5'){
        divTextPlant.textContent = 'Prefere solo areno-argiloso, rico em matéria orgânica, bem drenado e fértil. Necessita de pelo menos 4 a 6 horas de luz solar por dia. Deve ser regada regularmente, mantendo o solo úmido. As mudas devem ser transplantadas quando atingirem cerca de 10 cm de altura, com 4 a 6 folhas definitivas. As folhas podem ser colhidas a partir de 60 a 90 dias após o plantio'
    }
    else if(cardId == '6'){
        divTextPlant.textContent = 'Prefere solos bem drenados e ricos em matéria orgânica. Necessita de pelo menos 4 a 6 horas de luz solar por dia. Deve ser regado regularmente, sem encharcar. As folhas podem ser colhidas a partir de 40 a 60 dias após o plantio. O ideal é colher as folhas externas primeiro para permitir que a planta continue crescendo'
    }
    else if(cardId == '7'){
        divTextPlant.textContent = 'Prefere solos que sejam bem drenados e tenham uma boa quantidade de matéria orgânica. Necessita de pelo menos 4 a 6 horas de luz solar direta por dia. Deve ser regada regularmente, mantendo o solo úmido. As folhas podem ser colhidas a partir de 40 a 60 dias após o plantio. O ideal é colher as folhas externas primeiro'
    }
    else if(cardId == '8'){
        divTextPlant.textContent = 'Prefere solos bem drenados e ricos em matéria orgânica. Necessita de pelo menos 6 horas de luz solar direta por dia. Deve ser regado regularmente, mas sem encharcar o solo. As folhas podem ser colhidas a partir de 60 a 90 dias após o plantio. O ideal é colher antes da floração para obter um sabor mais intenso'
    }
    else if(cardId == '9'){
        divTextPlant.textContent = 'Prefere solos bem drenados e ricos em matéria orgânica. Necessita de pelo menos 6 horas de luz solar direta por dia. Deve ser regada regularmente.  As folhas podem ser colhidas a partir de 60 a 90 dias após o plantio'
    }
    else if(cardId == '10'){
        divTextPlant.textContent = 'Prefere solos que drenem bem e sejam ricos em matéria orgânica. Requer pelo menos 6 horas de luz solar direta diariamente. A rega deve ser feita com regularidade, mantendo o solo levemente úmido. As folhas podem ser colhidas entre 60 a 90 dias após o plantio'
    }
    else if(cardId == '11'){
        divTextPlant.textContent = 'Prefere solos bem drenados, ricos em matéria orgânica. O cultivo pode ser feito tanto por sementes quanto por mudas, e necessita de cuidados com a irrigação e a poda. Ela floresce no final da primavera e o fruto amadurece no verão'
    }
    else if(cardId == '12'){
        divTextPlant.textContent = 'Cresce bem em solos férteis, profundos e bem drenados, com boa exposição solar. É resistente à seca, mas a irrigação regular é recomendada para um bom desenvolvimento. A palmeira também pode ser cultivada como enfeite e para a produção de frutos'
    }
    else if(cardId == '13'){
        divTextPlant.textContent = 'Pode ser cultivada em solos bem drenados, com boa luminosidade. Tolerante a climas tropicais e subtropicais, sendo frequentemente utilizada para cercas vivas e paisagismo. A Clusia requer irrigação moderada e é adaptada tanto para cultivo em áreas abertas quanto em ambientes mais sombreados'
    }
    else if(cardId == '14'){
        divTextPlant.textContent = 'Prefere clima tropical e subtropical, solos bem drenados/ férteis e gosta de sol. Seu crescimento é lento, é tolerante a seca apenas na sua fase adulta e seu florescimento é entre junho e setembro'
    }
    else if(cardId == '15'){
        divTextPlant.textContent = 'Se adapta em climas tropicais, subtropicais e semiáridos. Seu solo é argiloso ou arenoso e o sol é fundamental para seu desenvolvimento. Sua floração é entre julho/setembro e suas flores amarelas são marcantes e caem antes da floração'
    }
    else if(cardId == '16'){
        divTextPlant.textContent = 'Prefere clima quente e úmido, é bom seu solo ser rico em matéria orgânica e bem drenada com alta umidade. Tolera sombra parcial, mas se adapta bem ao sol, pleno. Seu crescimento é lento e seu cultivo sustentável é recomendado para evitar a extinção'
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
