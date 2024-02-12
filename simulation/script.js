const messages = ["Make yourself familiar with the equipments by hovering over them.",
   "Press on the next button.",
   "Click on the pipette.",
   "Click on the pipette to suck 3ml of distilled water and release it into the TLC chamber.",
   "Click on the pipette when placed in ethanol beaker to suck 3.5ml of it and release it into the TLC chamber.",
   "Click on the pipette when placed in the ethyl acetate beaker to suck 7ml of it and release it into the TLC chamber.",
   " Click on the lid to close the TLC chamber.",
   "Press the next button.",
   "Click on the ruler to place it at 1cm from the bottom of the TLC plate.",
   "Click on the pencil to mark a line at the bottom of the TLC plate.",
   "Press the next button.",
   "Click on blue ball-point pen to place an ink dot on the TLC plate.",
   "Press the next button." ,
   "Click on the TLC chamber lid to open it.",
   "Click on the TLC plate." ,
   "Click on the forceps to hold the TLC plate and place it inside the TLC chamber containing mobile-phase solvent.",
   "Click on the lid to close the TLC chamber.",
   "Wait for few seconds until some compounds are spotted on the plate.",
   "Click on the lid to open the TLC chamber. ",
   "Click on the forceps to take out the TLC  plate.",
   "Click on the next button",
   "Click on the ruler",
   "Click on the pencil",
   "Wait fot the TLC plate to dry!"
];

const messagesh=["उपकरणों के ऊपर माउस ले जाकर स्वयं को उनसे परिचित कराएं।",
"NEXT बटन दबाएँ।",
"पिपेट पर क्लिक करें।",
"3ml आसुत जल को भरने के लिए पिपेट पर क्लिक करें और इसे टीएलसी कक्ष में छोड़ दें।",
"इथेनॉल बीकर में रखे जाने पर पिपेट पर क्लिक करें और 3.5ml पिपेट को भरकर  टीएलसी चैम्बर में छोड़ दें।",
"जब पिपेट को एथिल एसीटेट बीकर में रखा जाए तो उस पर क्लिक करें और उसमें से 7ml भरकर टीएलसी चैम्बर में छोड़ दें।",
"टीएलसी चैम्बर को बंद करने के लिए ढक्कन पर क्लिक करें।",
"अगला बटन दबाएँ।",
"टीएलसी प्लेट के नीचे से 1 सेमी की दूरी पर रखने के लिए रूलर पर क्लिक करें।",
"टीएलसी प्लेट के नीचे एक रेखा चिह्नित करने के लिए पेंसिल पर क्लिक करें।",
"अगला बटन दबाएँ।",
"टीएलसी प्लेट पर स्याही का बिंदु लगाने के लिए नीले बॉल-पॉइंट पेन पर क्लिक करें।",
"अगला बटन दबाएँ।" ,
"इसे खोलने के लिए टीएलसी चैम्बर के ढक्कन पर क्लिक करें।",
"टीएलसी प्लेट पर क्लिक करें।" ,
"टीएलसी प्लेट को पकड़ने के लिए संदंश पर क्लिक करें और इसे मोबाइल-चरण विलायक वाले टीएलसी कक्ष के अंदर रखें।",
"टीएलसी चैम्बर को बंद करने के लिए ढक्कन पर क्लिक करें।",
"कुछ सेकंड तक प्रतीक्षा करें जब तक कि कुछ यौगिक प्लेट पर दिखाई न दें।",
"टीएलसी चैम्बर खोलने के लिए ढक्कन पर क्लिक करें। ",
"टीएलसी प्लेट को बाहर निकालने के लिए संदंश पर क्लिक करें।",
"अगला बटन दबाएँ।",
" रूलर पर क्लिक करें।",
"रेखा चिह्नित करने के लिए पेंसिल पर क्लिक करें।",
"टीएलसी प्लेट के सूखने तक प्रतीक्षा करें!"
];


var hindibtn = document.querySelector("#hindi")
var engbtn = document.querySelector("#eng")
var langselector = document.querySelector("#langselector")
var mes1  

var counter=0

var lang
function hindi1(){
    console.log(lang)
    lang="hindi"
    langselector.style.visibility="hidden"
    update()
}

function eng1(){
    console.log(lang)
    lang="eng"
    langselector.style.visibility="hidden"
    update() 
}



