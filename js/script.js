// variaveis?
// dados de entrada?
//  dados de saida
const replyElement = document.querySelector('#reply')
const question = document.querySelector('#question')
const answers = [
    "não",
    "sim",
    "pode ser que sim",
    "pode ser que não",
    "não conte com isso",
    "conte com isso",
    "certamente!",
    "claramente!",
    "de forma alguma!",
    "de jeito nenhum!",
    "pode ser",
    "talvez",
    "eu não apostaria nisso!",
    "pode apostar que  sim!",
    "acho!",
    "não acho!",
    "não consigo prever isso agora.",
    "não é possível prever isso",
]
const totalAnswers = answers.length
const randomNumber = Math.floor(Math.random() * totalAnswers)
function makeAnswer () {

    if(question.value == ""){
        alert('Digite sua pergunta!')
        return
    }
    // criando div de pergunta
    const pergunta = "<div>" + question.value + "</div>"
    //numero aleatorio
    const totalAnswers = answers.length
    const randomNumber = Math.floor(Math.random() * totalAnswers)
    replyElement.innerHTML = pergunta + answers[randomNumber]

    let timer = setTimeout(()=>{
        replyElement.style.opacity = 0
    }, 3000)
}


