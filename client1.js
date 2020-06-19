var called = 0;
//Set up page when window has loaded
window.onload = navbar;


/* Sets up the page */
function navbar(){

    //Create a header, combo div and data div
    var ul = document.createElement("ul");
	ul.setAttribute("style","list-style-type: none; margin:0; padding:0; left:0;overflow: auto; background-color:#000000;");
	
	var audio = document.createElement("audio");
	audio.id = "audioid";
	
	var sc = document.createElement("source");
	sc.src = "resources/beep.mp3";
	sc.type = "audio/mp3";
	
	var li1 = document.createElement("li");
	li1.setAttribute("style","float:left;background-color:black;");
	
	var a1 = document.createElement("a");
	a1.setAttribute("style","cursor:pointer");
	a1.innerHTML = "HOMEPAGE";
	a1.onclick = function() {homeFunc()};
	
    
	var li2 = document.createElement("li");
	li2.setAttribute("style","float:left;background-color:black;");
	var a2 = document.createElement("a");
	a2.setAttribute("style","cursor:pointer");
	
	a2.setAttribute("style","cursor:pointer");
	a2.innerHTML = "ACCOUNT";

	a2.onclick = function() {accountFunc()};
	
	var li3 = document.createElement("li");
	li3.setAttribute("style","float:left;background-color:black;");
	var a3 = document.createElement("a");
	a3.setAttribute("style","cursor:pointer");
	
	a3.setAttribute("style","cursor:pointer");
	a3.innerHTML = "UPLOAD";

	a3.onclick = function() {uploadFunc()};
	
	var li4 = document.createElement("li");
	li4.setAttribute("style","float:left;background-color:black;");
	var a4 = document.createElement("a");
	a4.setAttribute("style","cursor:pointer");
	
	a4.setAttribute("style","cursor:pointer");
	a4.innerHTML = "ALL POSTS";
	
	a4.onclick = function() {showPostsFunc()};
	
	var li5 = document.createElement("li");
	li5.setAttribute("style","float:right;background-color:black;");
	var a5 = document.createElement("a");
	a5.setAttribute("style","cursor:pointer");
	
	a5.setAttribute("style","cursor:pointer;");
	li5.id = "picid";
	a5.innerHTML = "<img style = 'width:13px;height:13px' src = '/resources/spiral.png'></img>";
	
	a5.onclick = function() {showPostsFunc()};

    //Get a reference to the document body
    var docBody = document.getElementsByTagName("body")[0];//Only one body
    //Add HTML to page
	
	ul.appendChild(li1);
	li1.appendChild(a1);
	ul.appendChild(li2);
	li2.appendChild(a2);
	ul.appendChild(li4);
	li4.appendChild(a4);
	ul.appendChild(li3);
	li3.appendChild(a3);
	ul.appendChild(li5);
	li5.appendChild(a5);
	docBody.appendChild(ul);
	docBody.appendChild(audio);
	audio.appendChild(sc);
    
	if (called == 0){
		init();
	}
}



function playBeep(){
	var audio = document.getElementById("audioid");
	audio.play();
	
}

function stopBeep(){
	var audio = document.getElementById("audioid");
	audio.pause();
	
}


function init(){
	
	var docBody = document.getElementsByTagName("body")[0];//Only one body
	docBody.innerHTML = "";
	called = 1;
	navbar();
	var h1 = document.createElement("h1");
	h1.setAttribute("style","text-align:center;margin-top: 150px; font-family: font2; font-size: 80px;");
	h1.innerHTML = "Welcome to <br><br> Spirals";
	var main = document.createElement("main");
	main.setAttribute("style","padding-top:5%; width: 100%; ");
	docBody.appendChild(main);
	main.appendChild(h1);
	
}



function homeFunc() {
	
	var docBody = document.getElementsByTagName("body")[0];//Only one body
	var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {//Called when data returns from server
		if (this.readyState == 4 && this.status == 200) {
				docBody.innerHTML = "";
				var main = document.createElement("main");
				main.setAttribute("style","padding-top:5%; width: 100%;");
				var h1 = document.createElement("h1");
				h1.setAttribute("style","text-align:center;");
				h1.innerHTML = "HOMEPAGE";var div = document.createElement("div");
				var div = document.createElement("div");
				div.setAttribute("style","width: 75%; text-align:center; border: 2px solid white; margin:10px auto; background-color:  rgb(255,255,255); border-radius: 30px; padding:20px; margin-top:120px;");
				var p = document.createElement("p");
				p.innerHTML= "Spirals allow people to connect and share their artworks.<br><br>Share your art work and view others'. It's as simple as that!<br><br>Be mesmerized by the Spirals!";
				p.setAttribute("style","text-align:center;font-family:20px;color:black;");
				navbar();
				docBody.appendChild(main);
				main.appendChild(h1);
				main.appendChild(div);
				div.appendChild(p);
				playBeep();
		}
	}
	
    
	
	xhttp.open("GET", "/home", true);
    xhttp.send();
}

