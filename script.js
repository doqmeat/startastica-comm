document.getElementById("defaultOpen").click();
//document.getElementById("defaultOpen").style.width = "40px";
//		funtion that makes the tabs change the page
function openTab(tabName) {
	var i;
	var tabcontent = document.getElementById(tabName);
	var otherContent = document.getElementsByClassName("wrapper");
	var defaultOpen = document.getElementById("defaultOpen");
	for (i = 0; i < otherContent.length; i++) {
		otherContent[i].style.display = "none";
	}
	tabcontent.style.display = "flex";
}

//function that makes the title scroll
(function titleScroller(text) {
	document.title = text;
	setTimeout(function () {
		titleScroller(text.substr(1) + text.substr(0, 1));
	}, 500);
}("  ✧･ﾟ: *✧･ﾟ:*  Welcome to startastica　*:･ﾟ✧*:･ﾟ "));
