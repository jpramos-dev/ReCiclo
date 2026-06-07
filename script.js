// Perguntas e respostas
const questions = [
    {
        question: "O descarte inadequado de plásticos em áreas urbanas afeta a vida aquática principalmente porque",
        options: [
            "O plástico se dissolve rapidamente na água, liberando nutrientes tóxicos.",
            "O lixo pode ser carregado pela chuva para rios e mares, causando ingestão e sufocamento de animais.",
            "A reciclagem do plástico produz substâncias que poluem a água potável.",
            "Plásticos descartados corretamente atraem animais aquáticos para perto das cidades."
        ],
        answer: 1,
        explanation: "O descarte inadequado de plásticos em áreas urbanas permite que o lixo seja levado pela chuva, vento ou enxurradas para bueiros, rios e, finalmente, para o mar. Uma vez na água, animais como peixes e tartarugas podem ingerir esses plásticos (confundindo com alimento) ou ficar presos neles."
    },
    {
        question: "Qual material leva mais tempo para se decompor no oceano?",
        options: [
            "Papel",
            "Vidro",
            "Plástico",
            "Metal"
        ],
        answer: 2,
        explanation: "O plástico pode levar até 450 anos para se decompor no oceano, causando danos significativos à vida marinha."
    },
    {
        question: "As tartarugas-marinhas frequentemente morrem ao ingerir sacolas plásticas jogadas no mar. Isso ocorre porque",
        options: [
            "As sacolas plásticas liberam um veneno que atrai as tartarugas.",
            "As tartarugas confundem as sacolas com águas-vivas, seu alimento natural.",
            "As sacolas se grudam ao casco das tartarugas, impedindo sua locomoção.",
            "O plástico reciclado tem cheiro semelhante ao dos peixes de que as tartarugas se alimentam."
        ],
        answer: 1,
        explanation: "As tartarugas marinhas se alimentam de águas-vivas. Uma sacola plástica flutuando na água se parece muito com uma água-viva aos olhos delas. Ao ingerir a sacola, o plástico bloqueia o sistema digestivo do animal, causando sufocamento."
    },
    {
        question: "Qual é a porcentagem aproximada de oxigênio da Terra produzido pelos oceanos?",
        options: [
            "10% - 20%",
            "30% - 40%",
            "50% - 80% ",
            "70% - 90%"
        ],
        answer: 2,
        explanation: "Os oceanos produzem cerca de 50-80% do oxigênio da Terra através do fitoplâncton e outras plantas marinhas."
    },
    {
        question: "Qual destes itens NÃO deve ser colocado no lixo reciclável?",
        options: [
            "Garrafa PET",
            "Papelão",
            "Lâmpada fluorescente",
            "Lata de alumínio"
        ],
        answer: 2,
        explanation: "Lâmpadas fluorescentes contêm mercúrio e devem ser descartadas em pontos de coleta específicos, não no lixo reciclável comum."
    },
    {
        question: "Qual é o maior inimigo dos oceanos atualmente?",
        options: [
            "Navios de cruzeiro",
            "Poluição por plástico",
            "Pesca esportiva",
            "Aquecimento global"
        ],
        answer: 1,
        explanation: "A poluição por plástico é uma das maiores ameaças aos oceanos, com cerca de 8 milhões de toneladas de plástico entrando nos oceanos anualmente."
    },
    {
        question: "Qual destes materiais é reciclável?",
        options: [
            "Esponja de cozinha",
            "Copo de vidro quebrado",
            "Embalagem de salgadinho",
            "Garrafa de vidro"
        ],
        answer: 3,
        explanation: "Garrafas de vidro são 100% recicláveis e podem ser recicladas infinitamente sem perder qualidade."
    },
    {
        question: "Qual é o tempo médio de decomposição de uma sacola plástica no meio ambiente?",
        options: [
            "2 anos",
            "20 anos",
            "100 anos",
            "450 anos"
        ],
        answer: 2,
        explanation: "Sacolas plásticas podem levar de 100 a 500 anos para se decompor no ambiente, dependendo das condições."
    },
    {
        question: "O que é microplástico?",
        options: [
            "Pequenas partículas de plástico com menos de 5mm",
            "Plástico biodegradável",
            "Plástico reciclado",
            "Plástico de alta densidade"
        ],
        answer: 0,
        explanation: "Microplásticos são pequenas partículas de plástico com menos de 5mm que contaminam oceanos e entram na cadeia alimentar."
    },
    {
        question: "Qual destes é um exemplo de consumo sustentável?",
        options: [
            "Usar sacolas plásticas descartáveis",
            "Comprar produtos com embalagens excessivas",
            "Utilizar ecobags",
            "Descartar eletrônicos no lixo comum"
        ],
        answer: 2,
        explanation: "Utilizar ecobags é um exemplo de consumo sustentável, pois reduz o uso de plásticos descartáveis."
    },
    {
        question: "Qual é a cor do recipiente para coleta seletiva de plástico?",
        options: [
            "Azul",
            "Verde",
            "Amarelo",
            "Vermelho"
        ],
        answer: 3,
        explanation: "No sistema de cores padrão para coleta seletiva, o vermelho é destinado para plásticos."
    },
    {
        question: "O que é a 'Grande Mancha de Lixo do Pacífico'?",
        options: [
            "Uma ilha de lixo flutuante",
            "Um vulcão de lixo",
            "Uma área de reciclagem",
            "Uma usina de tratamento de resíduos"
        ],
        answer: 0,
        explanation: "A Grande Mancha de Lixo do Pacífico é uma enorme concentração de detritos marinhos, principalmente plásticos, no Oceano Pacífico Norte."
    },
    {
        question: "Qual destes materiais é biodegradável?",
        options: [
            "Plástico",
            "Vidro",
            "Metal",
            "Papel"
        ],
        answer: 3,
        explanation: "O papel é biodegradável, embora seu tempo de decomposição varie de acordo com as condições ambientais."
    },
    {
        question: "Qual ação ajuda a reduzir a poluição marinha?",
        options: [
            "Usar produtos de higiene com microesferas de plástico",
            "Descartar óleo de cozinha na pia",
            "Participar de mutirões de limpeza de praias",
            "Comprar roupas sintéticas"
        ],
        answer: 2,
        explanation: "Participar de mutirões de limpeza de praias ajuda a remover resíduos antes que cheguem aos oceanos."
    },
    {
        question: "Estudos científicos mostram que a reciclagem de plásticos reduz a emissão de gases de efeito estufa. Como isso se relaciona indiretamente com a proteção da vida aquática?",
        options: [
            "Menos gases de efeito estufa diminuem a acidez dos oceanos, protegendo corais e moluscos.",
            "A reciclagem libera oxigênio molecular, que se dissolve na água e favorece a respiração dos peixes",
            "A redução de gases de efeito estufa impede diretamente que plásticos cheguem aos rios.",
            "O calor liberado na reciclagem aquece os oceanos, matando bactérias nocivas."
        ],
        answer: 0,
        explanation: "A queima de combustíveis fósseis para produzir plástico virgem libera CO₂, que aumenta o efeito estufa e também se dissolve nos oceanos, causando acidificação. A água mais ácida prejudica organismos que formam conchas e esqueletos de carbonato de cálcio, como corais, moluscos e alguns tipos de plâncton."
    }
];

