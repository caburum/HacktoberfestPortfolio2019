// There should be an input somewhere, I don't know where though
console.log("Let the hunt begin");

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

let iAm;
document.querySelector('.input.hidden').addEventListener('change', function() {
	if (this.value.toLowerCase() === 'found it') {
		iAm = 'Breathtaking!';
		alert('Ahh, you found it! You win!');
		console.log('Try running: "IAM" in your js console!')
	}
});
