
const messages = [" Step:1) Make yourself familiar with the equipments by hovering over them.",
    " Step:2) Click on the ethanol button to pour 3.5ml of it .",
    " Step:3) Click on the ethyl acetate button to pour 7ml of it.",
    " Step:4) Wait for few seconds and press the next button!",
   " Step:5) Click on the forceps button to hold the plate.",
   " Step:6) Click on the slide button",
   " Step:7) Click on the ruler button to place it above 1cm from the bottom of the plate",
   " Step:8) Click on the pencil to draw a line",
   " Step:9) Press the next button!",
   " Step:10) Press the forceps button.",
   " Step:11) ",  
];

var counter=0
let message = messages[counter];
document.getElementById("message").innerHTML = message;

/*var cyl=document.querySelector("#C1")
var a= document.querySelector("#filled")
var b=document.querySelector("#half")
var f=0
function pour(){
   if(f==0){
      a.style.transform="translate(-89px,-88%) rotate(-52deg)";
      f=1
     update();
   }
   setTimeout(backfilled,3500);
   function backfilled(){
      a.style.transform="translate(4px,-1px)";
   }
   setTimeout( function cylinpour(){
      cyl.style.transform="translate(-39.5%,-40%) rotate(-70deg)"
      b.style.backgroundColor="rgb(171, 255, 255)";
   },5700);
   setTimeout(function revC1(){
      cyl.style.transform="translate(0%,0%) rotate(0deg)"

   },8200);
    /*  b.style.backgroundColor="rgb(171, 255, 255)";
}

var c= document.querySelector("#ethanol")
function pourethanol(){
   if(f==1){
      c.style.transform="translate(-220px,-170px) rotate(-60deg)";
      f=2
      update(); 
      setTimeout(backethan,4000);
      function backethan(){
         c.style.transform="translate(2.6px,-1px)";
      }
      setTimeout( function cylinpour(){
         cyl.style.transform="translate(-39.5%,-49.5%) rotate(-70deg)"
      },6000);
      setTimeout(function revC1(){
         cyl.style.transform="translate(0%,0%) rotate(0deg)"
   
      },8500);
   }
}

var h= document.querySelector("#pop")
var d= document.querySelector("#acetate")
function pouracetate(){
   if(f==2){
      d.style.transform="translate(-330px,-170px) rotate(-60deg)";
      setTimeout(backacetate,4000);
      function backacetate(){
         d.style.transform="translate(0.6px,-1px)";    
        
          setTimeout( function cylinpour(){
            cyl.style.transform="translate(-39.5%,-49.5%) rotate(-70deg)"
         },2000);
         setTimeout(function revC1(){
            cyl.style.transform="translate(0%,0%) rotate(0deg)"
      
         },5000);
         setTimeout(hidebeakers,5000);
         function hidebeakers(){
           a.style.visibility="hidden";
           c.style.visibility="hidden";
           d.style.visibility="hidden";
           cyl.style.visibility="hidden";
         }
      }
    
      setTimeout(text,15000);
      function text(){
         h.innerHTML="Your mobile-phase solvent is ready!";
      }
      e.style.transform="translateX(255px)";
      g.style.transitionDelay="13s";
      g.style.transitionTimingFunction="ease";
      g.style.transform="translateX(255px)";
      f=3
      update();
   }
}
 
var i= document.querySelector("#slide")
var j= document.querySelector("#pencil")
var k= document.querySelector("#ruler")
var l= document.querySelector("#forceps")
var e= document.querySelector("#smooth")
var g= document.querySelector("#half")
function next(){
   if(f==3){
      g.style.transitionDuration="0s";
      g.style.transitionDelay="0s";
      g.style.visibility="hidden";
      e.style.visibility="hidden";
      e.style.transitionDuration="0s";
      e.style.transitionDelay="0s";
      h.style.visibility="hidden";
      
      document.getElementById("#tiles").style.visibility="visible";
      document.getElementsById("#labpic").style.visibility="hidden";
      /*button.style.opacity="0%";
      btn.style.opacity="0%";
      bt.style.opacity="0%";

      i.style.visibility="visible";
      j.style.visibility="visible";
      k.style.visibility="visible";
      l.style.visibility="visible";
   
      b1.style.visibility="visible";
      b2.style.visibility="visible";
      b3.style.visibility="visible";
      b4.style.visibility="visible";
      document.getElementById("nxt").style.visibility="visible";
      f=4 
      update();
      
   }
}

function pickfo(){
   if(f==4){ 
            l.style.transform="translateY(-110%)";
            setTimeout(force,3000);
            function force(){
               l.style.transform="translate(-70%,-110%)";
            }
            f=5;
            update();
   }
}

function pickslide(){
      if(f==5){
         i.style.transform="translateY(-60%)";
         l.style.transform+="translateY(-120%)";
         i.style.transitionTimingFunction="linear";
         l.style.transitionTimingFunction="linear";
        /* l.style.visibility="hidden";
         f=6
      }
   update();
}

function placeruler(){
   if(f==6){
      k.style.transform="translate(26%, -3.8%) rotate(90deg)";
      setTimeout(horiz,3000);
      function horiz(){
         k.style.transform=" translate(50%,-102.5%) rotate(180deg)";
      }
         update();
            f=7
   }
}
var m=document.querySelector("#line")
function move(){
   if(f==7){
      m.style.visibility="visible";
      j.style.transform="translate(-66.5%,-65%) rotate(-20deg)";
     setTimeout(draw,3000);
     function draw(){
      j.style.transform="translate(5%,-60%)";
      m.style.backgroundColor="black";
      j.style.transitionTimingFunction="ease-in-out";
    }
    setTimeout(backscale,6600);
    function backscale(){
      k.style.transform="translate(-0%,0%)";
      j.style.transform="translate(-0%,0%)";
      i.style.transitionTimingFunction="linear";
      i.style.transform="translate(-0%,0%)";
      l.style.transform="translate(-72%,-110%)";
      m.style.transitionTimingFunction="linear";
      m.style.top="63.3%";
    }
    f=8
    update();
   }
}
 
var n= document.querySelector("#forceps1")
var o= document.querySelector("#inkslide")
var p= document.querySelector("#capillary")
var q= document.querySelector("#inkbeaker")
function nxt(){
   if(f==8){
   i.style.visibility="hidden";
   i.style.transitionDelay="0s";
   i.style.transitionDuration="0s";

   j.style.visibility="hidden";
   j.style.transitionDelay="0s";
   j.style.transitionDuration="0s";

   k.style.visibility="hidden";
   k.style.transitionDelay="0s";
   k.style.transitionDuration="0s";

   l.style.visibility="hidden";
   l.style.transitionDelay="0s";
   l.style.transitionDuration="0s";

   m.style.visibility="hidden";
   m.style.transitionDelay="0s";
   m.style.transitionDuration="0s";

   b1.style.opacity="0%";
   b2.style.opacity="0%";
   b3.style.opacity="0%";
   b4.style.opacity="0%";

   n.style.visibility="visible";
   o.style.visibility="visible";
   p.style.visibility="visible";
   q.style.visibility="visible";
   document.querySelector("#inkbeaker1").style.visibility="visible";

   b5.style.visibility="visible";
   b6.style.visibility="visible";
   b7.style.visibility="visible";
   b8.style.visibility="visible";
   }
  f=9
  update();
}

function hold(){
   n.style.transform="translateY(-140.5%)";
   setTimeout(function forleft(){
      n.style.transform="translate(-31.5%,-128%)";
   },3700);
}

function cappick(){
   p.style.transform=" translateY(-210%) rotate(90deg)"
   setTimeout(function leftcap(){
      p.style.transform=" translate(-30%,-200%) rotate(-90deg)";
      p.style.zIndex="0"
      document.querySelector("#inkbeaker").style.visibility="1"
      document.querySelector("#inkbeaker1").style.visibility="-1"
   },4000);
}*/
  var f=0
var a=document.querySelector("#pencil1")
var b=document.querySelector("#introslide")
 function next(){
   if(f==0){
      a.style.visibility="hidden";
      b.style.visibility="hidden";
      f=1
   }
 }

 var c=document.querySelector("#cap")
 function open(){
  if(f==1){
   c.style.transform="translate(-20%,-30%)"
   f=2
  }
 }

 var d=document.querySelector("#pipette")
 function cappick(){
   if(f==2){
     d.style.transform="translate(0%,0%) rotate(90deg)";
   }
 }

  
var z= "<br>"
function update(){
   counter+=1
   let col=messages[counter];
   message=message+z+messages[counter]
   
   setTimeout(inst,3500);
   function inst(){
      document.getElementById("message").innerHTML = message;
   }
}

/*function googleTranslateElementInit() {
   new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
 }*/