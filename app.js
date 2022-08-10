const submitbutton = document.getElementById("checkButton");
console.log(submitbutton);
const message = document.getElementById("message");
console.log(message);
var randomNumber = Math.round(Math.random() *100);
console.log(randomNumber);
var live=10;
var text;
function fun(){
    document.getElementById("myForm").requestFullscreen();
}

submitbutton.onclick= () =>{
    var Inputvalue = document.getElementById("textBox").value ;
    console.log(Inputvalue);
    live--;
    if(Inputvalue==randomNumber)
    {
        location.href=`./win.html`
    }
    else if(live==0)
    {
        location.href=`./lose.html`
    }
    else if(Inputvalue>randomNumber)
    {
        text=`Your guess is higher than my number. ${live} REMAIN`;
        
    }
    else if(Inputvalue<randomNumber){
        text=`Your guess is lower than my number. ${live} REMAIN`;
    }
    console.log(live);
    console.log(text);
    message.style.display="inherit";
    message.innerHTML=text;
    attemptCount.innerHTML=live;

}
