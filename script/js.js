sfHover = function() {
	var sfEls = document.getElementById("topnav").getElementsByTagName("LI");
	for (var i=0; i<sfEls.length; i++) {
		sfEls[i].onmouseover=function() {
			this.className+=" sfhover";
		}
		sfEls[i].onmouseout=function() {
			this.className=this.className.replace(new RegExp(" sfhover\\b"), "");
		}
	}
}
if (window.attachEvent) window.attachEvent("onload", sfHover);

/* *********************************************************** 
 *	FUNCTION:  sfHover, listOver, listOut
 *	PURPOSE: suckerfish rollover
 * ********************************************************* */
/*sfHover = function() {
	var sfEls = document.getElementById('universalnav').getElementsByTagName('li');
	for (var i=0; i<sfEls.length; i++) {
		sfEls[i].onmouseover=listOver;
		sfEls[i].onmouseout=listOut;
	}
}

function listOver () {
	this.className+=" hover";
	if (this.id == "boards") { //drop down menu over flash/form element
		document.getElementById('iframeHidden').style.display = "block";
	}
}

function listOut () {
	this.className="";
	if (this.id == "boards") { //drop down menu over flash/form element
		document.getElementById('iframeHidden').style.display = "none";
	}
}


/* window.attachEvent for IE + Opera */
/*if (window.attachEvent){ 
	window.attachEvent('onload', sfHover);
}

/* *********************************************************** 
 *	FUNCTION: showMe, hideMe
 *	PURPOSE: footer tooltip rollover
 * ********************************************************* */
function showMe(divname) {
	document.getElementById(divname).style.display = "block";
}


function hideMe(divname) {
	document.getElementById(divname).style.display = "none";
}

function showInfo(o) {
	var show = function () {
							if(document.getElementById("WhatsThisInfo") == null) {
								var iB = document.createElement('span'); 			// Info Box
								var oP = o.parentNode; 								// object parent that came 
								oP.insertBefore(iB,o);
								iB.id = "WhatsThisInfo";
								iB.innerHTML = o.getAttribute("info")+"<br /><br />";
								
								iB.style.marginTop= "-60px";
								iB.style.marginLeft= o.offsetWidth-10+"px";
								iB.style.display = "inline";
							}
						}
	setTimeout(show,200);
}


function hideInfo(o) {
	var hide = function () {
		var oP = o.parentNode; 								// object parent that came 
		var oPS = o.previousSibling;						// object previous sibling
		if(oPS.id == "WhatsThisInfo"){
			oP.removeChild(oPS);
		}
	}
	setTimeout(hide,200);
}


/* *********************************************************** 
 *	FUNCTION: clearField
 *	PURPOSE: clear text field default value
 * ********************************************************* */
function clearField(field) {
	if (field.value == field.defaultValue)
		field.value = "";
}

function getDefaultValue(field) {
	if (field.value == "")
		field.value = field.defaultValue;
}

/* *********************************************************** 
 *	FUNCTION: turnme
 *	PURPOSE: expand/collapse Ask InfoServ FAQ
 * ********************************************************* */
function turnme(elem) {
	if (elem.className == '') elem.className = "on";
	else if (elem.className == "on") elem.className = "";
}

/* *********************************************************** 
 *	FUNCTION: showAskNow/hideAskNow
 *	PURPOSE: display Ask Now form on news story pages
 * ********************************************************* */
function toggleAskNow() {
	if (document.getElementById('askusnow_form').style.display == "block") {
		document.getElementById('askusnow_form').style.display = "none";
	} else {
		document.getElementById('askusnow_form').style.display = "block";
	}
}

function showAskNow() {
	document.getElementById('askusnow_form').style.display = "block";
}

function hideAskNow() {
	document.getElementById('askusnow_form').style.display = "none";
}

/* *********************************************************** 
 *	FUNCTION:	ldmHover, navOver, navOut
 *	PURPOSE: 	rollover for homepage navigation bar
 *				both IE & Mozilla
 * ********************************************************* */
function ldmHover() {
	if (document.getElementById('mainNav')) {
		var navItems = document.getElementById('mainNav').getElementsByTagName('li');
		for (var i=0; i<navItems.length; i++) {
			navItems[i].onmouseover=navOver;
			//navItems[i].onmouseout=navOut;
		}
	}
}

function navOver () {
	switch(this.id) {
		case 'ourchurch':
			document.getElementById('mainNav').className = 'ourChurch';
			break;
		case 'ourfaith':
			document.getElementById('mainNav').className = 'ourFaith';
			break;
		case 'ourpeople':
			document.getElementById('mainNav').className = 'ourPeople';
			break;
		case 'ourworld':
			document.getElementById('mainNav').className = 'ourWorld';
			break;
	}
}

/*function navOut () {
	document.getElementById('mainNav').className = 'nosub';
}*/


if(window.addEventListener){
	window.addEventListener('load',ldmHover,false);
} else if (window.attachEvent){ 
	window.attachEvent('onload', ldmHover);
}