// Elementos do DOM
const startScreen = document.getElementById('start-screen');
const gameScreen = document.getElementById('game-screen');
const resultScreen = document.getElementById('result-screen');
const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const feedbackElement = document.getElementById('feedback');
const currentQuestionElement = document.getElementById('current-question');
const scoreElement = document.getElementById('score');
const finalScoreElement = document.getElementById('final-score');
const resultMessageElement = document.getElementById('result-message');
const progressBar = document.getElementById('progress-bar');
const scoreCircle = document.getElementById('score-circle');
const nextBtnContainer = document.getElementById('next-btn-container');


let currentQuestion = 0;
let playerScore = 0;
let gameActive = false;
let canAnswer = true;
let nextButton = null;


startBtn.addEventListener('click', startGame);
restartBtn.addEventListener('click', startGame);

function startGame() {
    currentQuestion = 0;
    playerScore = 0;
    gameActive = true;
    canAnswer = true;
    
    startScreen.style.display = 'none';
    gameScreen.style.display = 'block';
    resultScreen.style.display = 'none';
    
    updateScore();
    showQuestion();
}

function showQuestion() {
    if (!gameActive) return;
    
    canAnswer = true;
    

    nextBtnContainer.style.display = 'none';
    feedbackElement.style.display = 'none';
    
    const question = questions[currentQuestion];
    questionText.textContent = question.question;
    currentQuestionElement.textContent = currentQuestion + 1;
    

    const progressPercentage = ((currentQuestion) / questions.length) * 100;
    progressBar.style.width = `${progressPercentage}%`;
    

    optionsContainer.innerHTML = '';
    

    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.classList.add('option');
        optionElement.innerHTML = `
            <div class="option-letter">${String.fromCharCode(65 + index)}</div>
            <div class="option-text">${option}</div>
        `;
        
        optionElement.addEventListener('click', () => checkAnswer(index));
        optionsContainer.appendChild(optionElement);
    });
}

