let assert = chai.assert;

describe('Filtriraj', function() {
	describe('#filtrirajPredmet', function() {
        it('Test da li ispravno radi kada se pozove jedan dio predmeta', function() {
            var ulaz= 'W';
            var rez = FiltrirajRaspored.filtrirajPredmet(ulaz);
            console.log(rez);
            const ispravno = true;
           var celije = document.getElementsByTagName('td');

           celije.forEach(element => {
                    if (!element.innerHTML.includes('W')) {
                        ispravno = false;
                    }
                    
            });
			assert.equal(ispravno, true);
        });
       
		
    });

    describe('#filtrirajTip', function() {
		it('Test da li ce se pozvati predavanja', function() {
            var celije = document.getElementsByTagName('td');
            const ispravno = true;
            FiltrirajRaspored.filtrirajTip('predavanja');
           celije.forEach(element => {
                    if (!element.innerHTML.includes('predavanja')) {
                        ispravno = false;
                    }
                    
            });
			assert.equal(ispravno, true);
        });
    });

   
});