function speech1(){
    if(lang=="hindi"){
        mes1=messagesh[counter-1]
        console.log(mes1)
    }
    else if(lang=="eng"){
        mes1=messages[counter-1]
        console.log(mes1)
    }
    setTimeout(function(){ 
        const utterance = new SpeechSynthesisUtterance(mes1);
        utterance.lang = 'hi-IN';
        utterance.pitch=1;
        utterance.rate=1;
        utterance.volume=1;
        speechSynthesis.speak(utterance);
    },500)
}

    var inst=document.querySelector("#message")
     inst.innerText=messages[counter]
     function update(){
      console.log(messages[counter])
      if(lang=="hindi"){
          inst.innerText=messagesh[counter]
      }
      else if(lang=="eng"){
          inst.innerText=messages[counter]
      }
      counter+=1
      speech1()
  }
/*var counter=0
var speakbtn = document.querySelector("#speakbtn")
function speak(){
  var mes=messages[counter]
  const utterance = new SpeechSynthesisUtterance(mes);
  utterance.pitch=1;
  utterance.rate=1;
  utterance.volume=1;
  speechSynthesis.speak(utterance);
}

var inst=document.querySelector("#message")
inst.innerText=messages[counter]
function update(){
  counter+=1
  inst.innerText=messages[counter]
  speak()
}*/


