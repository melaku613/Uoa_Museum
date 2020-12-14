

// Navigation function
let userName = null;
let passWord = null;
let currentTab = "";
function showHomeTab() {
   
    document.getElementById("re").innerHTML= "";
    if (currentTab != "Home") {
    currentTab = "Home";
    showNoTabs();
    
    document.getElementById("Home").style.backgroundColor = "#e4e0e0";
    document.getElementById("HomeContent").style.display = "block";
    }
    else{
    showNoTabs();
    document.getElementById("Home").style.backgroundColor = "#e4e0e0";
    document.getElementById("HomeContent").style.display = "block";
    }
}

function showDisplayTab() {
    if (currentTab != "Display") {
    currentTab = "Display";
    showNoTabs();
    document.getElementById("Display").style.backgroundColor = "#e4e0e0";
    document.getElementById("DisplayContent").style.display = "inline";
    getDisplay()
    }
}

function showNewsTab() {
    if (currentTab != "News") {
    currentTab = "News";
    showNoTabs();
    document.getElementById("News").style.backgroundColor = "#e4e0e0";
    document.getElementById("NewsContent").style.display = "inline";
    getNews();
    }
}

function showRegisterTab() {
    if (currentTab != "Register") {
    currentTab = "Register";
    showNoTabs();
    document.getElementById("Register").style.backgroundColor = "#e4e0e0";
    document.getElementById("RegisterContent").style.display = "inline";
    }
}

function showShopeTab() {
    if (currentTab != "Shope") {
    currentTab = "Shope";
    showNoTabs();
    document.getElementById("Shope").style.backgroundColor = "#e4e0e0";
    document.getElementById("ShopeContent").style.display = "inline";
    getShope();
    }
}


function showCommentsTab(){
    if (currentTab != "Comments") {
    currentTab = "Comments";
    showNoTabs();
    document.getElementById("Comments").style.backgroundColor = "#e4e0e0";
    document.getElementById("CommentContent").style.display = "inline"; 
    }
}

function showNoTabs(){
    
    document.getElementById("Home").style.backgroundColor = "transparent";
    document.getElementById("Display").style.backgroundColor = "transparent";
    document.getElementById("News").style.backgroundColor = "transparent";
    document.getElementById("Comments").style.backgroundColor = "transparent";
    document.getElementById("Shope").style.backgroundColor = "transparent";
    document.getElementById("Register").style.backgroundColor = "transparent";
    

    document.getElementById("HomeContent").style.display = "none";
    document.getElementById("DisplayContent").style.display = "none";
    document.getElementById("NewsContent").style.display = "none";
    document.getElementById("CommentContent").style.display = "none";
    document.getElementById("ShopeContent").style.display = "none";
    document.getElementById("RegisterContent").style.display = "none";
    document.getElementById("popup").style.display = "none";


}

window.onload = function () {
    showHomeTab();
}

function getDisplay(){
    const uri =  "http://redsox.uoa.auckland.ac.nz/ms/MuseumService.svc/items";
    const xhr = new XMLHttpRequest();
    xhr.open("Get",uri, true);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onload = function () {
        const respons = JSON.parse(xhr.responseText);
        sendDisplay(respons);
    }
    xhr.send(null)

}

function sendDisplay(Displaysection){
    let tableContent = ""
    for (let i = 0; i < Displaysection.length; ++i){
        title = Displaysection[i].Title;
        Description = Displaysection[i].Description;
        image = Displaysection[i].ItemId;

        tableContent += "<section >" +"<h3>" + title +"</h3>" + "<p>" + Description+ "</p>" + "<img class = image src = http://redsox.uoa.auckland.ac.nz/ms/MuseumService.svc/itemimg?id=" + image + ">" +"</img>"+ "<hr></hr>" + "</section>";
        document.getElementById("DisplayContents").innerHTML= tableContent;

    }
}

function getNews() {
        const uri =  "http://redsox.uoa.auckland.ac.nz/ms/MuseumService.svc/news";
        const xhr = new XMLHttpRequest();
        xhr.open("Get",uri, true);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onload = function () {
        const respons = JSON.parse(xhr.responseText);
        sendNews(respons);
    }
    xhr.send(null)

}

function sendNews(NewsSection){
    let NewsTab = "";
    for (let i = 0; i < NewsSection.length; ++i){
        NewsTab += "<section><p> " + NewsSection[i].descriptionField  + "</p><img class = image src = "+ NewsSection[i].enclosureField.urlField +"></img>" + "<table><tr><th><a href =" + NewsSection[i].linkField+ ">" + NewsSection[i].titleField + "</a></th><th class = space>" + NewsSection[i].pubDateField + "</th></tr> </table><hr></hr></section>";
        document.getElementById("NewsContents").innerHTML= NewsTab;

    }
}

function getShope() {
    const uri =  "http://redsox.uoa.auckland.ac.nz/ms/MuseumService.svc/shop?term=";
    const xhr = new XMLHttpRequest();
    xhr.open("Get",uri, true);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onload = function () {
    const respons = JSON.parse(xhr.responseText);
    sendShope(respons);
}
xhr.send(null)

}

