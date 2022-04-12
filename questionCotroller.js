//data Section
const quizData = [
    {
        question: "Which language runs in a web browser?",
        subtitle: "None",
        a: "JavaHypertext Markup LanguageHypertext Markup LanguageHypertext Markup LanguageHypertext Markup Language",
        b: "C",
        c: "Python",
        d: "JavaScript",
    },
    {
        question: "What does CSS stand for?",
        subtitle: "None",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
    },
    {
        question: "What does HTML stand for?",
        subtitle: "None",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
    },
    {
        question: "What year was JavaScript launched?",
        subtitle: "None",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
    },
];



//variable section
let currentQuiz = 0;
const qNum = document.getElementById("qNum");
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const subEl = document.getElementById('subtitle');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('next');
const sub = document.querySelector('#submit').classList;

const answerContentFade = () => document.querySelector("#answerContent").classList.toggle("fadeUp");

const answerHide = () => document.querySelector("#answerContent").classList.add("opacityZero");

const nextButtonShow = () => document.querySelector("#next").classList.toggle("fadeIn");

const showQuestionBg = () => document.querySelector("#querry #bg").classList.toggle("textFadeIn");

const mainPageOnOff = () => document.querySelector("#centered").classList.toggle("fadeOut");

const questionHeader = document.querySelector("#querry").classList;


//function section
const fadeQuestion = () => {
    sub.remove('changeColor');

    answerContentFade();

};

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz]

    questionNum = currentQuiz + 1;
    totalQuestion = quizData.length;
    qNum.innerHTML = "Question " + questionNum + " /" + totalQuestion;
    questionEl.innerText = currentQuizData.question
    subEl.innerText = currentQuizData.subtitle;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function enableBTN() {
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            sub.add('changeColor');
        }
    })


}

function getSelected() {
    let answer;

    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer;
}


function nextQuestion() {
    const answer = getSelected();
    if (answer) {

        currentQuiz++;
        fadeQuestion();

        if (currentQuiz < quizData.length) {
            setTimeout(function () {
                loadQuiz();
                fadeQuestion();
            }, 1000);
        } else {
            currentQuiz = 0;

            answerHide();

            nextButtonShow();

            setTimeout(function () {
                showQuestionBg();
                mainPageOnOff();
                questionHeader.add("fadeO");
            }, 800);

            setTimeout(function () {
                questionHeader.add("fadeWH");
            }, 1500);
        }
    }
}

function questionPage() {
    document.querySelector("#findMajor").addEventListener("click", function () {

        mainPageOnOff();
        questionHeader.toggle("fadeIn");


        setTimeout(function () {
            showQuestionBg();
        }, 1000);

        setTimeout(function () {
            answerContentFade();
            nextButtonShow();
        }, 1700);
    })
}

//initialize section
questionPage();
loadQuiz();
submitBtn.addEventListener('click', nextQuestion);
answerEls.forEach(
    anw => anw.addEventListener('change', enableBTN)
);
