console.log("auth module loaded");

var authBtn = document.getElementById('authBtn');
var signInBack = document.getElementById('sign_in_back')

authBtn.addEventListener('click', function() {
	document.getElementById('flipper').style.transform = 'rotateY(180deg)';
})	

signInBack.addEventListener('click', function() {
	document.getElementById('flipper').style.transform = 'rotateY(360deg)';
})