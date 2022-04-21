//data Section
const quizData = [
    {
        question: "What place do you prefer to be at most to complete your future assignments ?",
        subtitle: "Place where you like most to do your assignments or homeworks",
        answer: [
            "Library",
            "Office",
            "Classes",
            "Coffee Shop",
            "Your own room",
            "Public Park",
        ],
    },
    {
        question: "What is your most favorite activity ?",
        subtitle: "Your daily activity",
        answer: [
        "Reading books, articles, newspapers",
        "Writing",
        "Traveling around",
        "Watching videos, drama, movies",
    ],
    },
    {
        question: "What skill do you think you are best at ?",
        subtitle: "Especially at high school",
        answer: [
        "Communication",
        "Being attentive",
        "Quick Learning",
        "Memorizing",
        "Analyzing",
        "Problem-solving",
    ],
    },
    {
        question: "What skill do you think is your weakness",
        subtitle: "",
        answer: [
            "Communication",
            "Being attentive",
            "Quick Learning",
            "Memorizing",
            "Analyzing",
            "Problem-solving",
        ],
    },
    {
        question: "Which type of person would you like to communicate with ?",
        subtitle: "you can choose your friends",
        answer: [
        "Talkative",
        "Serious",
        "Understandable",
        "Energetic",
        "Funny",
        "no one",
    ],
    },
    {
        question: "Which of the following points is the best to describe yourself as a person?",
        subtitle: "Be honest",
        answer: [
        "Active",
        "Shy",
        "Creative",
        "Adventurous",
        "Diligent",
        "Considerate",
    ],
    },
    {
        question: "Which of the following things would you like to see most of your country improve in the future ?",
        subtitle: "Think a bit about it",
        answer: [
        "Your country with a higher rate of nonviolent",
        "Your country with better and cleaner environment",
        "Your country with an improvement of quality in technology",
        "Your country with a stable economy",
        "Your country with a better connection with your neighbors",
        "Your country with a more accurate of information in publishment",
        
    ],
    },
    {
        question: "Which of the following points that your friends and family would describe most about you?",
        subtitle: "Anyone who used to describe about you",
        answer: [
            "Stubborn person",
            "Risk taker",
            "Open-mind person",
            "Generous person",
            "Flexible person",
            "Heart-kindness person",
    ],
    },
    {
        question: "Which of the following points that you think you have the most understanding in?",
        subtitle: "Most likely things you used to learn in High School",
        answer: [
            "Global Warming",
            "Profit and loss",
            "Globalization",
            "Free speech",
            "Data gathering",
            "Debating",
            
    ],
    },
    {
        question: "Which of the following types of movies would you like to watch the most?",
        subtitle: "",
        answer: [
            "Adventure", 
            "Investment",
            "Sci-fi",
            "Historical",
            "Legal drama",
            "Documentary", 
    ],
    },
    {
        question: "Which of the following activities would you like to try the most in the future?",
        subtitle: "the new activity one you can think of",
        answer: [
            "Making new friends",
            "Helping a community",
            "Investing in Stocks",
            "Joining a debate",
            "Learning about privacy security",
            "Assuring the information",
    ],
    },
    {
        question: "Which of the following youtube videos would you like to spend most of your time on watching?",
        subtitle: "It can be videos from every social media like Facebook",
        answer: [
            "Wildlife documentaries",   
            "History documentaries",
            "Traveling videos",
            "News reporting",
            "World Modern trending", 
            "Music videos",
    ],
    },
    {
        question: "Which of the following goodwills would you want to be involved in the most?",
        subtitle: "",
        answer: [
            "Helping people in the rural community",
            "Helping people to be accessible in information",
            "Helping people to have the right",
            "Helping people to decide a better future",
    ],
    },
    {
        question: "Which of the following concerns would you most like to change as a student?",
        subtitle: "",
        answer: [
            "People’s equal rights",
            "Future environment", 
            "Global warming",
            "The widespread of wrong information",
    ],
    },
    {
        question: "Which of the following experiences did you have in high school?",
        subtitle: "",
        answer: [
            "Making money",
            "Created somethings out of materials",
            "Getting to know more friends",
            "Going on a trip with friends",
            "All of the above",
            "None of the above",
    ],
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