var a=document.querySelector("#pencil1")
var b=document.querySelector("#introslide")
var h=document.querySelector("#readymade7ml")
var j=document.querySelector("#readymade3ml")
var k=document.querySelector("#readymade35ml")
var l=document.querySelector("#pencil")
var m=document.querySelector("#ruler")
var n=document.querySelector("#slide")
var line=document.querySelector("#line")
var line1=document.querySelector("#line1")

 var g=document.querySelector("#pipette7ml")
 var e=document.querySelector("#pipette35ml")
 var bottomtlc=document.querySelector("#bottomTLCliquid")
  var c=document.querySelector("#pipette3ml")
 var d=document.querySelector("#pipette")
 var i=document.querySelector("#cap")
 var n1=document.querySelector("#nxt")
 var nex=document.querySelector("#next")
 var n2=document.querySelector("#nxt1")
 var n3=document.querySelector("#nxt2")

 var capillary1=document.querySelector("#capillary1")
 var linedot=document.querySelector("#linedot")
 var lineslide=document.querySelector("#lineslide")
 var ink=document.querySelector("#ink")
 var inkfront=document.querySelector("#inkfront")
 var pen=document.querySelector("#pen")
 var hd1=document.querySelector("#hd1")
 var hd2=document.querySelector("#hd2")
 var ss=document.querySelector("#ss")
 var forceps1=document.querySelector("#forceps1")
 var forcep=document.querySelector("#forceps")
 var wetslide=document.querySelector("#wetslide")
 var dryslide=document.querySelector("#dryslide")

 var table=document.querySelector("#toptable")
 var tiles=document.querySelector("#tiles")
 var TCback=document.querySelector("#TCback")
 var TCfront=document.querySelector("#TCfront")
 var TCback1=document.querySelector("#TCback1")
 var TCfront1=document.querySelector("#TCfront1")

 var b1back=document.querySelector("#b1back")
 var b1middle=document.querySelector("#b1middle")
 var b1front=document.querySelector("#b1front")
 var b2back=document.querySelector("#b2back")
 var b2middle=document.querySelector("#b2middle")
 var b2front=document.querySelector("#b2front")
 var b3back=document.querySelector("#b3back")
 var b3middle=document.querySelector("#b3middle")
 var b3front=document.querySelector("#b3front")
  
 function next(){
   if(f==0){
      a.style.visibility="hidden";
      b.style.visibility="hidden";
      penintro.style.visibility="hidden";
      n1.style.visibility="visible";
      nex.style.visibility="hidden"
      forceps1.style.visibility="hidden";
      hpencil.style.visibility="hidden"
      hintroslide.style.visibility="hidden"
      hforceps1.style.visibility="hidden"
      hpenintro.style.visibility="hidden"
      hpipette.style.visibility="hidden"
      hTCfront.style.visibility="hidden"
      hb1front.style.visibility="hidden"
      hb2front.style.visibility="hidden"
      hb3front.style.visibility="hidden"
      hcap.style.visibility="hidden"
      f=1
      /*counter=1*/
      update();
   }
 }
 
 function pipepick(){
  console.log(f)
   if(f==1){
    console.log("hii")
     d.style.transform=" translate(0%,-700%) rotate(90deg)";
     setTimeout(function moveright(){
      setTimeout(function(){
        d.style.transform="translate(0%,-1900%) rotate(90deg)";    
      },1000)
      setTimeout(function(){
        d.style.transform="translate(187%,-1900%) rotate(90deg)";
      },2000)
      setTimeout(function(){
        d.style.transform="translate(187%,-940%) rotate(90deg)";
        f=2;
        update();
      },3000)},1000);
       f=2000
   }

  else if(f==2){
       c.style.opacity="100%";  
       
       setTimeout(function(){
        d.style.visibility="hidden"
        d.style.transitionDuration="0s"
        c.style.transitionDuration="0s"
        c.style.visibility="hidden"
        j.style.visibility="visible";
  
        j.style.transform="translate(0%,-50%)"
      },1000)
                                                                     
     setTimeout(function(){
        j.style.transform="translate(-1690%,-50%)"      
      },2000)
  
      setTimeout(function(){
        j.style.transform="translate(-1690%,0%)";
      },3000)
  
      setTimeout(function(){
        d.style.visibility="visible"
        c.style.visibility="visible"
        j.style.transitionDuration="0s"
        j.style.visibility="hidden"
         d.style.top="65%"
         d.style.left="0%"
         c.style.top="54.2%"
         c.style.left="38.8%"
      },4000)
  
      setTimeout(function(){
        c.style.transitionTimingFunction="ease"
        c.style.visibility="hidden"
        bottomTLCliquid.style.visibility="visible";
        bottomTLCliquid.style.opacity="100%";
        bottomTLCliquid.style.transitionDelay="0.3s"
        d.style.transitionDuration="1s"
      },5000)


      setTimeout(function(){
        d.style.transform="translate(187%,-1900%) rotate(90deg)"
      },6000)
       
      setTimeout(function(){                                       
        d.style.transform="translate(345%,-1900%) rotate(90deg)"
      },7000)
  
      setTimeout(function(){
        d.style.transform="translate(345%,-940%) rotate(90deg)" 
        f=3; 
        update();
     },8000)
    f=3000
  }

  else if(f==3){
    e.style.opacity="100%";          
    
    setTimeout(function(){
      k.style.visibility="visible";
      d.style.transitionDuration="0s"
      d.style.visibility="hidden";
      e.style.transitionDuration="0s"
      e.style.visibility="hidden"

      k.style.transform="translate(0%,-50%)"
    },1000)

    setTimeout(function(){
      k.style.transform="translate(-2550%,-50%)"     
   },2000)

   setTimeout(function(){
     k.style.transform="translate(-2550%,0%)"
 },3000)

 setTimeout(function(){
     k.style.transitionDuration="0s"
     k.style.visibility="hidden"
     d.style.visibility="visible"
     e.style.visibility="visible"
     d.style.top="65%"
     d.style.left="-25.5%"
     e.style.top="54.5%"
     e.style.left="39.3%"
 },4000)

  setTimeout(function(){
    e.style.transitionTimingFunction="ease"
    e.style.visibility="hidden"
    middleTLCliquid.style.visibility="visible";
    middleTLCliquid.style.opacity="100%";
    middleTLCliquid.style.transitionDelay="0.3s"
    d.style.transitionDuration="1s"
  },5000)


  setTimeout(function(){
    d.style.transform="translate(345%,-1900%) rotate(90deg)"
   },6000)
   setTimeout(function(){
     d.style.transform="translate(550%,-1900%) rotate(90deg)"   
    },7000)
    setTimeout(function(){
     d.style.transform="translate(550%,-900%) rotate(90deg)"
     f=4;
     update();
    },8000)
     f=4000;

  }

  else if(f==4){
    g.style.opacity="100%"          

    setTimeout(function(){
      h.style.visibility="visible"
      d.style.transitionDuration="0s"
      d.style.visibility="hidden"
      g.style.transitionDuration="0s"
      g.style.visibility="hidden"

      h.style.transform="translate(0%,-50%)"
    },1000)

    setTimeout(function(){
      h.style.transform="translate(-3400%,-50%)";
    },2000)
    

   setTimeout(function(){
    h.style.transform="translate(-3400%,0%)";   
     },3000)

   setTimeout(function(){
    h.style.transitionDuration="0s"
    h.style.visibility="hidden"
    d.style.transitionDuration="0s";
    g.style.transitionDuration="0s";
    d.style.visibility="visible"
    g.style.visibility="visible"

    d.style.top="65%";                              
   d.style.left="-59.5%"
   g.style.top="46.7%";
   g.style.left="39.25%";
     },4000)

  setTimeout(function(){
    g.style.opacity="0%";
  topTLCliquid.style.visibility="visible";
  topTLCliquid.style.opacity="100%";
  topTLCliquid.style.transitionDelay="0.3s"
   },5000)

   setTimeout(function(){
    /*d.style.transitionDelay="1s"
    d.style.opacity="0%"*/
     d.style.transitionDuration="1s"
     /*d.style.top="45%"*/
     d.style.transform="translate(550%,-1900%) rotate(90deg)"   
     },6000)
  
     setTimeout(function(){
     /* d.style.left="-66%"*/
      d.style.transform="translate(515%,-1900%) rotate(90deg)"
     },7000)

     setTimeout(function(){
       /*d.style.top="65%"*/
       d.style.transform="translate(515%,-700%) rotate(90deg)"
     },8000)

     setTimeout(function(){
      /*d.style.top="65%"*/
      d.style.transform="translate(475%,-60%) rotate(-0deg)"
      f=5
      update();
    },9000)

     f=5000
  }
 }

 function clos(){
  if(f==5){
    i.style.transform="translate(0%,-364%)";

    setTimeout(function(){
      i.style.transform="translate(135.5%,-364%)";
    },1000)

    setTimeout(function(){
      p1.style.transitionDuration="3s"
      p1.innerHTML="Your mobile-phase solvent is ready!";
      f=6;
      update();
    },2000)

    f=6000;
  }
  else if(f==12){
    i.style.transition="all"
    i.style.transitionDuration="2s"
    i.style.transform="translate(260%,-364%)"
    setTimeout(function(){
      i.style.transform="translate(260%,50%)"
      f=13
      update();
    },1000)
     f=13000;
  }

  else if(f==15){
    i.style.transform="translate(260%,-360%)"
    setTimeout(function(){
    i.style.transform="translate(135%,-360%)"
    update();
    },2000)

    setTimeout(function(){
      // ss.style.transitionDuration="0.5s"
      // ss.style.transitionTimingFunction="ease-in-out"
      ss.style.opacity="0%"
        update();
      f=16;
      },7500)
      f=16000;

  }
  else if(f==16){
    i.style.transform="translate(260%,-360%)"
    setTimeout(function(){
      i.style.transform="translate(260%,50%)"
      f=17
      update();
    },2000)
    f=17000;
  }
 }

 function nxt(){
  if(f==6){
    d.style.transitionDuration="0s";
    d.style.visibility="hidden";

    i.style.transitionDuration="0s";
    i.style.visibility="hidden";

    TCback.style.visibility="hidden";
    TCfront.style.visibility="hidden";
    bottomTLCliquid.style.transitionDuration="0s"
    bottomTLCliquid.style.visibility="hidden";
    middleTLCliquid.style.transitionDuration="0s"
    middleTLCliquid.style.visibility="hidden"
    topTLCliquid.style.transitionDuration="0s"
    topTLCliquid.style.visibility="hidden";

    b1back.style.visibility="hidden"
    b1middle.style.visibility="hidden"
    b1front.style.visibility="hidden"
    b2back.style.visibility="hidden";
    b2middle.style.visibility="hidden"
    b2front.style.visibility="hidden"
    b3back.style.visibility="hidden"
    b3middle.style.visibility="hidden"
    b3front.style.visibility="hidden"
    p1.style.transitionDuration="0s";
    p1.style.visibility="hidden"

    tiles.style.visibility="visible";
    table.style.visibility="visible";
    l.style.visibility="visible";
    m.style.visibility="visible"
    n.style.visibility="visible"
    m1.style.visibility="visible";
    n2.style.visibility="visible";
    f=7
    update();
  }
 }
 
