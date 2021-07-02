
function trenutniCas(divRaspored,trenutnoVrijeme){

    var [datum,vrijeme] = trenutnoVrijeme.split("T");
    var [godine,mjesec,dan] = datum.split("-");
    var [sati,minute] = vrijeme.split(":");

    var trenutnoUkupnoMinuta = parseInt(sati) * 60 + parseInt(minute);
    var wtPoc = 540;
    var wtKraj = 720;
    var wtvjezbPoc = 720;
    var wtvjezbKraj = 810;
    var rmapredPoc = 840;
    var rmapredKraj = 1020; 
    var rmavjezbePoc = 750;
    var rmavjezbeKraj = 840;
    var dmtutPoc = 840;
    var dmtutKraj = 960;
    var dmpredPoc = 960;
    var dmpredKraj = 1140;
    var oipredPoc = 720;
    var oipredKraj = 900;

    if(trenutnoUkupnoMinuta >= wtPoc && trenutnoUkupnoMinuta <= wtKraj){
        document.getElementById("wtpred").style.backgroundColor = "lightgreen";
        document.getElementById("wtpred").style.border = "3px solid black";
    }
    if(trenutnoUkupnoMinuta >=wtvjezbPoc && trenutnoUkupnoMinuta < wtvjezbKraj){
        document.getElementById("wtvjezbe").style.backgroundColor = "lightgreen";
        document.getElementById("wtvjezbe").style.border = "3px solid black";
    }
    if(trenutnoUkupnoMinuta >=rmapredPoc && trenutnoUkupnoMinuta < rmapredKraj){
        document.getElementById("rmapred").style.backgroundColor = "lightgreen";
        document.getElementById("rmapred").style.border = "3px solid black";
    }
    if(trenutnoUkupnoMinuta >=rmavjezbePoc && trenutnoUkupnoMinuta < rmavjezbeKraj){
        document.getElementById("rmavjezbe").style.backgroundColor = "lightgreen";
        document.getElementById("rmavjezbe").style.border = "3px solid black";
    }
    if(trenutnoUkupnoMinuta >= dmtutPoc && trenutnoUkupnoMinuta < dmtutKraj){
        document.getElementById("dmtut").style.backgroundColor = "lightgreen";
        document.getElementById("dmtut").style.border = "3px solid black";
    }
    if(trenutnoUkupnoMinuta >= dmpredPoc && trenutnoUkupnoMinuta < dmpredKraj){
        document.getElementById("dmpred").style.backgroundColor = "lightgreen";
        document.getElementById("dmpred").style.border = "3px solid black";
    }
    if(trenutnoUkupnoMinuta >= oipredPoc && trenutnoUkupnoMinuta < oipredKraj){
        document.getElementById("oipred").style.backgroundColor = "lightgreen";
        document.getElementById("oipred").style.border = "3px solid black";
    }
       
}