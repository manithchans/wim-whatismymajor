//Text Typing Animation
var message = ["Business", "Law", "GLA", "ITM", "THM", "ICT", "My"];
var textPosition = 0;
var speedForward = 350;
var speedBack = 80;
var backward = false;
var index = 0;

typewriter = () => {
    document.querySelector("#blueText").innerHTML = message[index].substring(0, textPosition) + "|";
    if (!backward) {
        setTimeout(typewriter, speedForward);
        textPosition++;
        if (textPosition == message[index].length + 1) backward = true;
    } else {
        setTimeout(typewriter, speedBack);
        textPosition--;
        console.log(textPosition);
        if (textPosition == 0) {
            setTimeout(backward = false, speedForward);
            if (index == 6) index = 0;
            else index++;
        }
    }
}

window.onload = function () {

    var groupTitle = document.getElementById("groupTitle");
    var group = document.getElementById("group");
    var group2 = document.getElementById("group2");
    var findMajor = document.getElementById("findMajor");

    function hide() {
        groupTitle.style.display = "none";
        group.style.display = "none";
        group2.style.display = "none";
        findMajor.style.display = "none";
    }
    
    function fade() {
        //title What is
        groupTitle.style = "display: flex";
        groupTitle.classList.add("fadeTitle");
        setTimeout(typewriter, 5000);
    
        //findMajor
        findMajor.style.display = "block";
        findMajor.classList.add("fade");
    
        //group
        group.style.display = "flex";
        group.classList.add("fadeGroup");
    
        //group2
        group2.style.display = "flex";
        group2.classList.add("fadeGroup2");
    
    }

    hide();
    setTimeout(fade, 1500);

}


