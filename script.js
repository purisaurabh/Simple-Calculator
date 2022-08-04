
var num1 = document.getElementById("first");
var num2 = document.getElementById("second");


var add_no = document.getElementById("add");
var sub_no = document.getElementById("sub");
var mul_no = document.getElementById("mul");
var div_no = document.getElementById("div");

var answer = document.getElementById("ans")

add_no.addEventListener("click" , function()
{
    answer.value = parseInt(num1.value) + parseInt(num2.value);
});

sub.addEventListener('click' , function()
{
    answer.value  = parseInt(num1.value) - parseInt(num2.value);
});

mul.addEventListener('click' , function()
{
    answer.value  = parseInt(num1.value) * parseInt(num2.value);
});

div.addEventListener('click' , function()
{
    answer.value  = parseInt(num1.value) / parseInt(num2.value);
});

