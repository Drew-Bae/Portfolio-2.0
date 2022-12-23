/* Typewriter */
var i = 0;
var j = 0;
var txt = 'Hi,';
var txt2 = 'I\'m Drew.';
var speed = 200;
var speed2 = 200;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("first").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

function typeWriter2() {
    if (j < txt2.length) {
      document.getElementById("second").innerHTML += txt2.charAt(j);
      j++;
      setTimeout(typeWriter2, speed2);
    }
}

setTimeout(typeWriter, 0);
setTimeout(typeWriter2, 1800);

/* Power Button */
const opening = document.getElementById('opening');
const powerBtn = document.getElementById('powerBtn');

powerBtn.addEventListener("click", function() {
    powerBtn.classList.add('stopAnimation');
    powerBtn.setAttribute("style", "filter: invert(100%) sepia(0%) saturate(7482%) hue-rotate(305deg) brightness(107%) contrast(105%);");   
    setTimeout(function() {
        opening.setAttribute("style", "background: #fff");
    }, 825);
    setTimeout(function() {
        powerBtn.setAttribute("style", "display: none");
    }, 3350);
    setTimeout(function() {
        opening.setAttribute("style", "height: 0");
    }, 3350);
    setTimeout(function() {
        opening.setAttribute("style", "display: none");
    }, 6351);
});