var inp = document.createElement("input");
var pwd = document.createElement("input");
var email1 = document.createElement("input");
var btn = document.createElement("button");
var username = document.createElement("input");
var pass = document.createElement("input");
var btn2 = document.createElement("button");
var logoutbtn = document.createElement("button");


inp.id = "input1";
pwd.id = "input2";
email1.id = "input3";

username.id = "username";
pass.id = "pass";

function accountFunc() {
	
	
	var docBody = document.getElementsByTagName("body")[0];//Only one body
	var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {//Called when data returns from server
		if (this.readyState == 4 && this.status == 200) {
				
				docBody.innerHTML = "";
				
				var main = document.createElement("main");
				main.setAttribute("style","padding-top:5%; width: 100%;");
				var h1 = document.createElement("h1");
				var loginstat = sessionStorage.getItem("loggedin");
				if (loginstat!="YES"){
					
					var par = document.createElement("p");
					h1.setAttribute("style","text-align:center;");
					h1.innerHTML = "ACCOUNT";
					start = false;
					var formdiv = document.createElement("div");
					formdiv.setAttribute("style","width: 75%; text-align:center; border: 2px solid white; margin:10px auto; background-color: rgba(255,255,255,0.8); border-radius: 30px; padding:20px;");
					
					var formdiv2 = document.createElement("div");
					formdiv2.setAttribute("style","width: 75%; text-align:center; border: 2px solid white; margin:10px auto; background-color:  rgba(255,255,255,0.8); border-radius: 30px; padding:20px; margin-top:5%;");
					
					var h2 = document.createElement("h2");
					h2.setAttribute("style","text-align:center; color:black;");
					h2.innerHTML = "Register";
					inp.setAttribute("style","width:25%; border-radius: 30px; margin-top:15px;");
					inp.placeholder = " Enter username";
					email1.setAttribute("style","width:25%; border-radius: 30px; margin-top:15px;");
					email1.placeholder = " Enter email";
					email1.type = "email";
					pwd.setAttribute("style","width:25%; border-radius: 30px; margin-top:15px;");
					pwd.placeholder = " Enter password";
					pwd.type = "password";
					btn.setAttribute("style","width:25%; border-radius: 30px ; margin-bottom: 15px;margin-top: 40px;" );
					btn.innerHTML = "Register"
					btn.onclick = function() {registerFunc1(document.getElementById("input1").value,document.getElementById("input2").value,document.getElementById("input3").value)};
					
					var h22 = document.createElement("h2");
					h22.setAttribute("style","text-align:center; color:black;");
					h22.innerHTML = "Login";
					username.setAttribute("style","width:25%; border-radius: 30px; margin-top:15px;");
					username.placeholder = " Enter username";
					pass.setAttribute("style","width:25%; border-radius: 30px; margin-top:15px;");
					pass.placeholder = " Enter password";
					pass.type = "password";
					btn2.setAttribute("style","width:25%; border-radius: 30px ; margin-bottom: 15px;margin-top: 40px;" );
					btn2.innerHTML = "Login"
					btn2.onclick = function() {loginFunc(document.getElementById("username").value,document.getElementById("pass").value)};
					
					navbar();
					var linebreak0 = document.createElement("br");
					var linebreak1 = document.createElement("br");
					var linebreak2 = document.createElement("br");
					var linebreak3 = document.createElement("br");
					var linebreak4 = document.createElement("br");
					var linebreak5 = document.createElement("br");
					var linebreak6 = document.createElement("br");
					
					docBody.appendChild(main);
					main.appendChild(h1);
					main.appendChild(formdiv);
					
					formdiv.appendChild(h2);
					formdiv.appendChild(linebreak0);
					
					formdiv.appendChild(inp);
					formdiv.appendChild(linebreak1);
					
					formdiv.appendChild(email1);
					formdiv.appendChild(linebreak2);
					
					formdiv.appendChild(pwd);
					formdiv.appendChild(linebreak3);
					
					formdiv.appendChild(btn);
					
					main.appendChild(formdiv2);
					
					formdiv2.appendChild(h22);
					formdiv2.appendChild(linebreak4);
					
					formdiv2.appendChild(username);
					formdiv2.appendChild(linebreak5);
					
					formdiv2.appendChild(pass);
					formdiv2.appendChild(linebreak6);
					
					formdiv2.appendChild(btn2);
					playBeep();
					
				}
				
				else{
					h1.setAttribute("style","text-align:center; color:white");
					h1.innerHTML = "LOGOUT";
					logoutbtn.setAttribute("style","width:25%; border-radius: 30px; border:1px solid black ;margin-top:15px; margin-bottom: 15px;" );
					logoutbtn.innerHTML = "Logout"
					logoutbtn.onclick = function() {logoutFunc()};
					var div = document.createElement("div");
					div.setAttribute("style","width: 75%; text-align:center; border: 2px solid white; margin:10px auto; background-color:  rgba(255,255,255,0.8); border-radius: 30px; padding:20px;");
					navbar();
					docBody.appendChild(main);
					main.appendChild(h1);
					main.appendChild(div)
					div.appendChild(logoutbtn);
					playBeep();
				}
		}
	}
	
	xhttp.open("GET", "/account", true);
    xhttp.send();
}

