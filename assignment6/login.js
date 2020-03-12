function getParams() {
  	var idx = document.URL.indexOf('?');
  	var params = new Array();
  	if (idx != -1) {
  		var pairs = document.URL.substring(idx+1, document.URL.length).split('&');
  		for (var i=0; i<pairs.length; i++) {
  			nameVal = pairs[i].split('=');
  			params[nameVal[0]] = nameVal[1];
  		}
 	}
  	return params;
 }

window.onload = loginLoad;
function loginLoad(){
	// วิธีใช้ getParams()
	var parameter = getParams();
	console.log(parameter["username"]);

	var myLogin = document.getElementById("myLogin");
	myLogin.onsubmit = checkLogin;
	
}

function checkLogin(){
	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
	   var parameter = getParams();
	//    var idusername = document.getElementById("username");
	   var username2 = document.forms["myLogin"]["username2"].value;
	   var password = document.forms["myLogin"]["password"].value;
	
	   var username = parameter ["username"];
	   var x = parameter["password1"];

	   if(username != username2 && password != x){
		  alert("Incorrect");
		return false;
	   }
		else{
			alert("Correct");
		return true;
	   }
}



// var i=0 ;
// var result = 0;
// while(i<100){
//     if(i%2 == 0) {
//         result = result + i;
//     }
//      i++;
// }
// console.log(result);
// //คำนวณผลรวมตั้งแจ่ 0 ถึง 99 ที่หารด้วย2ลงตัวโดยใช้ while loop

// var sum = 0;
// for(var i =0 ; i<100;  i++){
//     if(i%3 == 0) {
//         sum = sum + i;
//     }
// }
// console.log(sum);
// //คำนวณผลรวมตั้งแจ่ 0 ถึง 99 ที่หารด้วย3ลงตัวโดยใช้ for loop

// var a = ["PIKA" ,"SQUIR"];
// console.log(a);
// a.push("MAGI"); //เพิ่มตัวสุดท้าย
// console.log(a);
// a.unshift("CHAR"); // เพิ่มตัวแรก
// console.log(a);
// a.pop();     //ลบตัวสุดท้าย
// console.log(a);
// a.sort();   //เรียงลำดับอักษร
// console.log(a);


// Window.onload = pageload;
// function pageload (){
// 	var clickbutton = document.getElementById("clickme");
// 	clickbutton.onclick=myfunction;
// }
// function myfunction (){
//     alert("hello");
// }




			