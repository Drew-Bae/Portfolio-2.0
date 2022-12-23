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