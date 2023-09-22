const questions=[
    {
        question:"Which is largest animal in the world",
        answers:[
            {text: "Shark", correct:false},
            {text: "Blue Whale", correct:true},
            {text: "Elephant", correct:false},
            {text: "Girffe", correct:false},
            ]
    },
    {
        question:"2 + 6 = ?",
        answers:[
            {text: "8", correct:true},
            {text: "4", correct:false},
            {text: "12", correct:false},
            {text: "3", correct:false},
            ]
    },
    {
        question:"Which is the smallest continent in the world?",
        answers:[
            {text: "Asia", correct:false},
            {text: "Artic", correct:false},
            {text: "Australia", correct:true},
            {text: "Africa", correct:false},
            ]
    },
];

const questionElement=document.getElementById("question");
const answerButtons=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");

let currentQuestionIndex=0;
let score=0;
function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex+1;
    questionElement.innerHTML=questionNo+"."+currentQuestion.question;

    currentQuestion.answers.forEach(answer=>{
        const button= document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);

    });
}
function resetState(){
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
    }
    startQuiz();