function sendShope(Shopecontent){
    let saleContent = ""
    for (let i = 0; i < Shopecontent.length; ++i){
        let title = Shopecontent[i].Title;
        let Description = Shopecontent[i].Description;
        const image= Shopecontent[i].ItemId;
        

        saleContent += "<section >" +"<h3>" + title +"</h3>" + "<img class = image src = http://redsox.uoa.auckland.ac.nz/ms/MuseumService.svc/shopimg?id=" + image + ">" +"</img>" + 
        "<table><tr><td><p>" + Description+ "</p></td><td>"  + '<input class = buybutton type="button"  value = "Buy Now" onClick="BuyNowFunction(\'' + image + '\')" />' + "</td></tr></table><hr></hr></section>";
        document.getElementById("ShopeContents").innerHTML= saleContent;

    }
}

function SearchFunction(){
    let typed = document.getElementById("myinput").value;
    const uri = "http://redsox.uoa.auckland.ac.nz/ms/MuseumService.svc/search?term="  + typed;
    const xhr = new XMLHttpRequest();
    xhr.open("GET", uri, true); 
    xhr.setRequestHeader("Accept", "application/json"); 
    xhr.onload = function () {       
        const resp = JSON.parse(xhr.responseText); 
        sendDisplay(resp);
        
    }
    xhr.send(null); 
}

function shopeSearchFunction(){
    let typed = document.getElementById("myinputs").value;
    const uri = "http://redsox.uoa.auckland.ac.nz/ms/MuseumService.svc/shop?term="  + typed;
    const xhr = new XMLHttpRequest();
    xhr.open("GET", uri, true); 
    xhr.setRequestHeader("Accept", "application/json"); 
    xhr.onload = function () {       
        const resp = JSON.parse(xhr.responseText); 
        sendShope(resp);
        
    }
    xhr.send(null); 
}


function commentsection(){
    
    const username = document.getElementById("name").value;
    const text = document.getElementById("textarea").value;
    const uri = "http://redsox.uoa.auckland.ac.nz/ms/MuseumService.svc/comment?name=" + username;
    
    const xhr = new XMLHttpRequest();
    xhr.open("POST",uri,true);
    xhr.setRequestHeader("Content-Type","application/json;charset=UTF-8");

    xhr.onload = function() {
        const iframe = document.getElementById("scroll_bar");
        iframe.src = iframe.src;
        document.getElementById("textarea").value = "";
        document.getElementById("name").value = "";
      }
      
      xhr.send(JSON.stringify(text));
}

function registersection(){
    const username = document.getElementById("username").value;
    const password = document.getElementById("psw").value;
    const address = document.getElementById("Address").value;
    const uri = " http://localhost:8188/MuseumService.svc/register";

    const xhr = new XMLHttpRequest();
    xhr.open("POST",uri,true);
    xhr.setRequestHeader("Content-Type","application/json;charset=UTF-8");
    

    details = {
        "Address": address,
        "Name": username,
        "Password": password
        };
    xhr.send(JSON.stringify(details));

    document.getElementById("thankyou").innerHTML= "completed, Thank you for registering with us " + username + "!"; 
	document.getElementById("username").value = null;
	document.getElementById("psw").value = null;

}

function BuyNowFunction(item){
	if (userName != null ){
	const uri =  "http://localhost:8189/Service.svc/buy?id=" + item;
        alert("Dear" + userName + ", Thank you for purchassing " + item + ". Our museum appreciates your custom.");
        
	}
	else{
	
	document.getElementById("popup").style.display = "inline";
	}  
}


function showpopup(){
    document.getElementById("popup").style.display= "inline";

}

function login(){
    userName = document.getElementById("usr").value;
    passWord = document.getElementById("pass").value;
	
    const uri =  "http://localhost:8189/Service.svc/user";
    const xhr = new XMLHttpRequest();
	console.log(userName);
	console.log(passWord);
    xhr.open("GET",uri,true,userName, passWord);
    xhr.withCredentials = true;
    xhr.setRequestHeader("Content-Type","application/json;charset=UTF-8");
    xhr.onload = function(){
	
	if (xhr.status == 200){
        console.log(xhr.responseText);
		
		document.getElementById("usr").value = null;
	    document.getElementById("pass").value = null;
		document.getElementById("login").innerHTML = "";
		document.getElementById("login").innerHTML= "<button class=loginbutton onclick=logoutTab() style=width:auto;>Log out</button>";
		showHomeTab();
		}
		else{
		    userName = null;
			passWord = null;
			document.getElementById("usr").value = null;
	        document.getElementById("pass").value = null;
			document.getElementById("re").innerHTML= "<p style=color:red;> Incorrect uername or password </P>";
				
		}

    }
    xhr.send(null);

}

function logoutTab(){
document.getElementById("usr").value = null;
document.getElementById("pass").value = null;
document.getElementById("login").innerHTML = "";
document.getElementById("login").innerHTML = "<button class = loginbutton onclick=showpopup() style=width:auto;>Log in</button>";
userName = null;
passWord = null;

showHomeTab();


}