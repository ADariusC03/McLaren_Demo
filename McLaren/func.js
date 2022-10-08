var header = document.getElementById("header");
var gt = document.getElementById("gt");
var spider = document.getElementById("765lt");
var speedtail = document.getElementById("speedtail");
var solusgt = document.getElementById("solusgt");
var cars = document.getElementById("cars");
var secs = document.getElementById("secs");
var top= document.getElementById("top");
var power = document.getElementById("power");


gt.onclick = function(){
    header.style.backgroundImage = "url(Images/GT.png)";
    cars.innerHTML = "GT"
    secs.innerHTML = "3.2 s"
    top.innerHTML = "204 MPH"
    power.innerHTML = "620 PS"
}
spider.onclick = function(){
    header.style.backgroundImage = "url(Images/765LT.png)";
    cars.innerHTML = "765LT"
    secs.innerHTML = "2.5 s"
    top.innerHTML = "205 MPH"
    power.innerHTML = "765 PS"
}
speedtail.onclick = function(){
    header.style.backgroundImage = "url(Images/Speedtail.png)";
    cars.innerHTML = "SpeedTail"
    secs.innerHTML = "2.5 s"
    top.innerHTML = "250 MPH"
    power.innerHTML = "1070 PS"
}
solusgt.onclick = function(){
    header.style.backgroundImage = "url(Images/Solus-GT.png)";
    cars.innerHTML = "Solus GT"
    secs.innerHTML = "2.5 s"
    top.innerHTML = "200 MPH"
    power.innerHTML = "840 PS"
}