function logoutFunc() {

	sessionStorage.setItem("loggedin", "NO");
	
	var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {//Called when data returns from server
		if (this.readyState == 4 && this.status == 200) {
			if (this.responseText == "OK"){
				
				alert("Logged Out.")
			}
		}
	}
	accountFunc();
	xhttp.open("GET", "/logout", true);
    xhttp.send();
}


function registerFunc1(user, pass, email1){  //for checking if register username and passowrd is fine
	var xhttp = new XMLHttpRequest();
	a = 0;
	for (var i = 0; i < email1.length; i++) {
		if (email1.charAt(i)=="@"){
			a=1;
		}
	}
	if (user===""){
		alert("You did not add a username.");
	}
	else if (a==0){
		alert("Not a valid email, '@' missing.");
	}
	else{
		xhttp.onreadystatechange = function() {//Called when data returns from server
			if (this.readyState == 4 && this.status == 200) {
				if(this.responseText==="OK"){
					registerFunc2(user, pass, email1);
				}
				else 
					alert(this.responseText);
			}
		}
		var queryString = "user="+user+"&pass="+pass+"&email="+email1;
		xhttp.open("POST","/checkRegisterDetails",true);
		xhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xhttp.send(queryString);
	}
}


function registerFunc2(user, pass, email1){
	var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {//Called when data returns from server
		if (this.readyState == 4 && this.status == 200) {
			if(this.responseText==="OK"){
				alert("Registered!");
			}
			else 
				alert(this.responseText);
		}
	}
	
	var queryString = "user="+user+"&pass="+pass+"&email="+email1;
	
	xhttp.open("POST","/register",true);
	xhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	xhttp.send(queryString);
}



function loginFunc(user,pwd){
	
	var req = new XMLHttpRequest();
	
	req.onload = function(){
		if(req.status === 200){
			if(req.responseText==="OK"){
				
				updateLoginStatus(user);
			}
			else 
				alert(req.responseText);
		}
		else
			alert("error communicating");
		
		
	}
	
	var queryString = "user="+user+"&pass="+pwd;
	console.log(queryString);
	
	
	req.open("POST","/login",true);
	req.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	req.send(queryString);
	
}

function updateLoginStatus(user){
	
	var req = new XMLHttpRequest();
	
	req.onload = function(){
		if(req.status === 200){
			if(req.responseText==="OK"){
				alert("Logged in as "+user);
				sessionStorage.setItem("loggedin", "YES");
				accountFunc();
			}
			else 
				alert(req.responseText);
		}
		else
			alert("error communicating");
		
		
	}
	
	var queryString = "user="+user;
	console.log(queryString);
	
	
	req.open("POST","/updatestatus",true);
	req.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	req.send(queryString);
	
}

