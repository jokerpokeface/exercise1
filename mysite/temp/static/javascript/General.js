function getChild(elem, index) {
	var children = elem.childNodes;
	var pos = 0;
	for (var i = 0; i < children.length; i++) {
		if (children[i].nodeType == 1) {
			pos++;
			if (pos == index)
				return children[i];
		}
	}
}

function createParagraph(text) {
	var p = document.createElement("p");
	var temp = document.createTextNode(text);
	p.appendChild(temp);
	return p;
}