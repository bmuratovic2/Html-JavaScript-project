/*<div id="divf">
<label id="labela">08:00</label>
<label id="labela1">10:00</label>
<label id="labela2">12:00</label>
<label id="labela3">15:00</label>
<label id="labela4">17:00</label>
<label id="labela5">19:00</label>

</div >
*/

var naziv = document.getElementById("nazivPredmeta");


function fun(naziv){
    
    if (naziv)
    FiltrirajRaspored.filtrirajPredmet(naziv);

}
var div = document.getElementById("div");

function raspored(div){
    if (div)
    FiltrirajRaspored.postaviRaspored(div);
}

var imeAk = document.getElementById("tipAktivnosti");

function atkivnost(imeAk){
    
    FiltrirajRaspored.filtrirajTip(imeAk);
    
}
var time = document.getElementById("vrijemeTrajanja");

function trajanje(time){
  
//if ( typeof time.value != 'undefined' || time.value=='') {
    FiltrirajRaspored.filtrirajTrajanje(time);
   
//}
    
}

var dan = document.getElementById("dan");

function proslo(dan){
    var res = dan.substring(0, 1);
    if(res=='+'){
        FiltrirajRaspored.filtrirajBuduce(dan);
    }else if(res=='-'){
        FiltrirajRaspored.filtrirajProslo(dan);
    }

}


naziv.addEventListener('input', function(e){
    imeAk.value = '';
    time.value = '';
    dan.value = '';
    
});

imeAk.addEventListener('input', function(e){
    naziv.value = '';
    time.value = '';
    dan.value = '';
    
});

time.addEventListener('input', function(e){
    naziv.value = '';
    imeAk.value = '';
    dan.value = '';
   
});
dan.addEventListener('input', function(e){
    naziv.value = '';
    imeAk.value = '';
    time.value = '';
    
});

var dugme = document.getElementById("dugme");
