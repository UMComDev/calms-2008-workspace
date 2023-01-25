var	main_form = null //ptr will be changed in application
var pop_win = null;
var focus_field = "";
var	warning = "";
function formSetmain(thisform){
	if (thisform != null) main_form = thisform;
	else main_form = document.forms[0];
}
function formPostback(){
	main_form.action = document.location;
	main_form.Reload.value = "Y";
	main_form.submit();
}
function formSubmitto(url){
	main_form.action = url;
	main_form.submit();
}
function fileOpen(url){
	pop_win = window.open(url,'file','scrollbars=yes,resizable=yes,width=640,height=480,left=100,top=100');	
}
function fileUpload(id, name, type){
	pop_win = window.open('/CommonLib/Field/Attachment.aspx?fid=' + id + '&fmn=' + name + '&ftp=' + type,'file','width=350,height=50,left=100,top=100');
	pop_win.focus();
}
function fileRemove(id, name, type){
	pop_win = window.open('/CommonLib/Field/Attachment.aspx?fid=' + id + '&fmn=' + name + '&ftp=' + type + '&del=1','file','width=10,height=10,left=1100,top=800');
}
function fileClose(){
	if (pop_win)
	    if (!pop_win.closed) pop_win.close();
	pop_win = null;
}
function jsDV_strTrim(str){
	var i = 0;
	var j = str.length - 1;
	trimstr = "";
	if (j < 0) return trimstr;
	flagbegin = true;
	flagend = true;
	while (flagbegin == true){
		if (str.charAt(i) == ' ') i++;
		else flagbegin = false;
	}
	while (flagend == true){
		if (str.charAt(j) == ' ') j--;
		else flagend = false;
	}
	if (j < i) return trimstr;
	else trimstr = str.substring(i, j + 1);
	return trimstr;
}
function jsDV_isValidMoney(strMoney){
	var pointPos;
	var pointCount = 0;
	var zeroFlag = 1;
	var str = strMoney;
	if (str.length < 1) return "0"; //empty input
	if (str.charAt(0) == '.'){
		if (str.length == 1) return "-1";
		else str = "0" + str;
	}
	if (str.charAt(str.length - 1) == '.') return "-1"; //end with '.'
	for (i = 0; i < str.length; i++){
		if ((str.charAt(i) >= '0' && str.charAt(i) <= '9') || (str.charAt(i) == '.')){
			if (str.charAt(i) != '0' && str.charAt(i) != '.') zeroFlag = 0;
			if (str.charAt(i) == '.') pointCount++;
			if (pointCount > 1) return "-1";
			continue;
		}
		else return "-1";
	}
	pointPos = str.indexOf(".", 0);
	if (pointPos >= 0){
		if (pointPos > 1 && str.charAt(0) == '0') return "-1";
		if (str.length - pointPos -1 > 2) str = str.substring(0, pointPos + 3);
	}
	else
		if (str.length > 1 && zeroFlag == 0)
			if (str.charAt(0) == '0') return "-1";
	return (zeroFlag) ? "0" : str;
}
function numericCheck(val, type, msg){
	var nr1 = val;
	var typeCheck = type;
	var flag = 0;
	var numberErrorMsg = msg;
	if(val == "") return false;
	if (numberErrorMsg == null) numberErrorMsg = "This entry must be a number.  Please remove all letters, special characters, and spaces.";
	switch(typeCheck){
		case 0: //int
			cmp = "-0123456789"; break;
		case 1: //int + commas
			cmp="0123456789,"; break;
		case 2: //float
			cmp = "0123456789.,"; break;
		case 3: //currency
			cmp = "0123456789.,$-"; break;
		case 4: //int + point
			cmp = "0123456789."; break;
		case 5: //for zip codes  
			cmp = "0123456789-"; break;
		default:
			cmp = "0123456789"; break;
	}
	for (var i=0; i<nr1.length; i++){
		tst = nr1.substring(i,i+1);
		if ((cmp.indexOf(tst)<0) || (cmp.indexOf(" ") != -1)) flag++;
	}
	if (flag != 0){
		if(numberErrorMsg != "nomsg") alert(numberErrorMsg);
		return false;
	}
	return true;
}
function validEmail(str, msg){
	var emailErrorMsg = msg;
	if(emailErrorMsg == null) emailErrorMsg = "Please enter a valid email address. Email addresses must include the\n@ sign and at least one period. (e.g. friendname@abc.com)";
	if (!isValidEmail(str)){
		if(emailErrorMsg != "nomsg") alert(emailErrorMsg);
		return false;
	}
	return true;
}
function isValidEmail(str){
	var at;
	var i = 0;
	var j = str.length - 1;
	var count = 0;
	at = str.indexOf("@", 0);
	if (at <= 0 || at == j) return false;
	while (i < at){
		if ((str.charAt(i) >= '0' && str.charAt(i) <= '9') ||
			(str.charAt(i) >= 'a' && str.charAt(i) <= 'z') ||
			(str.charAt(i) >= 'A' && str.charAt(i) <= 'Z') ||
			str.charAt(i) == '.' || str.charAt(i) == '&' || 
			str.charAt(i) == '?' || str.charAt(i) == '#' || 
			str.charAt(i) == '$' || str.charAt(i) == '*' || 
			str.charAt(i) == '+' || str.charAt(i) == '!' || 
			str.charAt(i) == '%' || str.charAt(i) == '\'' || 
			str.charAt(i) == '^' || str.charAt(i) == '/' || 
			str.charAt(i) == '_' || str.charAt(i) == '-')
				i++;
		else return false;
	}
	i = at + 1;
	if(str.charAt(i) == '.' || str.charAt(j) == '.') return false;
	while (i <= j){
		if(str.charAt(i) == '.'){
			count++;
			if (str.charAt(i + 1) == '.') return false;
			else i++;
		}
		if((str.charAt(i) >= '0' && str.charAt(i) <= '9') || (str.charAt(i) >= 'a' && str.charAt(i) <= 'z') ||
			(str.charAt(i) >= 'A' && str.charAt(i) <= 'Z') || str.charAt(i) == '_' || str.charAt(i) == '-')
			i++;
		else return false;
	}
	return (count == 0) ? false : true;
}
function openCalendar(ptr,name){
	url = "/spherelite/common/asp/calendar_popup.asp?date=" + escape(ptr.value) + "&inp=" + name;
	pop_win = window.open(url,"KinteraSphere","menubar=no,width=240,height=265,scrollbars,resizable");
	pop_win.focus();
}
function isDate(year, month, day){
	var daysInMonth = new Array(12);
	daysInMonth[1] = 31;
	daysInMonth[2] = 29;
	daysInMonth[3] = 31;
	daysInMonth[4] = 30;
	daysInMonth[5] = 31;
	daysInMonth[6] = 30;
	daysInMonth[7] = 31;
	daysInMonth[8] = 31;
	daysInMonth[9] = 30;
	daysInMonth[10] = 31;
	daysInMonth[11] = 30;
	daysInMonth[12] = 31;
	if (month <1 || month > 12) return false;
	if (day <1 || day > 31) return false;
	var intYear = parseInt(year, 10);
	var intMonth = parseInt(month, 10);
	var intDay = parseInt(day, 10);
	if (intDay > daysInMonth[intMonth]) return false; 
	if ((intMonth == 2) && (intDay > daysInFebruary(intYear))) return false;
	return true;
}
function daysInFebruary(year){
	if ((year%400)==0) return 29;
	else if ((year%100)==0) return 28;
	else if ((year%4)==0) return 29;
	else return 28;
}
function validAspDate(asp_year, asp_month, asp_day, val, textBox, type, msg1, msg2){
	var dateErrorMsg = msg1;
	var spaceErrorMsg = msg2;
	var indate = val;
	var flag = 0;
	if(indate == "") return false;
	if(dateErrorMsg == null)
    	dateErrorMsg = "You have entered an invalid date or date format. Please use the format MM/DD/YYYY without spaces.";
  	if(spaceErrorMsg == null)
    	spaceErrorMsg = "Please re-enter your date using the format MM/DD/YYYY without spaces.";
  	if(indate.indexOf(" ")!=-1){
    	if(dateErrorMsg != "nomsg"){
	  		alert(spaceErrorMsg);
	  		textBox.value = "";
      		textBox.focus();
		}  
    	return false;
  	}	
  	if (indate.indexOf("-")!=-1) var delimeter = "-";
  	else if (indate.indexOf("/")!=-1) var delimeter = "/";
  	else if (indate.indexOf(".")!=-1) var delimeter = ".";
  	else flag++;
  	var dateArray = indate.split(delimeter);
  	if((dateArray.length != 3) || ((dateArray[2].length != 2) && (dateArray[2].length != 4)) ||
    (dateArray[0].length < 1) || (dateArray[0].length > 2) || (dateArray[1].length < 1) ||
    (dateArray[1].length > 2)) {
    	flag++;
  	}
  	else if((numericCheck(dateArray[0], 0, dateErrorMsg)==false) || (numericCheck(dateArray[1], 0, dateErrorMsg)==false) || (numericCheck(dateArray[2], 0, dateErrorMsg)==false)) {  
		return false;
  	}
  	var intYear = parseInt(dateArray[2], 10);
  	if ((intYear >= 0) & (intYear <= 29)) dateArray[2] = 2000 + intYear;
  	else if ((intYear >= 30) & (intYear <= 99)) dateArray[2] = 1900 + intYear;
  	if (isDate(dateArray[2], dateArray[0], dateArray[1])==false) flag++;
  	if(flag != 0){
    	if(dateErrorMsg != "nomsg"){
      		alert(dateErrorMsg);
	  		textBox.value = "";
      		textBox.focus();
    	}
		return false;
  	}
	if ((dateArray[2] > 99) & (dateArray[2] < 1753)){
    	if(dateErrorMsg != "nomsg"){
      		alert("We do not support dates before 1753. Please choose a later year and try again.");
	  		textBox.value = "";
      		textBox.focus();
    	}
		return false;
  	}
  	if ( type=='before' && ( (dateArray[2] > asp_year)	
	|| (dateArray[2] == asp_year && dateArray[0] > asp_month) 
	|| (dateArray[2] == asp_year && dateArray[0] == asp_month && dateArray[1] > asp_day) ) ) {
    	if(dateErrorMsg != "nomsg") {
      		alert("We do not support dates after today.  Please try again.");
	  		textBox.value = "";
      		textBox.focus();
    	}
		return false;
  	}
  	if ( type=='after' && ( (dateArray[2] < asp_year)	
	|| (dateArray[2] == asp_year && dateArray[0] < asp_month) 
	|| (dateArray[2] == asp_year && dateArray[0] == asp_month && dateArray[1] < asp_day) ) ) {
    	if(dateErrorMsg != "nomsg") {
      		alert("We do not support dates before today.  Please try again.");
	  		textBox.value = "";
      		textBox.focus();
    	}
		return false;
  	}
  	indate = dateArray[0] + "/" + dateArray[1] + "/" + dateArray[2];
  	textBox.value = indate;  // Set the date in the form to the modified date.
  	return true;
}
function phoneCheck(val){
	var phonestr,formatphone;
	strphone = val;
	formatphone = "";
	var intcount=0; charcount=0;
	strint = "0123456789";
	strchar = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
	for (var i=0; i<strphone.length; i++){
		tst = strphone.substring(i,i+1);
		if (!((strchar.indexOf(tst)<0)||(strchar.indexOf(" ") != -1))) charcount++;
		if (!((strint.indexOf(tst)<0)||(strint.indexOf(" ") != -1))){
			if (intcount == 0) formatphone = formatphone + "(";
			if (intcount == 3) formatphone = formatphone + ") ";
			if (intcount == 6) formatphone = formatphone + "-";
			formatphone = formatphone + tst;
			intcount++;
		}
	}
	return (intcount==10 && charcount==10) ? formatphone : strphone;
}
function checkField(ptr, msg, warn){
	ptr.value = jsDV_strTrim(ptr.value);
	if (ptr.value==""){
    	if (warn!="") warn = warn+"\n- ";
    	warn = warn+msg;
		if (focus_field=="") focus_field = ptr;
  	}
	return warn;
}
function checkFile(ptr, msg, warn){
	if (ptr[0].value == "" || ptr[1].value == ""){
    	if (warn != "") warn = warn+"\n- ";
    	warn = warn+msg;
  	}
	return warn;
}
function checkSingleCheckbox(ptr, msg, warn){
	var c = "";
	if (ptr.checked == true) c = "checked";
	if (c == ""){
    	if (warn != "") warn = warn+"\n- ";
    	warn = warn+msg;
  	}
  	return warn;
}
function checkRadioCheckbox(ptr, msg, warn){
	var c = "";
	if(ptr.length!=null){
		if(ptr.length>1)
			for(var i=0; i<ptr.length; i++)
				if(ptr[i].checked == true) c = "checked";
		else
			if(ptr.checked == true) c = "checked";
	}
	else
		if(ptr.checked == true) c = "checked";
	if(c == ""){
    	if(warn != "") warn = warn+"\n- ";
    	warn = warn+msg;
  	}
  	return warn;
}
function checkSelect(ptr, msg, warn){
	var s = "";
	if (ptr.type=="select-one"){
		s = "selected";
		if ((ptr[0].selected == true) && (ptr.options[0].value == "")) s = "";
	}
	else
		if (ptr.length!=null)
			for (var i=0; i<ptr.length; i++)
				if ((ptr[i].selected == true) && (ptr.options[i].value != "")) s = "selected";
	if (s == ""){
    	if (warn != "") warn = warn + "\n- ";
    	warn = warn + msg;
		if (focus_field == "") focus_field = ptr;
	}
	return warn;
}
function checkSegment(ptr, msg, warn, ids, num){
	var c = 0;
	var arrid = ids.split(",");
	var idlen = arrid.length; 
	if (num > idlen) num = idlen;
	if (ptr.length!=null && ptr.length>1)
		for(var i=0; i<=idlen-1; i++)
			for (var j=0; j<ptr.length; j++)
				if ((arrid[i] == ptr[j].value) && (ptr[j].checked == true)) c++;
	else
		if (ptr.checked == true) c++;
	if (c < num){
    	if (warn != "") warn = warn+"\n- ";
    	warn = warn + num + " item(s) from " + msg;
  	}
  	return warn;
}
function setSelectValue(ptr, value){
	for (var i=0; i<ptr.length; i++)
		if (ptr.options[i].value == value) ptr[i].selected = true;
}
function setDynamicSelectValue(ptr, value){
	var o, l;
	for (var i=0; i<ptr.length; i++){
		o = ptr.options[i].value;
		l = o.split("~");
		if (l[1] == value) ptr[i].selected = true;
	}
}
function changeSelect(ptr1, ptr2, arr){
	var i, j, val;
	i = ptr1.selectedIndex;
	if(i>0){
		val = ptr1[i].value;
		for(i = 1; i < arr.length; i++)
			if(arr[i][0] == val) j = i;
		fillSelect(ptr2, arr[j]);
	}
	else clearSelect(ptr2);
	var fncall = 'document.' + ptr2.form.name + '.' + ptr2.name + '.onchange';
	if (eval(fncall) != null) eval(fncall + '();');
}
function fillSelect(ptr, arr){
	var o, l;
	clearSelect(ptr);
	var len = arr.length;
	for(var i = 1; i < len; i++){
		o = arr[i];
		l = o.split("~");
		ptr.options[i] = new Option(l[1], o);
	}
}
function clearSelect(ptr){
	var len = ptr.options.length;
	for(var i=(len-1); i >= 1; i--) ptr.options[i] = null;
	ptr.selectedIndex = 0;
}
function checkLength(ptr, maxlength){
	if(ptr.value.length > maxlength){		
    	alert("Please enter a note equal to or less than "+maxlength+" characters");
		ptr.focus();
    	return false;
  	}
}
function displayLength(ptr, tagid){
	if(document.all) document.all[tagid].innerHTML = ptr.value.length;
}
function alertText(msg1, msg2){
    if (msg1 != null && msg1 != "") alert(msg1);
    else alert(msg2);
}
function checkNumber(ptr, msg){
	ptr.value = jsDV_strTrim(ptr.value);
	if(ptr.value != "")
    	if(!numericCheck(ptr.value,0,'nomsg')){ 
        	alertText(msg, "Please enter a valid number");
			ptr.select();
        	ptr.focus();
        	return false;
		}
}
function checkFloat(ptr, msg){
	ptr.value = jsDV_strTrim(ptr.value);
	if(ptr.value != "")	
    	if(!numericCheck(ptr.value,2,'nomsg')){
			alertText(msg, "Please enter a valid number");
			ptr.select();
			ptr.focus();
			return false;
		}
}
function checkPointNumber(ptr, msg){
	ptr.value = jsDV_strTrim(ptr.value);
	if(ptr.value != "")
    	if(!numericCheck(ptr.value,4,'nomsg')){ 
			alertText(msg, "Please enter a valid number");
			ptr.select();
			ptr.focus();
			return false;
		}
}
function checkCurrency(ptr, msg){
	var amountValue = jsDV_strTrim(ptr.value.replace(/,|\$/g,""));
	var returnValue = "";
	if(amountValue != "")
		returnValue = jsDV_isValidMoney(amountValue)
		if(returnValue == "-1"){
			alertText(msg, "Please enter a valid currency");
			ptr.value = "";
        	ptr.focus();
        	return false;
		} 
		else
			ptr.value = returnValue;
}
function checkPercentage(ptr, msg){
	ptr.value = jsDV_strTrim(ptr.value);
	if(ptr.value != "")
    	if(!numericCheck(ptr.value,6,'nomsg')){ 
			alertText(msg, "Please enter a valid percent number.");
			ptr.select();
        	ptr.focus();
        	return false;
		}
}
function checkAge(ptr, msg){
	ptr.value = jsDV_strTrim(ptr.value);
	if(ptr.value != "")
		if(!numericCheck(ptr.value,0,'nomsg')){ 
        	alertText(msg, "Please enter a valid age.");
			ptr.value = "";
			ptr.focus();
			return false; 
		}   
}
function checkZip(ptr, msg){
	ptr.value = jsDV_strTrim(ptr.value);
	if(ptr.value != ""){
		var flag = 0;
		strchar = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 -";
		for(var i=0; i<ptr.value.length; i++){
			tst = ptr.value.substring(i,i+1);
    		if (strchar.indexOf(tst)<0)	flag++;
		}
		if(flag != 0){
        	alertText(msg, "Please enter a valid zip/postal code.");
			ptr.select();
        	ptr.focus();
        	return false; 
		}
	}
}
function checkCountryZip(zipptr, ctrptr, msg){
	var zip = "";
	var formatzip = "";
	var country = "";
	var flag = 0;
	var i;
	var err;
	zip = zipptr.value;
	for (i=0; i<ctrptr.length; i++)
		if (ctrptr[i].selected == true) country = ctrptr[i].value;
	if((zip != "") && (country == "CA")){
		var strchar = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
		var strint = "0123456789";
		for(i=0; i<zip.length; i++){
			tst = zip.substring(i,i+1);
			switch(i) {
				case 0:
				case 2:
				case 5:
					if (strchar.indexOf(tst)<0) flag++;
					break;
				case 1:
				case 4:
				case 6:
					if (strint.indexOf(tst)<0) flag++;	
					break;
				case 3:
					if(tst == "-") tst = " ";
					if(tst != " ") flag++;
					break;
				default:
					if(i>6) flag++;
					break;
			}
			formatzip = formatzip + tst;
			err = "Canadian postal code format is incorrect. Correct format is\nLDL DLD\nwhere L=letter, D=digit, and the space in the middle is required.";
		}
	}
	else {
		formatzip = zip;
		if (msg != null && msg != "") err = msg;
		else err = "Please enter a correct format zip/postal code";
	}
	if(flag != 0){
        alert(err);
        return false; 
	}
	else{
		zipptr.value = formatzip.toUpperCase();
		return true;
	}
}
function checkFormLoginName(thisform, msg1, msg2, msg3){
	if(thisform.LoginName != null && thisform.Password != null && thisform.VerifyPassword != null) {
		if(thisform.Password.value.length < 5){
			alertText(msg1, "Your password is less than 5 characters - please reenter");
			return false;
		}
		if(thisform.Password.value != thisform.VerifyPassword.value){
			alertText(msg2, "Your passwords do not match - please reenter");
			return false;
		}
		if(thisform.Password.value == thisform.LoginName.value){
			alertText(msg3, "Your password cannot be the same as your login name");
			return false;
		}
	}
	return true;
}

function disableEnterKey(e)
{
     var key;
     if(window.event)
          key = window.event.keyCode;     //IE
     else
          key = e.which;     //firefox
     if(key == 13)
          return false;
     else
          return true;
}