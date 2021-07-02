var FiltrirajRaspored = (function () {
   
    
    postaviRaspored = function(div){
        
    }


    filtrirajPredmet = function(dioNazivaPredmeta) { 

      var celije = document.getElementsByTagName("td");
        var tabela = document.getElementById("mojaTabela"); 
        var red = document.getElementsByTagName("tr");
        var cell = document.createElement("td");
    for(let k=0 ; k < red.length ; k++){
        
        for( let j=0; j < celije.length-1; j++ ){
            if(!celije[j].innerHTML.includes("Ponedjeljak") && !celije[j].innerHTML.includes("Utorak") && !celije[j].innerHTML.includes("Srijeda") && !celije[j].innerHTML.includes("Četvrtak") && !celije[j].innerHTML.includes("Petak") ){
                 if (!celije[j].innerHTML.includes(dioNazivaPredmeta)) {
                    
                    
                 var col = red[k].colSpan;
                  
                 celije[j].removeAttribute("colspan");
                 celije[j].innerHTML = "";
                
                 celije[j].style.backgroundColor = "#EEDBFC";
               
               
            }
        }
     }
} 
}


 
    
    filtrirajTip = function(nazivAktivnosti){
        var celije = document.getElementsByTagName("td");
        var tabela = document.getElementById("mojaTabela"); 
        var red = document.getElementsByTagName("tr");
        var cell = document.createElement("td");

        for(let i=0;i<celije.length-1;i++){
            if(!celije[i].innerHTML.includes("Ponedjeljak") && !celije[i].innerHTML.includes("Utorak") && !celije[i].innerHTML.includes("Srijeda") && !celije[i].innerHTML.includes("Četvrtak") && !celije[i].innerHTML.includes("Petak") ){

            if(!celije[i].innerHTML.includes(nazivAktivnosti)){
                
                celije[i].innerHTML = "";
                celije[i].removeAttribute('colspan');
                
                celije[i].style.backgroundColor = "#EEDBFC";
            }
        }
        }

       /* if(nazivAktivnosti=='Predavanje' || nazivAktivnosti=='PREDAVANJE' || nazivAktivnosti=='predavanje'){
            x1=document.getElementById('mojaTabela').rows[0].cells[4].innerHTML = "";
            document.getElementById('mojaTabela').rows[0].cells[4].removeAttribute('colspan');
            x3=document.getElementById('mojaTabela').rows[1].cells[11].innerHTML = "";
            document.getElementById('mojaTabela').rows[1].cells[11].removeAttribute('colspan');
            x5=document.getElementById('mojaTabela').rows[1].cells[10].innerHTML = "";
        }else if(nazivAktivnosti=='Vjezbe' || nazivAktivnosti=='VJEZBE' || nazivAktivnosti=='vjezbe' || nazivAktivnosti=='tutorijal'){
            x=document.getElementById('mojaTabela').rows[0].cells[3].innerHTML = "";
            x2=document.getElementById('mojaTabela').rows[0].cells[6].innerHTML = "";
            x4=document.getElementById('mojaTabela').rows[1].cells[12].innerHTML = "";
            x5=document.getElementById('mojaTabela').rows[2].cells[9].innerHTML = "";
        }*/
    }

    filtrirajTrajanje = function(minute){
        if(minute=='')
        minute=200;
        
        console.log(minute);
        
        
        var wtPred = 180;
        var wtVjezbe = 90;
        var rmaPred = 180;
        var rmaVjezbe = 90;
        var dmTutorijal = 120;
        var dmPred = 180;
        var oiPred = 180;
        

        
         if(minute > wtVjezbe && minute < dmTutorijal ){
            x1=document.getElementById('mojaTabela').rows[0].cells[4].innerHTML = "";
            document.getElementById('mojaTabela').rows[0].cells[4].removeAttribute('colspan');
            x1=document.getElementById('mojaTabela').rows[0].cells[4].style.backgroundColor = "#EEDBFC";
            x5=document.getElementById('mojaTabela').rows[1].cells[10].innerHTML = "";
            document.getElementById('mojaTabela').rows[1].cells[10].removeAttribute('colspan');
            x1=document.getElementById('mojaTabela').rows[1].cells[10].style.backgroundColor = "#EEDBFC";
            document.getElementById('mojaTabela').rows[2].cells[10].removeAttribute('colspan');
        }else if(minute > dmTutorijal && minute < rmaPred){
            x1=document.getElementById('mojaTabela').rows[0].cells[4].innerHTML = "";
            document.getElementById('mojaTabela').rows[0].cells[4].removeAttribute('colspan');
            x1=document.getElementById('mojaTabela').rows[0].cells[4].style.backgroundColor = "#EEDBFC";
            x5=document.getElementById('mojaTabela').rows[1].cells[10].innerHTML = "";
            document.getElementById('mojaTabela').rows[1].cells[10].removeAttribute('colspan');
            x1=document.getElementById('mojaTabela').rows[1].cells[10].style.backgroundColor = "#EEDBFC";
            x3=document.getElementById('mojaTabela').rows[1].cells[11].innerHTML = "";
            document.getElementById('mojaTabela').rows[1].cells[11].removeAttribute('colspan');
            x1=document.getElementById('mojaTabela').rows[1].cells[11].style.backgroundColor = "#EEDBFC";
            document.getElementById('mojaTabela').rows[2].cells[10].removeAttribute('colspan');
        }else if(minute==0){
            x=document.getElementById('mojaTabela').rows[0].cells[3].innerHTML = "";
            document.getElementById('mojaTabela').rows[0].cells[3].removeAttribute('colspan');
            x1=document.getElementById('mojaTabela').rows[0].cells[3].style.backgroundColor = "#EEDBFC";
            x1=document.getElementById('mojaTabela').rows[0].cells[4].innerHTML = "";
            document.getElementById('mojaTabela').rows[0].cells[4].removeAttribute('colspan');
            x1=document.getElementById('mojaTabela').rows[0].cells[4].style.backgroundColor = "#EEDBFC";
            x2=document.getElementById('mojaTabela').rows[0].cells[6].innerHTML = "";
            document.getElementById('mojaTabela').rows[0].cells[6].removeAttribute('colspan');
            x1=document.getElementById('mojaTabela').rows[0].cells[6].style.backgroundColor = "#EEDBFC";
            x3=document.getElementById('mojaTabela').rows[1].cells[10].innerHTML = "";
            document.getElementById('mojaTabela').rows[1].cells[10].removeAttribute('colspan');
            x1=document.getElementById('mojaTabela').rows[1].cells[10].style.backgroundColor = "#EEDBFC";
            x4=document.getElementById('mojaTabela').rows[1].cells[11].innerHTML = "";
            document.getElementById('mojaTabela').rows[1].cells[11].removeAttribute('colspan');
            x1=document.getElementById('mojaTabela').rows[1].cells[11].style.backgroundColor = "#EEDBFC";
            x5=document.getElementById('mojaTabela').rows[1].cells[12].innerHTML = "";
            document.getElementById('mojaTabela').rows[1].cells[12].removeAttribute('colspan');
            x1=document.getElementById('mojaTabela').rows[1].cells[12].style.backgroundColor = "#EEDBFC";
            x6=document.getElementById('mojaTabela').rows[2].cells[9].innerHTML = "";
            document.getElementById('mojaTabela').rows[2].cells[9].removeAttribute('colspan');
            x1=document.getElementById('mojaTabela').rows[2].cells[9].style.backgroundColor = "#EEDBFC";
            document.getElementById('mojaTabela').rows[2].cells[10].removeAttribute('colspan');
        }else if(minute > 1 && minute<90){
            x=document.getElementById('mojaTabela').rows[0].cells[3].innerHTML = "";
            document.getElementById('mojaTabela').rows[0].cells[3].removeAttribute('colspan');
            x1=document.getElementById('mojaTabela').rows[0].cells[3].style.backgroundColor = "#EEDBFC";
            x1=document.getElementById('mojaTabela').rows[0].cells[4].innerHTML = "";
            document.getElementById('mojaTabela').rows[0].cells[4].removeAttribute('colspan');
            x1=document.getElementById('mojaTabela').rows[0].cells[4].style.backgroundColor = "#EEDBFC";
            x2=document.getElementById('mojaTabela').rows[0].cells[6].innerHTML = "";
            document.getElementById('mojaTabela').rows[0].cells[6].removeAttribute('colspan');
            x1=document.getElementById('mojaTabela').rows[0].cells[6].style.backgroundColor = "#EEDBFC";
            x3=document.getElementById('mojaTabela').rows[1].cells[10].innerHTML = "";
            document.getElementById('mojaTabela').rows[1].cells[10].removeAttribute('colspan');
            x1=document.getElementById('mojaTabela').rows[1].cells[10].style.backgroundColor = "#EEDBFC";
            x4=document.getElementById('mojaTabela').rows[1].cells[11].innerHTML = "";
            document.getElementById('mojaTabela').rows[1].cells[11].removeAttribute('colspan');
            x1=document.getElementById('mojaTabela').rows[1].cells[11].style.backgroundColor = "#EEDBFC";
            x5=document.getElementById('mojaTabela').rows[1].cells[12].innerHTML = "";
            document.getElementById('mojaTabela').rows[1].cells[12].removeAttribute('colspan');
            x1=document.getElementById('mojaTabela').rows[1].cells[12].style.backgroundColor = "#EEDBFC";
            x6=document.getElementById('mojaTabela').rows[2].cells[9].innerHTML = "";
            document.getElementById('mojaTabela').rows[2].cells[9].removeAttribute('colspan');
            x1=document.getElementById('mojaTabela').rows[2].cells[9].style.backgroundColor = "#EEDBFC";
            document.getElementById('mojaTabela').rows[2].cells[10].removeAttribute('colspan');
        }
    
        
}

    filtrirajProslo = function(dan){
        var dan = dan.slice(1);

        if(dan=='utorak' || dan=='Utorak' || dan=='UTORAK'){
            x=document.getElementById('mojaTabela').rows[0].cells[3].innerHTML = "";
            document.getElementById('mojaTabela').rows[0].cells[3].removeAttribute('colspan');
            x1=document.getElementById('mojaTabela').rows[0].cells[3].style.backgroundColor = "#EEDBFC";
            x1=document.getElementById('mojaTabela').rows[0].cells[4].innerHTML = "";
            document.getElementById('mojaTabela').rows[0].cells[4].removeAttribute('colspan');
            x1=document.getElementById('mojaTabela').rows[0].cells[4].style.backgroundColor = "#EEDBFC";
            x2=document.getElementById('mojaTabela').rows[0].cells[6].innerHTML = "";
            document.getElementById('mojaTabela').rows[0].cells[6].removeAttribute('colspan');
            x1=document.getElementById('mojaTabela').rows[0].cells[6].style.backgroundColor = "#EEDBFC";

        }else if(dan=='srijeda'|| dan=='Srijeda' || dan=='SRIJEDA'){
            x=document.getElementById('mojaTabela').rows[0].cells[3].innerHTML = "";
            document.getElementById('mojaTabela').rows[0].cells[3].removeAttribute('colspan');
            x1=document.getElementById('mojaTabela').rows[0].cells[3].style.backgroundColor = "#EEDBFC";
            x1=document.getElementById('mojaTabela').rows[0].cells[4].innerHTML = "";
            document.getElementById('mojaTabela').rows[0].cells[4].removeAttribute('colspan');
            x1=document.getElementById('mojaTabela').rows[0].cells[4].style.backgroundColor = "#EEDBFC";
            x2=document.getElementById('mojaTabela').rows[0].cells[6].innerHTML = "";
            document.getElementById('mojaTabela').rows[0].cells[6].removeAttribute('colspan');
            x1=document.getElementById('mojaTabela').rows[0].cells[6].style.backgroundColor = "#EEDBFC";
            x3=document.getElementById('mojaTabela').rows[1].cells[11].innerHTML = "";
            document.getElementById('mojaTabela').rows[1].cells[11].removeAttribute('colspan');
            x1=document.getElementById('mojaTabela').rows[1].cells[11].style.backgroundColor = "#EEDBFC";
            x4=document.getElementById('mojaTabela').rows[1].cells[12].innerHTML = "";
            document.getElementById('mojaTabela').rows[1].cells[12].removeAttribute('colspan');
            x1=document.getElementById('mojaTabela').rows[1].cells[12].style.backgroundColor = "#EEDBFC";
            x5=document.getElementById('mojaTabela').rows[1].cells[10].innerHTML = "";
            document.getElementById('mojaTabela').rows[1].cells[10].removeAttribute('colspan');
            x1=document.getElementById('mojaTabela').rows[1].cells[10].style.backgroundColor = "#EEDBFC";

        }else if(dan=='cetvrtak' || dan=='Cetvrtak' || dan=='CETVRTAK'){
            x=document.getElementById('mojaTabela').rows[0].cells[3].innerHTML = "";
            document.getElementById('mojaTabela').rows[0].cells[3].removeAttribute('colspan');
            x1=document.getElementById('mojaTabela').rows[0].cells[3].style.backgroundColor = "#EEDBFC";
            x1=document.getElementById('mojaTabela').rows[0].cells[4].innerHTML = "";
            document.getElementById('mojaTabela').rows[0].cells[4].removeAttribute('colspan');
            x1=document.getElementById('mojaTabela').rows[0].cells[4].style.backgroundColor = "#EEDBFC";
            x2=document.getElementById('mojaTabela').rows[0].cells[6].innerHTML = "";
            document.getElementById('mojaTabela').rows[0].cells[6].removeAttribute('colspan');
            x1=document.getElementById('mojaTabela').rows[0].cells[6].style.backgroundColor = "#EEDBFC";
            x3=document.getElementById('mojaTabela').rows[1].cells[11].innerHTML = "";
            document.getElementById('mojaTabela').rows[1].cells[11].removeAttribute('colspan');
            x1=document.getElementById('mojaTabela').rows[1].cells[11].style.backgroundColor = "#EEDBFC";
            x4=document.getElementById('mojaTabela').rows[1].cells[12].innerHTML = "";
            document.getElementById('mojaTabela').rows[1].cells[12].removeAttribute('colspan');
            x1=document.getElementById('mojaTabela').rows[1].cells[12].style.backgroundColor = "#EEDBFC";
            x5=document.getElementById('mojaTabela').rows[1].cells[10].innerHTML = "";
            document.getElementById('mojaTabela').rows[1].cells[10].removeAttribute('colspan');
            x1=document.getElementById('mojaTabela').rows[1].cells[10].style.backgroundColor = "#EEDBFC";
            x6=document.getElementById('mojaTabela').rows[2].cells[9].innerHTML = "";
            document.getElementById('mojaTabela').rows[2].cells[9].removeAttribute('colspan');
            x1=document.getElementById('mojaTabela').rows[2].cells[9].style.backgroundColor = "#EEDBFC";
            document.getElementById('mojaTabela').rows[2].cells[10].removeAttribute('colspan');

        }else if(dan=='petak' || dan=='Petak' || dan=='PETAK'){
            x=document.getElementById('mojaTabela').rows[0].cells[3].innerHTML = "";
            document.getElementById('mojaTabela').rows[0].cells[3].removeAttribute('colspan');
            x1=document.getElementById('mojaTabela').rows[0].cells[3].style.backgroundColor = "#EEDBFC";
            x1=document.getElementById('mojaTabela').rows[0].cells[4].innerHTML = "";
            document.getElementById('mojaTabela').rows[0].cells[4].removeAttribute('colspan');
            x1=document.getElementById('mojaTabela').rows[0].cells[4].style.backgroundColor = "#EEDBFC";
            x2=document.getElementById('mojaTabela').rows[0].cells[6].innerHTML = "";
            document.getElementById('mojaTabela').rows[0].cells[6].removeAttribute('colspan');
            x1=document.getElementById('mojaTabela').rows[0].cells[6].style.backgroundColor = "#EEDBFC";
            x3=document.getElementById('mojaTabela').rows[1].cells[11].innerHTML = "";
            document.getElementById('mojaTabela').rows[1].cells[11].removeAttribute('colspan');
            x1=document.getElementById('mojaTabela').rows[1].cells[11].style.backgroundColor = "#EEDBFC";
            x4=document.getElementById('mojaTabela').rows[1].cells[12].innerHTML = "";
            document.getElementById('mojaTabela').rows[1].cells[12].removeAttribute('colspan');
            x1=document.getElementById('mojaTabela').rows[1].cells[12].style.backgroundColor = "#EEDBFC";
            x5=document.getElementById('mojaTabela').rows[1].cells[10].innerHTML = "";
            document.getElementById('mojaTabela').rows[1].cells[10].removeAttribute('colspan');
            x1=document.getElementById('mojaTabela').rows[1].cells[10].style.backgroundColor = "#EEDBFC";
            x6=document.getElementById('mojaTabela').rows[2].cells[9].innerHTML = "";
            document.getElementById('mojaTabela').rows[2].cells[9].removeAttribute('colspan');
            x1=document.getElementById('mojaTabela').rows[2].cells[9].style.backgroundColor = "#EEDBFC";
            document.getElementById('mojaTabela').rows[2].cells[10].removeAttribute('colspan');

        }


    }

    filtrirajBuduce = function(dan){
        var dan = dan.slice(1);

        if(dan=='ponedjeljak' || dan=='Ponedjeljak' || dan=='PONEDJELJAK'){

            x3=document.getElementById('mojaTabela').rows[1].cells[11].innerHTML = "";
            document.getElementById('mojaTabela').rows[1].cells[11].removeAttribute('colspan');
            x1=document.getElementById('mojaTabela').rows[1].cells[11].style.backgroundColor = "#EEDBFC";

            x4=document.getElementById('mojaTabela').rows[1].cells[12].innerHTML = "";
            document.getElementById('mojaTabela').rows[1].cells[12].removeAttribute('colspan');
            x1=document.getElementById('mojaTabela').rows[1].cells[12].style.backgroundColor = "#EEDBFC";

            x5=document.getElementById('mojaTabela').rows[1].cells[10].innerHTML = "";
            document.getElementById('mojaTabela').rows[1].cells[10].removeAttribute('colspan');
            x1=document.getElementById('mojaTabela').rows[1].cells[10].style.backgroundColor = "#EEDBFC";

            x6=document.getElementById('mojaTabela').rows[2].cells[9].innerHTML = "";
            document.getElementById('mojaTabela').rows[2].cells[9].removeAttribute('colspan');
            x1=document.getElementById('mojaTabela').rows[2].cells[9].style.backgroundColor = "#EEDBFC";
            document.getElementById('mojaTabela').rows[2].cells[10].removeAttribute('colspan');
        }else if(dan=='utorak' || dan=='Utorak' || dan=='UTORAK'){
            x6=document.getElementById('mojaTabela').rows[2].cells[9].innerHTML = "";
            document.getElementById('mojaTabela').rows[2].cells[9].removeAttribute('colspan');
            x1=document.getElementById('mojaTabela').rows[2].cells[9].style.backgroundColor = "#EEDBFC";
            document.getElementById('mojaTabela').rows[2].cells[10].removeAttribute('colspan');
        }
    }

    return {
        filtrirajPredmet: filtrirajPredmet,
        postaviRaspored: postaviRaspored,
        filtrirajTip: filtrirajTip,
        filtrirajTrajanje: filtrirajTrajanje,
        filtrirajProslo: filtrirajProslo,
        filtrirajBuduce: filtrirajBuduce
    };

}());



