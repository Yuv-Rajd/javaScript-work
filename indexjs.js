// cahllege !: your age in days 
function ageindays()
{
        var brthyear= prompt('what year you born..good freind?');
        var ageindays =(2022-brthyear)*365;
        var h1= document.createElement('h1');
        var txtans= document.createTextNode('you are '+ageindays+'  days old!');
        h1.setAttribute('id','ageindays');
        h1.appendChild(txtans);
        document.getElementById('flexboxres').appendChild(h1);

    
}
function reset()
{
    document.getElementById('ageindays').remove();

}


function gencat()
{
    var imgage= document.createElement('img');
    var div=document.getElementById('catflex');
    imgage.src="../images/11.jpg";
    div.appendChild(imgage)
}


function rpsgame(yourchoice)
{
    console.log(yourchoice);
    console.log(yourchoice.src);
    var humanchoice, botchoice;
    humanchoice=yourchoice.id;
    botchoice = numtochoice(randint());
    console.log(botchoice);
    result= decidewinner(humanchoice,botchoice);
    console.log(result);
    msg= finalemsg(result);
    console.log(msg);
    rpstofront(yourchoice.id,botchoice,msg);
}



function randint()
{
    return Math.floor(Math.random()*3);
}

function numtochoice(number)
{
    return ['rock','paper','scissor'][number];
}
function decidewinner(yourchoice,comchoice)
{
    var rpsdb =
    {
        'rock':{'scissor':1,'rock':0.5,'paper':0},
        'paper':{'rock':1,'paper':0.5,'scissor':0},
        'scissor':{'paper':1,'scissor':0.5,'rock':0},
    }
    var urscore = rpsdb[yourchoice][comchoice]
    var compscore = rpsdb[comchoice][yourchoice]

    return [urscore,compscore];
}
function finalemsg([yourscore,compscore])
{
    if (yourscore===0)
    {
        return{ 'message':'you lost!','color':'red'};
    }
    else if(yourscore=== 0.5)
    {
        return{ 'message':'you tied!','color':'DeepSkyBlue'};
    }
    else 
    {
        return{ 'message':'you won!','color':'green'};
    }
}
function rpstofront(humaninputchoice,botinputchoice,msg)
{
    var indb=
    {
        'rock':document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'scissor':document.getElementById('scissor').src
    }
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();

    var humandiv=document.createElement('div');
    var resdiv=document.createElement('div');
    var compdiv=document.createElement('div');


    humandiv.innerHTML="<img src ='"+ indb[humaninputchoice] +"' height=150 width=150 style='box-shadow:0px 10px 50px green;'>";
    resdiv.innerHTML = "<h1 style='color:"+msg['color']+";font-size:60px;padding:10px;text-shadow: 2px 2px 5px'>"+msg['message']+"</h1>";
    compdiv.innerHTML="<img src ='"+ indb[botinputchoice] +"' height=150 width=150 style='box-shadow:0px 10px 50px blue;'>";

    document.getElementById('flexbox33').appendChild(humandiv);
    document.getElementById('flexbox33').appendChild(resdiv);
    document.getElementById('flexbox33').appendChild(compdiv);
}

// challenge 4 change the color of button 
var all_button= document.getElementsByTagName('button');
console.log(all_button);

var copyallbutton=[];
for(let i=0;i<all_button.length;i++){
    copyallbutton.push(all_button[i].classList[1]);
}

console.log(copyallbutton);


function buttoncolorchange(buttonthing){
    if(buttonthing.value=='red'){
        buttonred();
        }
    if(buttonthing.value=='blue'){
        buttonblue();
    }
    if(buttonthing.value=='green'){
        buttongreen();
    }
    if(buttonthing.value=='reset'){
        buttonreset();
        }
    if(buttonthing.value=='random'){
        buttonrand();
        }
}

function buttonred(){
    for(let i=0;i<all_button.length;i++){
    all_button[i].classList.remove(all_button[i].classList[1]);
    all_button[i].classList.add('btn-danger');
    }
}
function buttonblue(){
    for(let i=0;i<all_button.length;i++){
    all_button[i].classList.remove(all_button[i].classList[1]);
    all_button[i].classList.add('btn-primary');
    }
}
function buttongreen(){
    for(let i=0;i<all_button.length;i++){
    all_button[i].classList.remove(all_button[i].classList[1]);
    all_button[i].classList.add('btn-success');
    }
}

function buttonreset(){
    for(let i=0;i<all_button.length;i++){
    all_button[i].classList.remove(all_button[i].classList[1]);
    all_button[i].classList.add(copyallbutton[i]);
    }
}
function buttonrand(){
    let choices=['btn-primary','btn-danger','btn-success','btn-warning'];

    for(let i=0;i<all_button.length;i++){
        let  randdnum= Math.floor(Math.random()*4);
        all_button[i].classList.remove(all_button[i].classList[1]);
        all_button[i].classList.add(choices[randdnum]);
    }
}