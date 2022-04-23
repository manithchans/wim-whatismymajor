//data Section
const quizData = [
    {
        question: "What place do you prefer to be at most to complete your assignments?",
        subtitle: "Place where enjoy doing your homeworks or review the lesson.",
        answer: [
            "Library",
            "Office",
            "Classes",
            "Coffee Shop",
            "Your Room",
            "Public Park",
        ],
    },
    {
        question: "Which are your most enjoyable activity?",
        subtitle: "Your daily hobbies that you always do.",
        answer: [
            "Reading books, articles, newspapers",
            "Writing, Listening to Music/Podcast",
            "Traveling, Shopping, Camping",
            "Watching Videos, Dramas, Movies",
        ],
    },
    {
        question: "What skill do you think you are best at?",
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
        question: "What skill do you think is your weakness?",
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
        question: "Which type of person would you like to communicate with?",
        subtitle: "You can think of your friend or family personality to answer this question.",
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
        question: "Which of the following is best describe yourself as a person?",
        subtitle: "What do you see yourselves? Look at the mirror!",
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
        question: "Which of the following would you want to improve your country in the future?",
        subtitle: "You can take times to think of this question",
        answer: [
            "A higher rate of nonviolent",
            "Better and cleaner environment",
            "Improvement of quality in technology",
            "Sstable economy",
            "Better connection with your neighbors",
            "More accurate of information in publishment",

        ],
    },
    {
        question: "Which of the following that your friends and family would describe most about you?",
        subtitle: "Somebody who used to describe about you, or what personality that public potray you.",
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
        question: "Which of the following that you think you have the most understanding in?",
        subtitle: "Most likely the things you used to learn from high school",
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
        subtitle: "The new activity one you can think of you are going to do.",
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
        subtitle: "It can be videos from every social media like Facebook, Instagram or TikTok",
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
        question: "Which of the following subjects are you good at during high school?",
        subtitle: "",
        answer: [
            "Mathematic, Physic, Chemistry",
            "Literature, History, Geograpghy",
            "Science, Biology, Earthology",
            "Social Studies, Art, Ethics",
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
            "Studying, Group Discussing, Tutoring",
            "All of the above",
        ],
    },
];