function checkAnswer(selectedIndex) {
    if (!gameActive || !canAnswer) return;
    
    canAnswer = false;
    
    const question = questions[currentQuestion];
    const options = optionsContainer.querySelectorAll('.option');
    

    options.forEach(option => {
        option.style.pointerEvents = 'none';
    });
    
    feedbackElement.style.display = 'block';
    
    if (selectedIndex === question.answer) {
        feedbackElement.textContent = `✓ Correto! ${question.explanation}`;
        feedbackElement.className = 'feedback correct';
        playerScore += 10;
        options[selectedIndex].style.background = '#e6f7ee';
        options[selectedIndex].style.borderColor = '#38b000';
        options[selectedIndex].querySelector('.option-letter').style.background = '#38b000';
    } else {
        feedbackElement.textContent = `✗ Incorreto. ${question.explanation}`;
        feedbackElement.className = 'feedback incorrect';
        options[selectedIndex].style.background = '#fdecea';
        options[selectedIndex].style.borderColor = '#ff6b6b';
        options[selectedIndex].querySelector('.option-letter').style.background = '#ff6b6b';
        options[question.answer].style.background = '#e6f7ee';
        options[question.answer].style.borderColor = '#38b000';
        options[question.answer].querySelector('.option-letter').style.background = '#38b000';
    }
    
    updateScore();
    

    if (currentQuestion + 1 < questions.length) {
        nextBtnContainer.style.display = 'block';
        

        if (nextButton) {
            nextButton.removeEventListener('click', nextQuestion);
        }
        
        nextButton = document.getElementById('next-btn');
        nextButton.innerHTML = '<i class="fas fa-arrow-right"></i> Próxima Pergunta';
        nextButton.addEventListener('click', nextQuestion);
    } else {
        // Se for a última pergunta, mostrar botão para finalizar
        nextBtnContainer.style.display = 'block';
        const nextBtn = document.getElementById('next-btn');
        nextBtn.innerHTML = '<i class="fas fa-trophy"></i> Ver Resultado';
        
        if (nextButton) {
            nextButton.removeEventListener('click', nextQuestion);
        }
        
        nextButton = document.getElementById('next-btn');
        nextButton.addEventListener('click', () => {
            if (currentQuestion + 1 >= questions.length) {
                endGame();
            } else {
                nextQuestion();
            }
        });
    }
}

function nextQuestion() {
    
    nextBtnContainer.style.display = 'none';
    
    currentQuestion++;
    
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        endGame();
    }
}

function updateScore() {
    scoreElement.textContent = playerScore;
}

function endGame() {
    gameActive = false;
    gameScreen.style.display = 'none';
    resultScreen.style.display = 'flex';
    
    const percentage = (playerScore / (questions.length * 10)) * 100;
    finalScoreElement.textContent = playerScore;
    

    scoreCircle.style.setProperty('--percentage', `${percentage}%`);
    
    // Definir mensagem baseada na pontuação
    if (percentage >= 80) {
        resultMessageElement.textContent = 'Parabéns! Você é um expert em sustentabilidade!';
        resultMessageElement.style.color = '#38b000';
    } else if (percentage >= 50) {
        resultMessageElement.textContent = 'Bom trabalho! Continue aprendendo sobre sustentabilidade.';
        resultMessageElement.style.color = '#1a5f7a';
    } else {
        resultMessageElement.textContent = 'Você pode melhorar! Aprenda mais sobre reciclagem e vida na água.';
        resultMessageElement.style.color = '#ff6b6b';
    }
}