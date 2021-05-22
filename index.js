// var greeting;
// var hour= hour;
// if (hour >= 18) {
// 	greeting = "Good Day!"
// 	console.log(greeting);
// 	document.write("World");
// }
// function hey() {
// 	var a = "Adithya!";
// 	return console.log("Hey, this is " +a);
// }
// hey();
// hey();
// hey = () => {
// 	var a = "Adithya!";
// 	return console.log("Hey, this is " +a);
// }
// hey();
// hey();
function display_c(){
var refresh=1000; // Refresh rate in milli seconds
mytime=setTimeout('display_ct()',refresh)
}
function display_ct() {
var x = new Date()
document.getElementById('ct').innerHTML = x;
display_c();}
setInterval(() => {
    d = new Date(); //object of date()
    hr = d.getHours();
    min = d.getMinutes();
    sec = d.getSeconds();
    hr_rotation = 30 * hr + min / 2; //converting current time
    min_rotation = 6 * min;
    sec_rotation = 6 * sec;
  
    hour.style.transform = `rotate(${hr_rotation}deg)`;
    minute.style.transform = `rotate(${min_rotation}deg)`;
    second.style.transform = `rotate(${sec_rotation}deg)`;
}, 1000);