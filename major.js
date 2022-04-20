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
}

var choosenMajor = 'hi';
let labelText = document.getElementById('labelText');

let majorIcon = document.getElementsByClassName('tooltip');

for (key of document.getElementsByClassName('BUS')) {
    key.addEventListener('click', () => {
        console.log("clicked BUS");
        choosenMajor = majorData.BUS;
    });
}

for (key of document.getElementsByClassName('LAW')) {
    key.addEventListener('click', () => {
        console.log("clicked LAW");
        choosenMajor = majorData.Law;
    });
}

for (key of document.getElementsByClassName('GLA')) {
    key.addEventListener('click', () => {
        console.log("clicked GLA");
        choosenMajor = majorData.GLA;
    });
}

for (key of document.getElementsByClassName('IT')) {
    key.addEventListener('click', () => {
        console.log("clicked IT");
        choosenMajor = majorData['ITM'];
        showMajor();
    });
}

for (key of document.getElementsByClassName('THM')) {
    key.addEventListener('click', () => {
        console.log("clicked THM");
        choosenMajor = majorData.THM;
    });
}

for (key of document.getElementsByClassName('ICT')) {
    key.addEventListener('click', () => {
        console.log("clicked ICT");
        choosenMajor = majorData.ICT;
    });
}

// for (key of majorIcon) {
//     key.addEventListener('click', () => {
//         window.location.href = "major.html";
//     });
// }

function showMajor() {

    document.getElementById('centered').classList.toggle('fadeOut');

    setTimeout(() => {
        document.getElementById('centered').style.display = 'none';
    }, 500);

    document.getElementById('padding').classList.toggle('fadePad');

    setTimeout(() => {
        document.getElementById('majorBg').classList.toggle('slideIn');
        document.getElementById('majorName').classList.toggle('slide');
    }, 1000);




    let major = document.getElementById('major');
    let majorTitle = document.getElementById('majorTitle');
    let majorInfo = document.getElementById('majorInfo');
    let careerInfo = document.getElementById('careerInfo');



    major.innerHTML = choosenMajor.majorName;
    majorTitle.innerHTML = `What is ${choosenMajor.majorAbv}?`;
    majorInfo.innerHTML = choosenMajor.majorInfo;
    careerInfo.innerHTML = choosenMajor.careerInfo;

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