var a=document.querySelector("h1")
a.innerHTML="changed html"
a.style.background="pink"
a.addEventListener("click",function(){
    a.style.background="yellow"
})
a.addEventListener("double_click",function(){
    a.style.background="pink"
})
var b=document.querySelector("#bulb")
var btn=document.querySelector("button")
var flag=0
btn.addEventListener("click",function(){
    if(flag==0){
    b.style.background="yellow"
    flag=1
    }
    else{
       b.style.background="white"
       flag=0 
    }
})
var c=document.querySelectorAll("p")
c.addEventListener("click",function()
{
    c.innerHTML="Hello world"
    c.style.background="blue"
})
var d=document.getElementById("#box")
d.textContent="<h3>hello</h3>";