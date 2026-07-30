/* ==========================================
   PROTECTION.JS
   Protezioni base lato client
========================================== */

"use strict";


/* ===========================
   DISABILITA TASTO DESTRO
=========================== */

document.addEventListener("contextmenu",(e)=>{

    e.preventDefault();

});


/* ===========================
   DISABILITA DRAG IMMAGINI
=========================== */

document.addEventListener("dragstart",(e)=>{

    e.preventDefault();

});



/* ===========================
   BLOCCA SCORCIATOIE COMUNI
=========================== */

document.addEventListener("keydown",(e)=>{

    const key = e.key.toUpperCase();

    if(

        key==="F12" ||

        (e.ctrlKey && e.shiftKey && ["I","J","C","K"].includes(key)) ||

        (e.ctrlKey && ["U","S","A"].includes(key)) ||

        (e.metaKey && e.altKey && key==="I")

    ){

        e.preventDefault();
        e.stopPropagation();

    }

});


/* ===========================
   DISABILITA MENU TOUCH
=========================== */

document.addEventListener("touchstart",()=>{},{
    passive:true
});


/* ===========================
   BLOCCA COPIA
=========================== */

["copy","cut","paste"].forEach(event=>{

    document.addEventListener(event,(e)=>{

        e.preventDefault();

    });

});


/* ===========================
   AVVISO DEVTOOLS
=========================== */

(function(){

    const threshold = 160;

    setInterval(()=>{

        if(

            window.outerWidth-window.innerWidth>threshold ||

            window.outerHeight-window.innerHeight>threshold

        ){

            console.clear();

            console.log("%cAccesso non consentito.","font-size:20px;color:red;");

        }

    },1000);

})();