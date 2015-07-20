window.onload = function() {
	initailize();
	showVersion();
}

function initailize() {
	var doc = document;
	var width = doc.body.clientWidth;
	var foot = doc.getElementById('footImg');
	foot.style.width = width + 'px';
}

function showVersion() {
	//查询字符串 '？version='
	var query = window.location.search;

	if (query == '?version=1.1') version_1_1.initialize();
	if (query == '?version=1.2') version_1_2.initialize();
	if (query == '?version=2.1') version_2_1.initialize();
	if (query == '?version=2.2') version_2_2.initialize();
	if (query == '?version=3.1') version_3_1.initialize();
	if (query == '?version=3.2') version_3_2.initialize();
	if (query == '?version=3.3') version_3_3.initialize();
	if (query == '?version=4.1') version_4_1.initialize();
	if (query == '?version=4.2') version_4_2.initialize();
	if (query == '?version=4.3') version_4_3.initialize();
	if (query == '?version=5.1') version_5_1.initialize();
	if (query == '?version=5.2') version_5_2.initialize();
	if (query == '?version=6.1') version_6_1.initialize();
	if (query == '?version=6.2') version_6_2.initialize();
}