window.onload = function() {
	bingSpan();
	initailize();
	navigaPic();
	barPicMove();
}

function initailize() {
	var width = document.body.clientWidth;
	var height = 0.88 * window.screen.availHeight;
	var images = document.getElementsByTagName("img");

	document.getElementsByTagName("header")[0].style.height = height + "px";
	document.getElementsByTagName("span")[0].style.backgroundColor = "white";

	for (var x = 0; x < images.length; x++) {
		var title = images[x].getAttribute("title");
		if (title.indexOf("header") != -1) {
			images[x].setAttribute("height", height);
			images[x].setAttribute("width", width);
		}
	}

	barNavigation = document.getElementById("barNavigation");
	barNavigation.style.paddingLeft = (width - 420) / 2 + "px";
	barNavigation.style.paddingTop = 0.045 * height + "px";
	barNavigation.style.height = 0.045 * height + "px";

	var myDate = new Date();
	date = "Pokemon宠物小精灵, " + myDate.toLocaleDateString();
	var dateParagraph = createParagraph(date);
	dateParagraph.setAttribute("id", "date");
	var mainTop = document.getElementById("mainTop");
	var log = document.getElementById("log_");
	mainTop.insertBefore(dateParagraph, log);

	var zjimg = document.getElementById("zjimg");
	zjimg.setAttribute("width", width);
}

function bingSpan() {
	var spans = document.getElementsByTagName("span");
	spans[0].observe('mouseover', function() {BarClick(0)});
	spans[1].observe('mouseover', function() {BarClick(1)});
	spans[2].observe('mouseover', function() {BarClick(2)});
	spans[3].observe('mouseover', function() {BarClick(3)});
	spans[4].observe('mouseover', function() {BarClick(4)});
	spans[5].observe('mouseover', function() {BarClick(5)});
	spans[6].observe('mouseover', function() {BarClick(6)});
}

function BarClick(on) {
	clearTimeout(T);
	LIGHT = 100;
	COUNT = on;
	barPicMove();
	var spans = document.getElementsByTagName("span");
	var images = document.getElementsByTagName("img");


	for (var i = 0; i < images.length; i++) {
		var title = images[i].getAttribute("title");

		if (title.indexOf("header") != -1) {
			spans[i].style.backgroundColor = "black";
			if (i < on)
				images[i].style.display = "none";
			else
				images[i].style.display = "inline";
		}
	}
	spans[on].style.backgroundColor = "white";
	if (COUNT != 0)
		images[COUNT - 1].style.opacity = 1;
	else
		images[6].style.opacity = 1;
}

function navigaPic() {
	var MidChild_1 = document.getElementById("MidChild_1");
	var MidChild_2 = document.getElementById("MidChild_2");
	var width = document.body.clientWidth;
	MidChild_1.style.paddingRight = (0.8 * width - 912) / 2 +"px";
	MidChild_2.style.paddingRight = (0.8 * width - 912) / 2 +"px";
	MidChild_3.style.paddingRight = "3px";

	var images = document.getElementsByTagName("img");
	for (var i = 0; i < images.length; i++) {
		var src = images[i].getAttribute("src");
		if (src.indexOf("center") != -1) {
			images[i].observe('mouseover', function() {navigaPicFloatUp(event)});
			images[i].observe('mouseout', function() {navigaPicFloatDown(event)});
		}
	}
}

function navigaPicFloatUp() {
	var img = window.event.toElement;
	var hr = getChild(img.parentNode.parentNode, 2)
	hr.style.marginBottom = "10px";

	img.style.transform = "rotate(2deg)";
	img.style.msTransform = "rotate(2deg)";
	img.style.mozTransform = "rotate(2deg)";
	img.style.webkitTransform = "rotate(2deg)";
	img.style.oTransform = "rotate(2deg)";
}

function navigaPicFloatDown() {
	var img = window.event.fromElement;
	var hr = getChild(img.parentNode.parentNode, 2)
	hr.style.marginBottom = "15px";

	img.style.transform = "rotate(0deg)";
	img.style.msTransform = "rotate(0deg)";
	img.style.mozTransform = "rotate(0deg)";
	img.style.webkitTransform = "rotate(0deg)";
	img.style.oTransform = "rotate(0deg)";
}

function barPicMove() {
	var images = document.getElementsByTagName("img");

	if (LIGHT == 100) {
		LIGHT = LIGHT - 5;
		T = setTimeout("barPicMove()", 2000);
		return;
	}

	if (LIGHT != 5) {
		images[COUNT].style.opacity = LIGHT / 100;
		LIGHT = LIGHT - 5;
	}
	else {
		COUNT = (COUNT + 1) % 7;
		BarClick(COUNT);
		return;
	}
	T = setTimeout("barPicMove()", 53)
}

var T;
var COUNT = 0;
var LIGHT = 100;