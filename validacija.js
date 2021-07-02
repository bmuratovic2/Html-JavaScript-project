
    
  function validirajNaziv(ieNaziv) {
    
    var nesto = new RegExp('[A-Z]+[0-9]$');
   var den = ieNaziv.value;

    if (nesto.test(ieNaziv) && ieNaziv.length > 2 && ieNaziv.length < 7){
      document.getElementById("hh").style.backgroundColor = "lightgreen";
    }else{
      document.getElementById("hh").style.backgroundColor = "lightCoral";   
    }
     
  }

function validirajPocetak(iePocetak) {
  
   var timeSplit = iePocetak.split(':');

  var hours1 = timeSplit[0];
  var minutes1 = timeSplit[1];
  var meridian1 = timeSplit[3];

  if (hours1 > 12) {
    meridian1 = 'PM';
    hours1 -= 12;
  } else if (hours1 < 12) {
    meridian1 = 'AM';
    if (hours1 == 0) {
      hours1 = 12;
    }
  } else {
    meridian1 = 'PM';
  }

  if(hours1 > 7 && meridian1 =='PM'){
    document.getElementById("vr").style.backgroundColor = "lightCoral";
  }else{
    document.getElementById("vr").style.backgroundColor = "lightgreen";
  }
  
  
}



function validirajKraj(iePocetak,ieKraj) {

var niz = iePocetak.split(':'),
hours1,
minutes1,
meridian1;
hours1 = niz[0];
minutes1 = niz[1];
if (hours1 > 12) {
meridian1 = 'PM';
hours1 -= 12;
} else if (hours1 < 12) {
meridian1 = 'AM';
if (hours1 == 0) {
  hours1 = 12;
}
} else {
meridian1 = 'PM';
}


var nizKraj = ieKraj.split(':'),
sati,
minute,
merd;
sati = nizKraj[0];
minute = nizKraj[1];
if (sati > 12) {
  merd = 'PM';
sati -= 12;
} else if (sati < 12) {
  merd = 'AM';
if (sati == 0) {
  sati = 12;
}
} else {
  merd = 'PM';
}



var ukupnoPoc = niz[0]*60+niz[1];
var ukupnoKraj = nizKraj[0]*60+nizKraj[1];


if(ukupnoKraj > ukupnoPoc ){
  document.getElementById("vr1").style.backgroundColor = "lightgreen";
}else{
  document.getElementById("vr1").style.backgroundColor = "lightCoral";
}

}


function validirajTip(ieTip,iePocetak,ieKraj){

var niz = iePocetak.split(':'),
hours1,
minutes1,
meridian1;
hours1 = niz[0];
minutes1 = niz[1];
if (hours1 > 12) {
meridian1 = 'PM';
hours1 -= 12;
} else if (hours1 < 12) {
meridian1 = 'AM';
if (hours1 == 0) {
  hours1 = 12;
}
} else {
meridian1 = 'PM';
}


var nizKraj = ieKraj.split(':'),
sati,
minute,
merd;
sati = nizKraj[0];
minute = nizKraj[1];
if (sati > 12) {
  merd = 'PM';
sati -= 12;
} else if (sati < 12) {
  merd = 'AM';
if (sati == 0) {
  sati = 12;
}
} else {
  merd = 'PM';
}

var ukupnoPoc = niz[0]*60+niz[1];
var ukupnoKraj = nizKraj[0]*60+nizKraj[1];

var zajedno = ukupnoPoc + ukupnoKraj;

  if(ieTip.value==document.getElementById("predavanje")){
    if(zajedno > 0 && zajedno < 4){
      document.getElementById("drop").style.backgroundColor = "green";
    }else{
      document.getElementById("drop").style.backgroundColor = "red";
    }
  }else{
    if(zajedno > 44 && zajedno < 4){
      document.getElementById("drop").style.backgroundColor = "green";
    }else{
      document.getElementById("drop").style.backgroundColor = "red";
    }
  }



  /*var drop = document.getElementById("drop");

  drop.onchange = function() {
    if(drop.options==1){
      document.getElementById("predavanje").style.backgroundColor = 'lightgreen';
    }else{
      document.getElementById("vjezbe").style = "lightCoral";
    }
   
  }*/
  
 }



  /*return {
    validirajNaziv: validirajNaziv,
    validirajPocetak: validirajPocetak,
    validirajKraj: validirajKraj,
    validirajTip: validirajTip
  }

*/
