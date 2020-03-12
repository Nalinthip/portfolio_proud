
window.onload = pageLoad;
function pageLoad(){
	var myForm = document.getElementById("myForm");
    myForm.onsubmit = validateForm;
}

function validateForm() {
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
    var error = document.getElementById("errormsg");
    // var firstname = document.forms["myForm"]["firstname"].value;
    // var lastname = document.forms["myForm"]["lastname"].value;
    // var gender = document.forms["myForm"]["gender"].value;
    // var bday = document.forms["myForm"]["bday"].value;
    // var email = document.forms["myForm"]["email"].value;
    // var username = document.forms["myForm"]["username"].value;

    var x = document.forms["myForm"]["password1"].value;
    var y= document.forms["myForm"]["password2"].value;
    
if (x == y){
    // alert("Correct password");
    // error.innerHTML= "Correct password";
    return true;
}
else{
    // alert("discrepant password");
    error.innerHTML= "discrepant password";
    return false;
}
}
    


// require.onsubmit = validateForm;

// var count = 1;
// function postFunction() { 
// 	var  text = document.getElementById("text1").value;
// 	var  post = document.getElementById("post1");
// 	var  reply1 = document.getElementById("reply1");
// 	var  reply2 = document.getElementById("reply2");

// 	if(count == 1){
// 		post.innerHTML= text;
// 		count++;
// 	}
// 	else if(count == 2){
// 		reply1.innerHTML= text;
// 		count++;
// 	}
// 	else if(count == 3){
// 		reply2.innerHTML= text;
// 		count++;
// 	}
// 	document.getElementById("text1").value="";
// }

// function clearFunction() { 

// 	var  post = document.getElementById("post1");
// 	var  reply1 = document.getElementById("reply1");
// 	var  reply2 = document.getElementById("reply2");

// 	post.innerHTML= "";
// 	reply1.innerHTML= "";
// 	reply2.innerHTML= "";

// 	count = 1;

// }


