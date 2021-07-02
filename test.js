let assert = chai.assert;

const testniUlaz=[
`

</div >
<div id="div" onmouseover="trenutniCas(this.value,'2020-12-30T13:45')">
	<table align="center" >
  
  <tr >
  	<td class="pon1">Ponedjeljak</td>
	
    <td class="kolona1"></td>
    <td  class="kolona2" ></td>
    <td  colspan="6" class="imena" id="wtpred" >WT<br><span class='velicina'>predavanje<br><br></td>
<td colspan="3" class="imena" id="wtvjezbe">WT<br><span class='velicina'>vjezbe<br><br></td>
<td class="kolona2"></td>
<td colspan="6"  class="imena1" id="rmapred">RMA<br><span class='velicina'>predavanje<br><br></td>
<td class="kolona1"></td>
<td class="kolona2"></td>
<td class="kolona1"></td>
<td class="obje"></td>
<td class="obje"></td>
<td class="kolona2"></td>
<td class="kolona1"></td>
<td class="kolona2"></td>




  </tr>
  <tr>
  	<td class="pon">Utorak</td>
    <td class="kolona1"></td>
    <td class="kolona2" ></td>
    <td class="kolona1"></td>
<td class="kolona2"></td>
<td class="kolona1"></td>
<td class="kolona2"></td>
<td class="kolona1"></td>
<td class="kolona2"></td>
<td class="kolona1"></td>
<td colspan="3" class="imena2" id="rmavjezbe">RMA<br><span class='velicina'>vjezbe<br><br></td>
<td colspan="4" class="imena1" id="dmtut">DM<br><span class='velicina'>tutorijal<br><br></td>
<td colspan="6" class="imena" id="dmpred">DM<br><span class='velicina'>predavanje<br><br></td>
<td class="obje"></td>
<td class="obje"></td>
<td class="kolona1"></td>
<td class="kolona2"></td>



  </tr> 
  <tr>
  	<td class="pon">Srijeda</td>
   <td class="kolona1"></td>
    <td class="kolona2" ></td>
    <td class="kolona1"></td>
<td class="kolona2"></td>
<td class="kolona1"></td>
<td class="kolona2"></td>
<td class="kolona1"></td>
<td class="kolona2"></td>
<td colspan="6"  class="imena" id="oipred">OI<br><span class='velicina'>predavanje<br><br></td>
<td colspan="6" class="heh"></td>
<td class="kolona1"></td>
<td class="obje"></td>
<td class="obje"></td>
<td class="kolona2"></td>
<td class="kolona1"></td>
<td class="kolona2"></td>

  </tr>
  <tr>
  	<td class="pon">Četvrtak</td>
    <td class="kolona1"></td>
    <td class="kolona2" ></td>
    <td class="kolona1"></td>
<td class="kolona2"></td>
<td class="kolona1"></td>
<td class="kolona2"></td>
<td class="kolona1"></td>
<td class="kolona2"></td>
<td class="kolona1"></td>
<td class="kolona2"></td>
<td class="kolona1"></td>
<td class="kolona2"></td>
<td class="kolona1"></td>
<td class="kolona2"></td>
<td class="kolona1"></td>
<td class="kolona2"></td>
<td class="kolona1"></td>
<td class="kolona2"></td>
<td class="kolona1"></td>
<td class="kolona2"></td>
<td class="kolona1"></td>
<td class="kolona2"></td>
<td class="kolona1"></td>
<td class="kolona2"></td>
<td class="kolona1"></td>
<td class="kolona2"></td>
  </tr>
    <tr>
    	<td class="pon">Petak</td>
    <td class="kolona1"></td>
    <td class="kolona2" ></td>
    <td class="kolona1"></td>
<td class="kolona2"></td>
<td class="kolona1"></td>
<td class="kolona2"></td>
<td class="kolona1"></td>
<td class="kolona2"></td>
<td class="kolona1"></td>
<td class="kolona2"></td>
<td class="kolona1"></td>
<td class="kolona2"></td>
<td class="kolona1"></td>
<td class="kolona2"></td>
<td class="kolona1"></td>
<td class="kolona2"></td>
<td class="kolona1"></td>
<td class="kolona2"></td>
<td class="kolona1"></td>
<td class="kolona2"></td>
<td class="kolona1"></td>
<td class="kolona2"></td>
<td class="kolona1"></td>
<td class="kolona2"></td>
<td class="kolona1"></td>
<td class="kolona2"></td>
  </tr>
</table>
`,
`<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet"  href="raspored.css">
	<meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
 
<body>

  <div id="container" class="container">
    <div class="header">
        <div class="header image col-s-1" id="col-head"><img id="logica" src="ETF_logo.png" align="center"></div>
        <div class="header text " id="col-head1" >
          <a href="raspored.html" class="meni">- Raspored</a>
          <a href="planiranjeNastavnik.html" class="meni">- Planiranje nastavnika</a>
          <a href="podaciStudent.html"class="meni">- Podaci o studentu</a>
          <a href="posjecenost.html"class="meni">- Posjecenost</a>
          <a href="obavijesti.html" id="obav">- Obavijesti</a></div>
    </div>
  </div>

<div id="divf">
  <label id="labela">08:00</label>
  <label id="labela1">10:00</label>
  <label id="labela2">12:00</label>
  <label id="labela3">15:00</label>
  <label id="labela4">17:00</label>
  <label id="labela5">19:00</label>

</div >
<div id="div" onmouseover="trenutniCas(this.value,'2020-12-30T13:45')">
	<table align="center" >
  
  <tr >
  	<td class="pon1">Ponedjeljak</td>
	
    <td class="kolona1"></td>
    <td  class="kolona2" ></td>
    <td  colspan="6" id="wtpred" >WT<br><span class='velicina'>predavanje<br><br></td>
<td colspan="3" class="imena" id="wtvjezbe">WT<br><span class='velicina'>vjezbe<br><br></td>
<td class="kolona2"></td>
<td colspan="6"  class="imena1" id="rmapred">RMA<br><span class='velicina'><br><br></td>
<td class="kolona1"></td>
<td class="kolona2"></td>
<td class="kolona1"></td>
<td class="obje"></td>
<td class="obje"></td>
<td class="kolona2"></td>
<td class="kolona1"></td>
<td class="kolona2"></td>




  </tr>
  

</table>
</div>
<div class="footer f">
    <p>Elektrotehnicki fakultet u Sarajevu</p>
  </div>
  <script src="trenutno.js"></script>
</body>
</html>`];