/* *********************************************************** 
 *	PURPOSE: 	preload navigation images
 *				
 * ********************************************************* */
 

 /* Images no longer available
var img1 = new Image();
img1.src = 'http://www.kintera.org/atf/cf/%7BDB6A45E4-C446-4248-82C8-E131B6424741%7D/nav-bg-ie-nosub.gif';
 
var img2 = new Image();
img2.src = 'http://www.kintera.org/atf/cf/%7BDB6A45E4-C446-4248-82C8-E131B6424741%7D/nav-bg-ie-ourchurch.gif';

var img3 = new Image();
img3.src = 'http://www.kintera.org/atf/cf/%7BDB6A45E4-C446-4248-82C8-E131B6424741%7D/nav-bg-ie-ourfaith.gif';
 
var img4 = new Image();
img4.src = 'http://www.kintera.org/atf/cf/%7BDB6A45E4-C446-4248-82C8-E131B6424741%7D/nav-bg-ie-ourpeople.gif';
 
var img5 = new Image();
img5.src = 'http://www.kintera.org/atf/cf/%7BDB6A45E4-C446-4248-82C8-E131B6424741%7D/nav-bg-ie-ourworld.gif';

var img6 = new Image();
img6.src = 'http://www.kintera.org/atf/cf/%7BDB6A45E4-C446-4248-82C8-E131B6424741%7D/nav-bg-ie-ourchurch.gif';

var img7 = new Image();
img7.src = 'http://www.kintera.org/atf/cf/%7BDB6A45E4-C446-4248-82C8-E131B6424741%7D/bg-greyline.gif';
*/

var lx;
var ly;

/*
function makeRequestLogin(obj) {
	url='http://www.kintera.org/atf/cf/{DB6A45E4-C446-4248-82C8-E131B6424741}/LOGIN.HTML';
	http_request = false;

	if (window.XMLHttpRequest) { // Mozilla, Safari,...
		http_request = new XMLHttpRequest();
		if (http_request.overrideMimeType) {
			http_request.overrideMimeType('text/xml');
		}
	} else if (window.ActiveXObject) { // IE
		try {
			http_request = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e) {
			try {
			http_request = new ActiveXObject("Microsoft.XMLHTTP");
			} catch (e) {}
		}
	}

	if (!http_request) {
		alert('Cannot create an XMLHTTP instance');
		return false;
	}
	http_request.onreadystatechange = function () { displayLogin(obj) };
	http_request.open('GET', url, true);
	http_request.send(null);
	lx = obj.offsetLeft;
	ly = obj.offsetTop+obj.offsetHeight;
}
*/

function displayLogin(obj) {
	if (http_request.readyState == 1) {
		//document.getElementById('articles').innerHTML = "Loading...";
	}
	if (http_request.readyState == 4) {
		if (http_request.status == 200) {
				var login = document.createElement('div');
				login.id = 'Login';
				login.innerHTML = http_request.responseText;
				document.getElementsByTagName('body')[0].appendChild(login);
				login.style.left = obj.offsetLeft+20;
				login.style.top = obj.offsetTop+obj.offsetHeight+18;

			} else {
				alert('There was a problem with the request.');
			}
		}
}

function displayLoginPage ( obj ) {
	var t = document.getElementById("LoginTabs").getElementsByTagName("a");
	for(i=0; i<t.length; i++) {
		t[i].className = "";
	}
	
	obj.className = "LoginOn";
}

function closeLogin(){
	//document.getElementById('Login').style.left= -1000;
	document.getElementsByTagName('body')[0].removeChild(document.getElementById('Login'));
}

className = 'FlashContent';

function addLoadListener(fn)
{
	if (typeof window.addEventListener != 'undefined')
	{
		window.addEventListener('load', fn, false);
	}
 	else if (typeof document.addEventListener != 'undefined')
 	{
   	document.addEventListener('load', fn, false);
	}
 	else if (typeof window.attachEvent != 'undefined')
 	{
   	window.attachEvent('onload', fn);
 	}
 	else
 	{
   	var oldfn = window.onload;
   	if (typeof window.onload != 'function')
   	{
     window.onload = fn;
   	}
   	else
   	{
     window.onload = function()
     {
       oldfn();
       fn();
     };
   }
 }
}


function getElementsByClassName(oElm, strTagName, strClassName) {
	var arrElements = (strTagName == "*" && document.all)? document.all : oElm.getElementsByTagName(strTagName); 
	var arrReturnElements = new Array(); 
	strClassName = strClassName.replace(/\-/g, "\\-"); 
	var oRegExp = new RegExp("(^|\\s)" + strClassName + "(\\s|$)"); 
	var oElement; 
	for(var i=0; i<arrElements.length; i++){ 
		oElement = arrElements[i]; 
		if(oRegExp.test(oElement.className)){ 
			arrReturnElements.push(oElement); 
		} 
	} 
	return (arrReturnElements) 
}


function displayFlashByClassName() {
	var flashDivs = getElementsByClassName(document,'span',className);
	var divInnerHTML = "";
	for(i=0; i<flashDivs.length; i++){
		if(flashDivs[i].style.display == 'none') {
			divInnerHTML = flashDivs[i].innerHTML;
			flashDivs[i].innerHTML = divInnerHTML;
			flashDivs[i].style.display = '';
		}
	}
}

addLoadListener(displayFlashByClassName);
