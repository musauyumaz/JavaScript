var age = prompt("Your age?");
var result ="";

do{
    result += age;
    result +="-";
    age--;
}while(age>0)
alert(result);