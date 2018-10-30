/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function cal()
{
    var text = document.getElementById('tt').value;
    document.getElementById('pp').innerHTML = "No. of Characters: "+text.length+"<br>";
    var s = text.split(" ");
    document.getElementById('pp').innerHTML+= "No. of Words: "+s.length+"<br>";
    var vowel = ["a","e","i","o","u","A","E","I","O","U"];
    var count = 0;
    for(i=0;i<text.length;i++)
    {
        for(j=0;j<vowel.length;j++)
        {
            if(text.charAt(i)==vowel[j])
            {
                count++;
                break;
            }
        }
    }
    document.getElementById('pp').innerHTML+= "No. of Vowels: "+count+"<br>";
    var spaces = s.length-1;
    var consonant = text.length-count-spaces;
    document.getElementById('pp').innerHTML+= "No. of Consonants: "+consonant+"<br>";
    document.getElementById('pp').innerHTML+= "No. of Spaces: "+spaces;
}

function grow(){
    var row = document.getElementById('r').value;
    var col = document.getElementById('c').value;
    document.getElementById('im').innerHTML= "";
    for(i=0;i<row;i++){
        for(j=0;j<col;j++){
            document.getElementById('im').innerHTML+= "<img src=download.jpeg>";
        }
        document.getElementById('im').innerHTML+= "<br>";
    } 
}

function change(i,j)
{
    if(i==1)
        document.getElementById('d').style.background = j;
    else if(i==2)
        document.getElementById('d').style.color = j;
    else if(i==3)
        document.getElementById('p1').style.fontSize = j+0+"%";//document.getElementById('s1').options[document.getElementById('s1').selectedIndex].text+0+"%";
    else if(i==4)
        document.getElementById('d').style.width = j+"px";
    else if(i==5)
        document.getElementById('d').style.height = j+"px";
    else if(i==6)
        document.getElementById('p1').style.opacity = j/100;
}

var imobj=null;
var animate;
function init()
{
    imobj=document.getElementById('mya');
    imobj.style.position='relative';
    imobj.style.left='0px';
    setInterval(cha,1000);
}
function start()
{
   imobj.style.left= parseInt(imobj.style.left) +10 +'px';
   animate=setTimeout(start,100);

}
function stop()
{
    clearTimeout(animate);
    imobj.style.left='0px';
}
window.onload=init;

function cha()
{
    var arr=["Screen-Shot-2018-01-26-at-5.28.22-PM-840x420.jpg", "dims.jpg","images.jpg","maxresdefault.jpg","screen-shot-2018-02-13-at-8-46-45-am.jpg"];
    var ir=Math.floor(Math.random()*5);
    document.getElementById('dm').style.backgroundImage = "url("+arr[ir]+")";
}
