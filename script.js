const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')


startButton.addEventListener('click', startQuiz)


function startQuiz() {
    console.log('Started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0 
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
    
}

function resetState() {
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }

}

function selectAnswer() 
{


}

const questions = [
    {
        question: 'Welches Sternzeichen bist du?',
        answers: [
            {text: '0', correct: true },
            {text: '1', correct: true },
            {text: '2', correct: true },
            {text: '3', correct: true },
            {text: '4', correct: true },
            {text: '5', correct: true },
            {text: '6', correct: true },
            {text: '7', correct: true },
            {text: '8', correct: true },
            {text: '9', correct: true },
            {text: '10', correct: true },
            {text: '11', correct: true }
        ]
    }
]