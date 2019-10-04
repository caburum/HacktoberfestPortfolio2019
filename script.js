// There should be an input somewhere, I don't know where though
console.log("Let the hunt begin");

let IAM;
document.querySelector('.input.hidden').addEventListener('change', function() {
	if (this.value.toLowerCase() === 'found it') {
		IAM = 'Breathtaking!';
		alert('Ahh, you found it! You win!');
		console.log('Try running: "IAM" in your js console!')
	}
});
