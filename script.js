var myString   = "https://www.zeeve.io/";
var myPassword = "myPassword";

var encrypted = CryptoJS.AES.encrypt(myString, myPassword);
var decrypted = CryptoJS.AES.decrypt(encrypted, myPassword);
document.getElementById("demo0").innerHTML = myString;
document.getElementById("demo1").innerHTML = encrypted;
document.getElementById("demo2").innerHTML = decrypted;
document.getElementById("demo3").innerHTML = decrypted.toString(CryptoJS.enc.Utf8);
