
var generateBtn = document.querySelector("#generate");
//asigung arrays
var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var uc = "ASDFGHJKLZXCVBNMQWERTYUIOP"
var usarray = uc.split("");
var lc = "asdfghjklzxcvbnmqwertyuiop"
var lcarray = lc.split("")
var sc = "!@#$%^&*";
var scarray = sc.split("")


function generatePassword() {
  //prompt for password length
 
   confirmlength = prompt("How long you want your password to be?");
   
  if (confirmlength < 8 || confirmlength > 128) {
    alert("please pick a number between 8-128 thank you!!");
  confirmlength = prompt("How long you want your password to be?");
   
  }
  
  alert(`Your password will be ${confirmlength} characters long `);
 
  //Password Charachters.
  var ucconfirm = confirm("would you like uppercase?");
  var numconfirm = confirm("would you like to have numbers?");
  var lcconfirm = confirm("would you like  lowercase?");
  var scconfirm = confirm ("would you like Specal Character?");
  if (numconfirm === false && ucconfirm === false && lcconfirm === false && scconfirm === false) {
    alert("you must select at least one characters");
    var ucconfirm = confirm("would you like uppercase?");
    var numconfirm = confirm("would you like to have numbers?");
    var lcconfirm = confirm("would you like  lowercase?");
    var scconfirm = confirm("would you like Specal Character?");
  }
  //action nedded !!
  var passCh = []
  if (ucconfirm) {
    passCh = passCh.concat(usarray)
    console.log(passCh);
  }
if (numconfirm) {
  passCh = passCh.concat(num)
  console.log(passCh);
}

 
if (lcconfirm) {
  passCh = passCh.concat(lcarray)
  console.log(passCh);
}
if (scconfirm) {
  passCh = passCh.concat(scarray)
  console.log(passCh);
}

var finalpass =""
  for (var i = 0; i < confirmlength; i++) {
    finalpass = finalpass + passCh[Math.floor(Math.random() * passCh.length)];
  }
  console.log(finalpass);
  return finalpass;

}


function writePassword() {
  var password = generatePassword();
  var passwordText= document.querySelector("#password");
  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);