function ruler(){
  if(f==7){   
  
   m.style.transform="translate(-304%,0%)";            
    setTimeout(function(){
      m.style.transform="translate(-304%,-55%) rotate(-90deg)";
      f=8
      update();
    },2000)
     f=8000;
  }

  else if(f==19){
    m.style.transform="translate(-304%,0%)";   
    setTimeout(function(){
      m.style.transform="translate(-304%,-99%) rotate(-90deg)"; 
      f=20;
      update();
    },2000)
    f=20000;
  }
 }

 function draw(){
  if(f==8){
     l.style.transform="translate(63.1%,-26%) rotate(20deg)";
    
     
     setTimeout(function(){
      l.style.transform="translate(95%,-26%) rotate(20deg)"
      line.style.opacity="100%"
      line.style.backgroundColor="black";
      l.style.transitionTimingFunction="ease-in-out";
     },2000)

  /*setTimeout(function(){
    l.style.transform="translate(65%,-73%) rotate(20deg)"
    m.style.transform="translate(-304%,-97%) rotate(-90deg)"
  },3000)

  setTimeout(function(){
    l.style.transform="translate(100%,-73%) rotate(20deg)"
    line1.style.opacity="100%"
    line1.style.backgroundColor="black";
    l.style.transitionTimingFunction="ease-in-out";

  },5000)*/

  setTimeout(function(){
    l.style.transform="translate(0%,0%) rotate(0deg)"
    m.style.transform="translate(0%,0%) rotate(0deg)"
  },3500)

  setTimeout(function(){
    f=9
    update();
  },4500)
   f=9000;
  }

 else if(f==20){
  l.style.transform="translate(65%,-75%) rotate(20deg)"

  setTimeout(function(){
    l.style.transform="translate(100%,-75%) rotate(20deg)"
    line1.style.visibility="visible"
    line1.style.backgroundColor="black";
    l.style.transitionTimingFunction="ease-in-out";
  },2000)

  setTimeout(function(){
    l.style.transform="translate(0%,0%) rotate(0deg)"
    m.style.transform="translate(0%,0%) rotate(0deg)"
    update();
  },3500)

  setTimeout(function(){
    dryslide.style.opacity="100%";
  },7500)
 }
 }


 function nxt1(){
  if(f==9){
    l.style.transitionDuration="0s"
    l.style.visibility="hidden"
    m.style.transitionDuration="0s"
    m.style.visibility="hidden"
    n.style.transitionDuration="0s"
    n.style.visibility="hidden"
    line.style.transitionDuration="0s"
    line.style.visibility="hidden"
    line1.style.transitionDuration="0s";
    line1.style.visibility="hidden"
    m1.style.visibility="hidden"
    table.style.visibility="hidden";
    tiles.style.visibility="hidden"

    topTLCliquid.style.transitionDuration="0s";
    topTLCliquid.style.visibility="hidden"
    lineslide.style.visibility="visible"
    n2.style.visibility="visible";
    pen.style.visibility="visible";
    f=10
    update();
  }
  else if(f==11){
    console.log(f)
    lineslide.style.transitionDuration="0s"
    lineslide.style.visibility="hidden"
    pen.style.transitionDuration="0s"
    pen.style.visibility="hidden";
    linedot.style.transitionDelay="0s"
    linedot.style.transitionDuration="0s"
    linedot.style.visibility="hidden";


    /*TCback.style.visibility="visible";
    TCfront.style.visibility="visible";
    middleTLCchamber.style.visibility="visible"
    middleTLCchamber.style.height="4.7%"
    middleTLCchamber.style.top="64%"
    TCback.style.left="56.5%";
    TCfront.style.left="44%";*/

    TCback1.style.visibility="visible";
    TCfront1.style.visibility="visible";
    middleTLCchamber1.style.visibility="visible";




     i.style.visibility="visible";
     i.style.top="59.5%";
     i.style.left="45.1%";
     hd1.style.visibility="visible";
     forcep.style.visibility="visible";
     f=12;
     update();
  }

  else if(f==18){
    forcep.style.transitionDuration="0s";
    forcep.style.visibility="hidden";
    hd2.style.transitionDuration="0s"
    hd2.style.visibility="hidden";
    i.style.transitionDuration="0s";
    i.style.visibility="hidden";
    TCback1.style.visibility="hidden";
    TCfront1.style.visibility="hidden";
    middleTLCchamber1.style.visibility="hidden"

    tiles.style.visibility="visible";
    table.style.visibility="visible";
    l.style.visibility="visible";
    l.style.transition="all";
    l.style.transitionDuration="1.8s"

    m.style.visibility="visible";
    m.style.transition="all";
    m.style.transitionDuration="1.8s"

    m1.style.visibility="visible";
    ss.style.visibility="visible";
    ss.style.width="4.5%";
    ss.style.height="25%";
    ss.style.top="20%";
    ss.style.left="47%";

    f=19;
    update();
  }
  
 }
 
 function mov(){
  console.log(f)
  if(f==10){
    pen.style.transform="translate(0%,-20%) rotate(60deg)"

    setTimeout(function(){
       pen.style.transform="translate(0%,-80%) rotate(60deg)"
    },1000)

    setTimeout(function(){
      pen.style.transform="translate(45%,-80%) rotate(60deg)"
    },2000)

    setTimeout(function(){
      linedot.style.transitionDelay="1s"
      linedot.style.opacity="100%";
      pen.style.transform="translate(45%,-40%) rotate(60deg)"
    },3000)

    setTimeout(function(){
      pen.style.transform="translate(0%,0%) rotate(0deg)"
      f=11
      update();
    },5000)

    f=11000;
  }
 }

 function horizon(){
  if(f==13){
    hd1.style.transitionDuration="0s";
    hd1.style.visibility="hidden";
    ss.style.visibility="visible";
    f=14;
    update();
  }
 }

 function forceps(){
  if(f==14){
    forcep.style.transform="translate(0%,-47%)";
    setTimeout(function(){
      forcep.style.transform="translate(53%,-47%)";
      
    },1000)
  

    setTimeout(function(){
      ss.style.transform="translate(0%,-145%)"
      forcep.style.transform="translate(53%,-119%)"
    },3500)
   
    setTimeout(function(){
      ss.style.transform="translate(415%,-145%)"
      forcep.style.transform="translate(105%,-119%)"
    },5500)

    setTimeout(function(){
      ss.style.transform="translate(415%,6.4%)"
      forcep.style.transform="translate(98%,-58%) rotate(-60deg)"
    },7500)

    setTimeout(function(){
      wetslide.style.transitionTimingFunction="ease-in-out"
      wetslide.style.visibility="visible";
      forcep.style.transform="translate(105%,-110%) rotate(0deg)"
    },10000)

    setTimeout(function(){
      forcep.style.transform="translate(15%,-110%) rotate(0deg)"
    },12000)

    setTimeout(function(){
      forcep.style.transform="translate(15%,0%) rotate(0deg)"
      f=15;
      update();
    },13500)
     f=15000;
  }
  else if(f==17){
    forcep.style.transform="translate(15%,-80%)"
    ss.src="/pics/wetslidenew1.png"
    ss.style.opacity="100%"
    ss.style.width="2.89%"
    ss.style.height="11.8%"
    ss.style.left="47.4%"
    wetslide.style.opacity="0%"
    setTimeout(function(){
      forcep.style.transform="translate(98%,-80%)"
    },1000)

    setTimeout(function(){
      forcep.style.transform="translate(98%,-55%) rotate(-60deg)"
    },3000)
     
    setTimeout(function(){
      ss.style.transform="translate(415%,-145%)"
      forcep.style.transform="translate(105%,-117%)"
      // forcep.style.transitionDuration="2.5s"
      // wetslide.style.transitionDuration="1.5s"
      // /*forcep.style.transitionDelay="0.19s"*/
      // forcep.style.transform="translate(98%,-153%) rotate(-60deg)"
      // wetslide.style.transform="translate(0%,-197%)"
     
    },6000)

    setTimeout(function(){
      ss.style.transform="translate(0%,-145%)"
      forcep.style.transform="translate(60%,-117%)"
    //  forcep.style.transitionDuration="2.2s"
    //   wetslide.style.transitionDuration="1.5s"
    //   /*forcep.style.transitionDelay="0.3s"*/
    //   forcep.style.transform="translate(52%,-153%) rotate(-60deg)"
    //   wetslide.style.transform="translate(-360%,-197%)"
    },8000)

    setTimeout(function(){
      forcep.style.transform="translate(60%,-47%)";
      ss.style.transform="translate(0%,0%)"
      //update();
      //  forcep.style.transitionDuration="2.3s"
      //  wetslide.style.transitionDuration="1.5s"
      //  /* forcep.style.transitionDelay="0.24s"*/
      //   forcep.style.transform="translate(52%,-55%) rotate(-60deg)"
      //   wetslide.style.transform="translate(-360%,-1%)"
      },9500)

      setTimeout(function(){
        ss.style.transitionDuration="0s"
        ss.style.visibility="hidden"
        hd2.style.visibility="visible"
        forcep.style.transform="translate(5%,-47%)";
        /*dryslide.style.visibility="visible";
         dryslide.style.opacity="100%"*/
      },12000)

      setTimeout(function(){
        forcep.style.transform="translate(5%,0%)";
       
      },13000)

      setTimeout(function(){
        f=18
       update();
      },14000)
  }
   }
  




/*function googleTranslateElementInit() {
   new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
 }*/