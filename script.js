let searchBtn = document.querySelector('#search-btn');
        let searchBar = document.querySelector('.search-bar-container');
        let formBtn = document.querySelector('#login-btn');
        let loginForm = document.querySelector('.login-form-container');
        let formClose =document.querySelector ('#form-close');
        let menu = document.querySelector ('#menu-bar');
        let navbar = document.querySelector('.navbar');
        let videoBtn = document.querySelectorAll('.vid-btn');

window.onscroll = () => {
   searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}
menu.addEventListener('click', () =>{
menu.classList.toggle('fa-times');
navbar.classList.toggle('active');
});

searchBtn.addEventListener('click', () =>{
searchBtn.classList.toggle('fa-times');
searchBar.classList.toggle('active');
});


videoBtn.forEach(btn =>{
btn.addEventListener('click',()=>{
    document.querySelector('.controls .active').classList.remove('active');
    btn.classList.add('active');
    let src = btn.getAttribute('data-src');
    document.querySelector('#video-slider').src= src

});

});

const question = [
    {
    question: "Woodlands are found in parts of the world that have a temperate climate, with?",
    answers:[
        { text:"warm summers but cool winters",correct: true},
        { text:"hot summers and mild winters",correct: false},
        { text:"dry summers and dry winters ",correct: false},
        { text:"rainy summers and mild winters",correct: false},
    ]

   },
   {
    question: "What is a Taiga?",
    answers:[
        { text:"a type of evergreen tree ",correct: false},
        { text:"a type of coniferous forest",correct: true},
        { text:"a type of bird",correct: false},
        { text:" a subpolar barren wilderness, where plant and animal life is scarce , except during the short summer",correct: false},
    ]

   },
   {
    question: "Which is the first and vital stage in the food web of oceans?",
    answers:[
        { text:"phytoplankton",correct: true},
        { text:"zooplankton",correct: false},
        { text:"larvae",correct: false},
        { text:"small fish",correct: false},
    ]

   },
   {
    question: "Antarctic animals are specially adapted to survive the cold, icy conditions and winds  up to?",
    answers:[
        { text:"200 km per hour",correct: true},
        { text:"300 km per hour",correct: false},
        { text:"100 km per hour",correct: false},
        { text:"150 km per hour",correct: false},
    ]

   },
   {
    question: "Which animal cannot be found in the Arctic?",
    answers:[
        { text:"Polar Bear",correct: false},
        { text:"Penguin",correct: true},
        { text:"Seal",correct: false},
        { text:"Salmon",correct: false},
    ]

   },
   {
    question: "Which biom is characterized by cold winds and lack of oxygen?",
    answers:[
        { text:"Oceanside",correct: false},
        { text:"Deserts",correct: false},
        { text:"Antarctica",correct: false},
        { text:"High mountains",correct: true},
    ]

   },
   {
    question: "Ground vegetation is scarce in ?",
    answers:[
        { text:"Decidous forest",correct: false},
        { text:"Rainforest",correct: true},
        { text:"Savanna",correct: false},
        { text:"Pampas",correct: false},
    ]

   },
   {
    question: "Which animal is not a browser?",
    answers:[
        { text:"Rhino",correct: false},
        { text:"Elephant",correct: false},
        { text:"Zebra",correct: true},
        { text:"Giraffe",correct: false},
    ]

   },
   {
    question: "Which plant carries out photosynthesis during cool nights?",
    answers:[
        { text:"Fir-tree",correct: false},
        { text:"Mango tree",correct: false},
        { text:"Cactus",correct: true},
        { text:"Pine tree",correct: false},
    ]

   },
   {
    question: "Which type of fish can be only found in river biom?",
    answers:[
        { text:"Jellyfish",correct: false},
        { text:"Salmon",correct: false},
        { text:"Tuna",correct: false},
        { text:"Trout",correct: true},
    ]

   },
]

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btni");

let currentQuestionIndex = 0;
let score = 0;
function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion = question[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btni");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    })
}
function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }

}
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    } else{
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
}
        button.disabled = true;
       } )
    nextButton.style.display = "block";
    }
    function showScore(){
        resetState();
        questionElement.innerHTML = `You scored ${score} out of ${question.length}!`;
        nextButton.innerHTML="Play Again";
        nextButton.style.display = "block";

    }
    function handleNextButton(){
        currentQuestionIndex++;
        if(currentQuestionIndex < question.length){
            showQuestion();

        } else{
            showScore();
        }

    }

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < question.length){
        handleNextButton();

    } else{
        startQuiz();
    }

} )
startQuiz();