describe('trenutno', function() {
	describe('#trenutniCas', function() {
		it('Test kada nema aktivnosti prije prve', function() {
			const result = trenutniCas(testniUlaz[0],'2021-11-02T08:30');
			assert.equal(result, null);
        });
        it('Test kada nema aktivnosti poslije zadnje', function() {
            const result = trenutniCas(testniUlaz[0],'2020-11-10T20:00');
			assert.equal(result, null);
        });
        it('Test da li funkcija radi za aktivnost WT predavanje ', function() {
            const result = trenutniCas(testniUlaz[0],'YYYY-MM-DDTHH:MM');
            if(trenutniCas(testniUlaz[0],'YYYY-MM-DDTHH:MM')=='<td colspan="6" class="imena" id="wtpred" style="background-color: lightgreen; border: 3px solid black;">WT<br><span class="velicina">predavanje<br><br></span></td>');
            assert.equal(result, null);
        });
        it('Test da li funkcija radi za dvije aktivnosti koje se desavaju u isto vrjieme', function() {
          const result = trenutniCas(testniUlaz[0],'YYYY-MM-DDTHH:MM');
          if(trenutniCas(testniUlaz[0],'YYYY-MM-DDTHH:MM')=='<td colspan="3" class="imena" id="wtvjezbe" style="background-color: lightgreen; border: 3px solid black;">WT<br><span class="velicina">vjezbe<br><br></span></td><td class="kolona2"></td>' && 
          trenutniCas(testniUlaz[0],'YYYY-MM-DDTHH:MM') =='<td colspan="6" class="imena" id="oipred" style="background-color: lightgreen; border: 3px solid black;">OI<br><span class="velicina">predavanje<br><br></span></td><td colspan="6" class="heh"></td>')
          assert.equal(result, null);
      });
        it('Test kada postoji DM predavanje u odredjenom vremenu',function(){
          const result = trenutniCas(testniUlaz[0],'YYYY-MM-DDTHH:MM');
          if(trenutniCas(testniUlaz[0],'YYYY-MM-DDTHH:MM')=='<td colspan="6" class="imena" id="dmpred" style="background-color: lightgreen; border: 3px solid black;">DM<br><span class="velicina">predavanje<br><br></span></td>')                                         
          assert.equal(result, null);
        });

    });
});
