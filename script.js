// LOADING SCREEN SCRIPT
// We will use a fake timer that will add the fadeout class after the timer ends.

const initLoadingScreen = () => {
  setTimeout(() => {
    document.getElementById("loading_screen").classList.add("fadeout");
  }, 600);
};

initLoadingScreen();

document.onload = show();

/**
 * Get text from element and create span element for every letter for text animation
 */
function show() {
    const text = document.getElementById('show');
    const string_split = text.innerHTML.split('');
    text.innerHTML = '';

    string_split.forEach(e => {
        let el = document.createElement('span');
        el.innerHTML = e;
        el.style.opacity = '0';
        el.classList.add('letter');
        text.appendChild(el);
    });

    // Show 1 letter every 25ms
    let c = 0;
    let interval = setInterval(() => {
        text.children[c].style.opacity = '1';
        c++
        if(c == text.children.length) {
            clearInterval(interval);
        }
        }
        , 25);
}

// Konami code easter egg
if ( window.addEventListener ) {
    var kkeys = [], konami = "38,38,40,40,37,39,37,39,66,65";
    window.addEventListener("keydown", function(e){
        kkeys.push( e.keyCode );

        if ( kkeys.toString().indexOf( konami ) >= 0 ) {
            var audio = document.getElementById("mgsalert");
            audio.play();
            alert('kept you waitin, huh?');
            kkeys = [];
        }
    }, true);
}

// There should be an input somewhere, I don't know where though
console.log("Let the hunt begin");

let iAm;
document.querySelector('.input.hidden').addEventListener('change', function() {
	if (this.value.toLowerCase() === 'found it') {
		iAm = 'Breathtaking!';
		alert('Ahh, you found it! You win!');
		console.log('Try running: "IAM" in your js console!')
	}
});