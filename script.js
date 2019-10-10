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
/*
console.log("Let the hunt begin");

let iAm;
document.querySelector('.input.hidden').addEventListener('change', function() {
	if (this.value.toLowerCase() === 'found it') {
		iAm = 'Breathtaking!';
		alert('Ahh, you found it! You win!');
		console.log('Try running: "IAM" in your js console!')
	}
});
*/

// Click specified times to rain words like Matrix movie.
var counter = 0;
var times = 10;
document.querySelector('#codeEffect').addEventListener('click', function() {
    if (counter === times) {
        alert('Wecolme to code World!');
    }
    counter++;
})

function makeRainCode() {
    var canvasRain = document.getElementById("canvasRain");
    var ctx = canvasRain.getContext("2d");
    
    canvasRain.height = window.innerHeight;
    canvasRain.width = window.innerWidth;
    
    var stringFall = "Calum Dingwall, a Tech Guy";
    stringFall = stringFall.split("");
    
    var font_size = 10;
    var columns = canvasRain.width / font_size;
    var drops = [];
    
    for (var x = 0; x < columns; x++)
        drops[x] = 1;
    
    function draw() {
        ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
        ctx.fillRect(0, 0, canvasRain.width, canvasRain.height);
    
        ctx.fillStyle = "#0F0"; // This color of chars.
        ctx.font = font_size + "px Helvetica";
        for (var i = 0; i < drops.length; i++) {
            
            var text = stringFall[Math.floor(Math.random() * stringFall.length)];
            
            ctx.fillText(text, i * font_size, drops[i] * font_size);
    
            if (drops[i] * font_size > canvasRain.height && Math.random() > 0.975)
                drops[i] = 0;
    
            drops[i]++;
        }
    }
    
    setInterval(draw, 33);
}

// Magical CSS Background Color
document.querySelector('#icon-css').addEventListener('mouseenter', () => {
  
  const generateNumber = () => Math.floor(Math.random() * 255)
  const rgb = `rgb(${generateNumber()}, ${generateNumber()}, ${generateNumber()})`

  document.querySelector('.container').style.backgroundColor = rgb;
})