function uploadFunc() {

	var docBody = document.getElementsByTagName("body")[0];//Only one body
	
	var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {//Called when data returns from server
		if (this.readyState == 4 && this.status == 200) {
				
				docBody.innerHTML = "";
				
				var loginstat = sessionStorage.getItem("loggedin");
				if (loginstat=="YES"){
				
					var main = document.createElement("main");
					main.setAttribute("style","padding-top:5%; width: 100%;");
					var h1 = document.createElement("h1");
					h1.setAttribute("style","text-align:center;font-family:font1;");
					h1.innerHTML = "UPLOAD YOUR ART!";
					var div = document.createElement("div");
					div.setAttribute("style","width: 75%; text-align:center; border: 2px solid white; margin:10px auto; background-color: rgba(255,255,255,0.8); border-radius: 30px; padding:20px; padding-top:30px");
					var p = document.createElement("p");
					p.innerHTML = this.responseText;
					navbar();
					docBody.appendChild(main);
					main.appendChild(h1);
					main.appendChild(div);
					div.appendChild(p);
					playBeep();
				}
				
				else{
					alert("Please login first to upload.");
					accountFunc();
				}
				
		}
	}
	
	xhttp.open("GET", "/upload", true);
    xhttp.send();

}

function alertFunc(){
	alert("Submitted.");
}

function showPostsFunc() {

	var docBody = document.getElementsByTagName("body")[0];//Only one body
	
	var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {//Called when data returns from server
		if (this.readyState == 4 && this.status == 200) {

				docBody.innerHTML = "";
				var main = document.createElement("main");
				main.id = "idmain";
				main.setAttribute("style","padding-top:5%; width: 100%;");
				
				var searchdiv = document.createElement("div");
				var search = document.createElement("input");
				var searchbtn = document.createElement("button");
				
				searchdiv.setAttribute("style","width:100%");
				search.setAttribute("style","width:75%;padding:3.2px;");
				search.id = "searched";
				searchbtn.setAttribute("style","width:24%;");
				
				search.placeholder = "Search for posts here!";
				searchbtn.innerHTML = "Search";
				
				searchbtn.onclick = function() {searchFunc(document.getElementById("searched").value)};
				
				var h1 = document.createElement("h1");
				h1.setAttribute("style","text-align:center;");
				h1.innerHTML = "Here are all the posts!";
				
				var div = document.createElement("div");
				div.setAttribute("style","width: 75%; text-align:center; border: 2px solid white; margin:10px auto; background-color: rgba(255,255,255,0.8); border-radius: 30px; padding:20px; padding-top:30px");
				div.innerHTML = this.responseText;
				navbar();
				docBody.appendChild(main);
				main.appendChild(searchdiv);
				searchdiv.appendChild(search);
				searchdiv.appendChild(searchbtn);
				main.appendChild(h1);
				main.appendChild(div);	
				playBeep();				
		}
	}
	
	xhttp.open("GET", "/showPosts", true);
    xhttp.send();
}

function searchFunc(searcheditem){
	var docBody = document.getElementsByTagName("body")[0];//Only one body
	
	var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {//Called when data returns from server
		if (this.readyState == 4 && this.status == 200) {

				docBody.innerHTML = "";
				var main = document.createElement("main");
				main.id = "idmain";
				main.setAttribute("style","padding-top:5%; width: 100%;");
				var searchdiv = document.createElement("div");
				var search = document.createElement("input");
				var searchbtn = document.createElement("button");
				
				searchdiv.setAttribute("style","width:100%");
				search.setAttribute("style","width:75%;padding:3px;");
				search.id = "searched";
				searchbtn.setAttribute("style","width:24%;");
				
				search.placeholder = "Search for posts here!";
				searchbtn.innerHTML = "Search";
				
				searchbtn.onclick = function() {searchFunc(document.getElementById("searched").value)};
				var h1 = document.createElement("h1");
				h1.setAttribute("style","text-align:center;");
				h1.innerHTML = "Here are the search results:";
				
				var div = document.createElement("div");
				div.setAttribute("style","width: 75%; text-align:center; border: 2px solid white; margin:10px auto; background-color: rgba(255,255,255,0.8); border-radius: 30px; padding:20px; padding-top:30px");
				div.innerHTML = this.responseText;
				navbar();
				docBody.appendChild(main);
				main.appendChild(searchdiv);
				searchdiv.appendChild(search);
				searchdiv.appendChild(searchbtn);
				main.appendChild(h1);
				main.appendChild(div);	
				playBeep();
		}
	}
	var queryString = "searched="+searcheditem;
	xhttp.open("POST","/searchPosts",true);
	xhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	xhttp.send(queryString);
}