const point = {
    "1.1": [10, 20, 10, 35, 15, 10],
    "1.2": [0, 0, 20, 20, 10, 50],
    "1.3": [10, 0, 10, 10, 60, 10],
    "1.4": [0, 40, 10, 20, 0, 30],
    "1.5": [10, 40, 10, 10, 20, 10],
    "1.6": [30, 40, 20, 0, 0, 10],

    "2.1": [30, 40, 20, 0, 0, 10],
    "2.2": [10, 0, 10, 10, 0, 10],
    "2.3": [10, 20, 10, 35, 15, 10],
    "2.4": [0, 40, 10, 20, 0, 30],

    "3.1": [0, 40, 10, 20, 0, 30],
    "3.2": [0, 40, 10, 20, 0, 30],
    "3.3": [30, 40, 20, 0, 0, 10],
    "3.4": [10, 50, 10, 10, 10, 10],
    "3.5": [10, 20, 10, 35, 15, 10],
    "3.6": [10, 0, 10, 10, 60, 10],

    "4.1": [0, 0, 0, 0, 0, 0],
    "4.2": [0, 0, 0, 0, 0, 0],
    "4.3": [0, 0, 0, 0, 0, 0],
    "4.4": [0, 0, 0, 0, 0, 0],
    "4.5": [0, 0, 0, 0, 0, 0],
    "4.6": [0, 0, 0, 0, 0, 0],

    "5.1": [0, 0, 0, 0, 0, 0],
    "5.2": [0, 0, 0, 0, 0, 0],
    "5.3": [0, 0, 0, 0, 0, 0],
    "5.4": [0, 0, 0, 0, 0, 0],
    "5.5": [0, 0, 0, 0, 0, 0],
    "5.6": [0, 0, 0, 0, 0, 0],


    "6.1": [0, 0, 0, 0, 0, 0],
    "6.2": [0, 0, 0, 0, 0, 0],
    "6.3": [0, 0, 0, 0, 0, 0],
    "6.4": [0, 0, 0, 0, 0, 0],
    "6.5": [0, 0, 0, 0, 0, 0],
    "6.6": [0, 0, 0, 0, 0, 0],

    "7.1": [0, 0, 0, 0, 0, 0],
    "7.2": [0, 0, 0, 0, 0, 0],
    "7.3": [0, 0, 0, 0, 0, 0],
    "7.4": [0, 0, 0, 0, 0, 0],
    "7.5": [0, 0, 0, 0, 0, 0],
    "7.6": [0, 0, 0, 0, 0, 0],

    "8.1": [0, 0, 0, 0, 0, 0],
    "8.2": [0, 0, 0, 0, 0, 0],
    "8.3": [0, 0, 0, 0, 0, 0],
    "8.4": [0, 0, 0, 0, 0, 0],
    "8.5": [0, 0, 0, 0, 0, 0],
    "8.6": [0, 0, 0, 0, 0, 0],

    "9.1": [0, 0, 0, 0, 0, 0],
    "9.2": [0, 0, 0, 0, 0, 0],
    "9.3": [0, 0, 0, 0, 0, 0],
    "9.4": [0, 0, 0, 0, 0, 0],
    "9.5": [0, 0, 0, 0, 0, 0],
    "9.6": [0, 0, 0, 0, 0, 0],

    "10.1": [0, 0, 0, 0, 0, 0],
    "10.2": [0, 0, 0, 0, 0, 0],
    "10.3": [0, 0, 0, 0, 0, 0],
    "10.4": [0, 0, 0, 0, 0, 0],
    "10.5": [0, 0, 0, 0, 0, 0],
    "10.6": [0, 0, 0, 0, 0, 0],

    "11.1": [0, 0, 0, 0, 0, 0],
    "11.2": [0, 0, 0, 0, 0, 0],
    "11.3": [0, 0, 0, 0, 0, 0],
    "11.4": [0, 0, 0, 0, 0, 0],
    "11.5": [0, 0, 0, 0, 0, 0],
    "11.6": [0, 0, 0, 0, 0, 0],

    "12.1": [0, 0, 0, 0, 0, 0],
    "12.2": [0, 0, 0, 0, 0, 0],
    "12.3": [0, 0, 0, 0, 0, 0],
    "12.4": [0, 0, 0, 0, 0, 0],
    "12.5": [0, 0, 0, 0, 0, 0],
    "12.6": [0, 0, 0, 0, 0, 0],

    "13.1": [0, 0, 0, 0, 0, 0],
    "13.2": [0, 0, 0, 0, 0, 0],
    "13.3": [0, 0, 0, 0, 0, 0],
    "13.4": [0, 0, 0, 0, 0, 0],

    "14.1": [0, 0, 0, 0, 0, 0],
    "14.2": [0, 0, 0, 0, 0, 0],
    "14.3": [0, 0, 0, 0, 0, 0],
    "14.4": [0, 0, 0, 0, 0, 0],

    "15.1": [0, 0, 0, 0, 0, 0],
    "15.2": [0, 0, 0, 0, 0, 0],
    "15.3": [0, 0, 0, 0, 0, 0],
    "15.4": [0, 0, 0, 0, 0, 0],
    "15.5": [0, 0, 0, 0, 0, 0],
    "15.6": [0, 0, 0, 0, 0, 0],
}



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
const loadingPage = document.querySelector("#load").classList;


//function section
const fadeQuestion = () => {
    sub.remove('changeColor');
    answerContentFade();
};

