//Text Typing Animation
var message = ["My", "Business", "Law", "GLA", "ITM", "THM", "ICT"];
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
        if (textPosition == 0){
            setTimeout(backward = false, speedForward);
            if (index == 6) index = 0;
            else index++;
        } 
    }
}

window.onload = function () {
    typewriter();
}


