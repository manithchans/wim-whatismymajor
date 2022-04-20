//data Section
const quizData = [
    {
        question: "Which language runs in a web browser?",
        subtitle: "Hello world",
        answer: [
            "Java",
            "C",
            "Python",
            "JavaScript",
            "JavaScript",
            "JavaScript",
        ],
    },
    {
        question: "What does CSS stand for?",
        subtitle: "",
        answer: [
        "Central Style Sheets",
        "Cascading Style Sheets",
        "Cascading Simple Sheets",
        "Cars SUVs Sailboats",],
    },
    {
        question: "What does HTML stand for?",
        subtitle: "",
        answer: [
        "Hypertext Markup Language",
        "Hypertext Markdown Language",
        "Hyperloop Machine Language",
        "Helicopters Terminals Motorboats Lamborginis",],
    },
    {
        question: "What year was JavaScript launched?",
        subtitle: "",
        answer: [
        "1996",
        "1995",
        "1994",
        "none of the above",],
    },
];



//variable section
let currentQuiz = 0;
const qNum = document.getElementById("qNum");
const questionEl = document.getElementById('question');
const subEl = document.getElementById('subtitle');
const submitBtn = document.getElementById('submit');
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
    var node= document.getElementById("answerGroup");node.querySelectorAll('*').forEach(n => n.remove());
   
    const currentQuizData = quizData[currentQuiz];

    questionNum = currentQuiz + 1;
    totalQuestion = quizData.length;
    qNum.innerHTML = "Question " + questionNum + " /" + totalQuestion;
    questionEl.innerText = currentQuizData.question
    subEl.innerText = currentQuizData.subtitle;
    let answerOption = currentQuizData.answer;

    for (var i = 0; i < answerOption.length; i++) {
        let input = document.createElement("input");
        let label = document.createElement("label");

        input.type = "radio";
        input.name = "answer";
        input.id = `${currentQuiz}.${i}`;
        input.className = "answer";
        
        label.htmlFor = `${currentQuiz}.${i}`;
        label.innerText = answerOption[i];
        label.style = answerOption.length == 4 ? "flex: 2 0 30%" : "";
        document.querySelector("#answerGroup").append(input, label);
    }
    

    const answerEls = document.querySelectorAll('.answer');
    answerEls.forEach(
        anw => anw.addEventListener('click', enableBTN)
    );



    // a_text.innerText = currentQuizData.a;
    // b_text.innerText = currentQuizData.b;
    // c_text.innerText = currentQuizData.c;
    // d_text.innerText = currentQuizData.d;
}

function deselectAnswers(answerEls) {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function enableBTN() {
    const answerEls = document.querySelectorAll('.answer');
    getSelected(answerEls);
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            sub.add('changeColor');
        }
    })


}

function getSelected(answerEls) {
    let answer;

    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
            console.log(answer);
        }
    })

    return answer;
}


function nextQuestion() {
    const answerEls = document.querySelectorAll('.answer');
    const answer = getSelected(answerEls);
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
// document.getElementsByTagName("label").addEventListener("click", enableBTN);
// console.log(answerEls);
// answerEls.forEach(
//     anw => anw.addEventListener('click', enableBTN)
// );