function loadQuiz() {
    var node = document.getElementById("answerGroup"); node.querySelectorAll('*').forEach(n => n.remove());

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
        input.id = `${currentQuiz + 1}.${i + 1}`;
        input.className = "answer";

        label.htmlFor = `${currentQuiz + 1}.${i + 1}`;
        label.innerText = answerOption[i];
        label.style = answerOption.length == 4 ? "flex: 2 0 30%" : "";
        document.querySelector("#answerGroup").append(input, label);
    }


    const answerEls = document.querySelectorAll('.answer');
    answerEls.forEach(
        anw => anw.addEventListener('click', enableBTN)
    );
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

var answeredArr = [];

function nextQuestion() {
    const answerEls = document.querySelectorAll('.answer');
    const answer = getSelected(answerEls);
    answeredArr.push(answer);
    if (answer) {

        currentQuiz++;
        fadeQuestion();

        if (currentQuiz < quizData.length) {
            setTimeout(function () {
                loadQuiz();
                fadeQuestion();
            }, 1000);
        } else {
            console.log(answeredArr);
            let major = caculatePoint(answeredArr);
            let label_text = `Based on your personality, <br> WIM thinks your most suitable major is: <br>
            -> [${answeredArr}]`;
            console.log(major);

            answerHide();

            nextButtonShow();

            setTimeout(function () {
                showQuestionBg();
                questionHeader.add("fadeO");
            }, 800);

            setTimeout(function () {
                loadingPage.toggle("showLoad");
                questionHeader.add("fadeWH");
                document.getElementById("centered").classList.toggle('hide');
            }, 1500);

            setTimeout(function(){
                showMajor(major, label_text);
            },5700);

            setTimeout(function(){
                loadingPage.toggle("showLoad");
            },7000);
        }
    }
}

