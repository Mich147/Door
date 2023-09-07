function openDoor(){
    document.getElementById("imgStatus").src = "open.jpg";
    document.getElementById("doorStatus").innerHTML = "Merry Chistmas!";
    document.getElementById('mp3File').play();
}
function closeDoor(){
    document.getElementById("imgStatus").src = "Images/close.png";
    document.getElementById("doorStatus").innerHTML = "The Door is CLOSE!";
    document.getElementById('mp3File').pause();
    document.getElementById('mp3File').currentTime = 0;
}
