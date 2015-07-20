window.onload = function() {
	initailize();
}

function initailize() {
	var width = document.body.clientWidth;
	var foot = document.getElementById('zjimg');
	foot.style.width = width + "px";

	var links = document.getElementsByTagName("a");
	for (var i = 5; i < links.length; i++) {
		links[i].setAttribute("target", "_blank");
	}
}