function caculatePoint(answered) {
    var gradeArr = [];
    var pointArr = [];
    answered.forEach(item => {
        gradeArr[answered.indexOf(item)] = point[item];
    });

    for (let i = 0; i < 6; i++) {
        let score = 0;
        for (let j = 0; j < gradeArr.length; j++) {
            score += gradeArr[j][i];
        }

        pointArr.push(score);

    }

    console.log(gradeArr);
    console.log(pointArr);

    let majorNo = pointArr.indexOf(Math.max(...pointArr));
    let major;

    switch (majorNo) {
        case 0:
            major = 'BUS';
            break;
        case 1:
            major = 'Law';
            break;
        case 2:
            major = 'GLA';
            break;
        case 3:
            major = 'ITM';
            break;
        case 4:
            major = 'THM';
            break;
        case 5:
            major = 'ICT';
            break;
    }

    return major;
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





/////////////////////// start of major Page Section //////////////////////////////////
const majorData = {
    'ITM': {
        majorName: "Information Technology Management",
        majorAbv: "ITM",
        majorInfo: "The Information Technology Management (ITM) program is designed to develop professionals in emerging and converging information and communication technologies. A degree in ITM produces graduates who can organize business processes to support the strategic corporate needs, demands and goals at the management level. The program is designed to bridge the gap between problems of business and the capabilities of information technology, while aligning the technology with business strategies. Students enhance their critical thinking, problem solving, and analytical skills with knowledge of management principles. The program is a balance of technology, management, communications and the liberal arts.",
        careerInfo: "Students are prepared for positions in technology and management fields, such as, for example, local and national government, telecommunications, financial institutions, corporate or educational IT units, private business and NGO’s. Graduates will have the necessary knowledge, experience and skills to enter technology related careers in business and management. Job opportunities include, but are not limited to:",
        careerList: [
            "Business, Management and Systems Analyst",
            "IT and project management",
            "IT director",
            "Information Management Specialist",
            "Database or Web Administrator",
            "Network Administrator",
            "Software or Computer Applications specialist",
            "IT Security Officer",
            "Data Scientist",
            "More...",
        ],
        courseList: [
            "Analytic Geometry and Calculus",
            "Maths for Computing",
            "Survey of Computer Science",
            "Computer Science",
            "Foundations of Computing",
            "Data Structures",
            "Assembly Language ",
            "Operating Systems",
            "Programming Languages",
            "Computer Graphics",
            "Software Engineering",
            "Introduction to Web Development ",
            "Front-end Web Development",
            "Database Design and Programming",
            "Java Programming I",
        ],
    },

    'BUS': {
        majorName: "Business",
        majorAbv: "ITM",
        majorInfo: "The Information Technology Management (ITM) program is designed to develop professionals in emerging and converging information and communication technologies. A degree in ITM produces graduates who can organize business processes to support the strategic corporate needs, demands and goals at the management level. The program is designed to bridge the gap between problems of business and the capabilities of information technology, while aligning the technology with business strategies. Students enhance their critical thinking, problem solving, and analytical skills with knowledge of management principles. The program is a balance of technology, management, communications and the liberal arts.",
        careerInfo: "Students are prepared for positions in technology and management fields, such as, for example, local and national government, telecommunications, financial institutions, corporate or educational IT units, private business and NGO’s. Graduates will have the necessary knowledge, experience and skills to enter technology related careers in business and management. Job opportunities include, but are not limited to:",
        careerList: [
            "Business, Management and Systems Analyst",
            "IT and project management",
            "IT director",
            "Information Management Specialist",
            "Database or Web Administrator",
            "Network Administrator",
            "Software or Computer Applications specialist",
            "IT Security Officer",
            "Data Scientist",
            "More...",
        ],
        courseList: [
            "Analytic Geometry and Calculus",
            "Maths for Computing",
            "Survey of Computer Science",
            "Computer Science",
            "Foundations of Computing",
            "Data Structures",
            "Assembly Language ",
            "Operating Systems",
            "Programming Languages",
            "Computer Graphics",
            "Software Engineering",
            "Introduction to Web Development ",
            "Front-end Web Development",
            "Database Design and Programming",
            "Java Programming I",
        ],
    },

    'Law': {
        majorName: "Law",
        majorAbv: "ITM",
        majorInfo: "The Information Technology Management (ITM) program is designed to develop professionals in emerging and converging information and communication technologies. A degree in ITM produces graduates who can organize business processes to support the strategic corporate needs, demands and goals at the management level. The program is designed to bridge the gap between problems of business and the capabilities of information technology, while aligning the technology with business strategies. Students enhance their critical thinking, problem solving, and analytical skills with knowledge of management principles. The program is a balance of technology, management, communications and the liberal arts.",
        careerInfo: "Students are prepared for positions in technology and management fields, such as, for example, local and national government, telecommunications, financial institutions, corporate or educational IT units, private business and NGO’s. Graduates will have the necessary knowledge, experience and skills to enter technology related careers in business and management. Job opportunities include, but are not limited to:",
        careerList: [
            "Business, Management and Systems Analyst",
            "IT and project management",
            "IT director",
            "Information Management Specialist",
            "Database or Web Administrator",
            "Network Administrator",
            "Software or Computer Applications specialist",
            "IT Security Officer",
            "Data Scientist",
            "More...",
        ],
        courseList: [
            "Analytic Geometry and Calculus",
            "Maths for Computing",
            "Survey of Computer Science",
            "Computer Science",
            "Foundations of Computing",
            "Data Structures",
            "Assembly Language ",
            "Operating Systems",
            "Programming Languages",
            "Computer Graphics",
            "Software Engineering",
            "Introduction to Web Development ",
            "Front-end Web Development",
            "Database Design and Programming",
            "Java Programming I",
        ],
    },

    'GLA': {
        majorName: "Global Affairs",
        majorAbv: "ITM",
        majorInfo: "The Information Technology Management (ITM) program is designed to develop professionals in emerging and converging information and communication technologies. A degree in ITM produces graduates who can organize business processes to support the strategic corporate needs, demands and goals at the management level. The program is designed to bridge the gap between problems of business and the capabilities of information technology, while aligning the technology with business strategies. Students enhance their critical thinking, problem solving, and analytical skills with knowledge of management principles. The program is a balance of technology, management, communications and the liberal arts.",
        careerInfo: "Students are prepared for positions in technology and management fields, such as, for example, local and national government, telecommunications, financial institutions, corporate or educational IT units, private business and NGO’s. Graduates will have the necessary knowledge, experience and skills to enter technology related careers in business and management. Job opportunities include, but are not limited to:",
        careerList: [
            "Business, Management and Systems Analyst",
            "IT and project management",
            "IT director",
            "Information Management Specialist",
            "Database or Web Administrator",
            "Network Administrator",
            "Software or Computer Applications specialist",
            "IT Security Officer",
            "Data Scientist",
            "More...",
        ],
        courseList: [
            "Analytic Geometry and Calculus",
            "Maths for Computing",
            "Survey of Computer Science",
            "Computer Science",
            "Foundations of Computing",
            "Data Structures",
            "Assembly Language ",
            "Operating Systems",
            "Programming Languages",
            "Computer Graphics",
            "Software Engineering",
            "Introduction to Web Development ",
            "Front-end Web Development",
            "Database Design and Programming",
            "Java Programming I",
        ],
    },

    'ICT': {
        majorName: "Information Communications and Technology",
        majorAbv: "ITM",
        majorInfo: "The Information Technology Management (ITM) program is designed to develop professionals in emerging and converging information and communication technologies. A degree in ITM produces graduates who can organize business processes to support the strategic corporate needs, demands and goals at the management level. The program is designed to bridge the gap between problems of business and the capabilities of information technology, while aligning the technology with business strategies. Students enhance their critical thinking, problem solving, and analytical skills with knowledge of management principles. The program is a balance of technology, management, communications and the liberal arts.",
        careerInfo: "Students are prepared for positions in technology and management fields, such as, for example, local and national government, telecommunications, financial institutions, corporate or educational IT units, private business and NGO’s. Graduates will have the necessary knowledge, experience and skills to enter technology related careers in business and management. Job opportunities include, but are not limited to:",
        careerList: [
            "Business, Management and Systems Analyst",
            "IT and project management",
            "IT director",
            "Information Management Specialist",
            "Database or Web Administrator",
            "Network Administrator",
            "Software or Computer Applications specialist",
            "IT Security Officer",
            "Data Scientist",
            "More...",
        ],
        courseList: [
            "Analytic Geometry and Calculus",
            "Maths for Computing",
            "Survey of Computer Science",
            "Computer Science",
            "Foundations of Computing",
            "Data Structures",
            "Assembly Language ",
            "Operating Systems",
            "Programming Languages",
            "Computer Graphics",
            "Software Engineering",
            "Introduction to Web Development ",
            "Front-end Web Development",
            "Database Design and Programming",
            "Java Programming I",
        ],
    },

    'THM': {
        majorName: "Tourism and Hospitality Management",
        majorAbv: "ITM",
        majorInfo: "The Information Technology Management (ITM) program is designed to develop professionals in emerging and converging information and communication technologies. A degree in ITM produces graduates who can organize business processes to support the strategic corporate needs, demands and goals at the management level. The program is designed to bridge the gap between problems of business and the capabilities of information technology, while aligning the technology with business strategies. Students enhance their critical thinking, problem solving, and analytical skills with knowledge of management principles. The program is a balance of technology, management, communications and the liberal arts.",
        careerInfo: "Students are prepared for positions in technology and management fields, such as, for example, local and national government, telecommunications, financial institutions, corporate or educational IT units, private business and NGO’s. Graduates will have the necessary knowledge, experience and skills to enter technology related careers in business and management. Job opportunities include, but are not limited to:",
        careerList: [
            "Business, Management and Systems Analyst",
            "IT and project management",
            "IT director",
            "Information Management Specialist",
            "Database or Web Administrator",
            "Network Administrator",
            "Software or Computer Applications specialist",
            "IT Security Officer",
            "Data Scientist",
            "More...",
        ],
        courseList: [
            "Analytic Geometry and Calculus",
            "Maths for Computing",
            "Survey of Computer Science",
            "Computer Science",
            "Foundations of Computing",
            "Data Structures",
            "Assembly Language ",
            "Operating Systems",
            "Programming Languages",
            "Computer Graphics",
            "Software Engineering",
            "Introduction to Web Development ",
            "Front-end Web Development",
            "Database Design and Programming",
            "Java Programming I",
        ],
    },
}

var choosenMajor = 'hi';
let labelText = document.getElementById('labelText');
let notes = "Note: The result is NOT 100% accurate, we analyzed your input based upon the research on major and personality, students' learning experiences, and the survey. We are hoping that WIM can ease your difficulty in finding your college major. Please seek guidance from your family, friends, and especially yourselves. Your Major, Your Choice, Your Future!"

let majorIcon = document.getElementsByClassName('tooltip');

for (key of document.getElementsByClassName('BUS')) {
    key.addEventListener('click', () => {
        console.log("clicked BUS");
        hideHomepage();
        showMajor("BUS", "");
    });
}

for (key of document.getElementsByClassName('LAW')) {
    key.addEventListener('click', () => {
        console.log("clicked LAW");
        hideHomepage();
        showMajor("Law", "");
    });
}

for (key of document.getElementsByClassName('GLA')) {
    key.addEventListener('click', () => {
        console.log("clicked GLA");
        hideHomepage();
        showMajor("GLA", "");
    });
}

for (key of document.getElementsByClassName('IT')) {
    key.addEventListener('click', () => {
        console.log("clicked IT");
        hideHomepage();
        showMajor("ITM", "");
    });
}

for (key of document.getElementsByClassName('THM')) {
    key.addEventListener('click', () => {
        console.log("clicked THM");
        hideHomepage();
        showMajor("THM", "");
    });
}

for (key of document.getElementsByClassName('ICT')) {
    key.addEventListener('click', () => {
        console.log("clicked ICT");
        hideHomepage();
        showMajor("ICT", "");
    });
}

function hideHomepage(){
    document.getElementById('centered').classList.toggle('fadeOut');

    setTimeout(() => {
        document.getElementById('centered').style.display = 'none';
    }, 500);
}

function showMajor(choosen_major, label) {

    choosenMajor = majorData[choosen_major];

    document.getElementById('padding').classList.toggle('fadePad');

    setTimeout(() => {
        document.getElementById('majorBg').classList.toggle('slideIn');
        document.getElementById('majorName').classList.toggle('slide');
    }, 1000);




    let major = document.getElementById('major');
    let majorTitle = document.getElementById('majorTitle');
    let majorInfo = document.getElementById('majorInfo');
    let careerInfo = document.getElementById('careerInfo');
    let labelText = document.getElementById('labelText');
    let note = document.getElementById('noteText');



    major.innerHTML = choosenMajor.majorName;
    labelText.innerHTML = label;
    majorTitle.innerHTML = `What is ${choosenMajor.majorAbv}?`;
    majorInfo.innerHTML = choosenMajor.majorInfo;
    careerInfo.innerHTML = choosenMajor.careerInfo;
    note.innerHTML =  label == "" ? "" : notes; 

    choosenMajor.careerList.forEach(
        item => {
            let list = document.createElement("li");
            list.innerHTML = item;

            document.querySelector("#careerList").append(list);
        }
    );

    choosenMajor.courseList.forEach(
        item => {
            let list = document.createElement("li");
            list.innerHTML = item;

            document.querySelector("#courseList").append(list);
        }
    );
}



document.getElementById('findAgain').addEventListener('click', () => {
    window.location.reload();
});

document.getElementById('home').addEventListener('click', () => {
    window.location.reload();
});

/////////////////////// end of major Page Section //////////////////////////////////
