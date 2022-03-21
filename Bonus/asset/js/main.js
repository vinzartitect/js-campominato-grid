// Griglia Campo Minato
// Generare una griglia di gioco quadrata, simile a quella dello screenshot, 
// in cui ogni cella contiene un numero tra 1 e 100.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.

// seleziono l'id grid dall html e gli do una variabile let
let grid = document.getElementById('grid');

let select = document.getElementById('scelte');

let btn = document.getElementById('btn');

btn.addEventListener('click', function() {

    grid.innerHTML = '';

    if (select.value === `diff_uno`) {

        // creo ciclo for per svilupare i box interni alla griglia
        for (let i = 1; i <= 100; i++) {

            // creo una variabile box inserendoci dentro un elemento div creato
            let box = document.createElement('div');

            // aggiungo il testo dei numeri in senso continuo, non random
            box.innerHTML += i;

            // aggiungo una classe al div con dentro box
            box.classList.add('box_1');

            // incolliamo let box e il suo contenuto all'interno del div con id=grid in html
            grid.appendChild(box);

            // funzione al click
            box.addEventListener('click', function () {
                console.log(this);
                this.classList.add('clicked');
                console.log(this.innerHTML);
                let numero = this.innerHTML;
            });

        }

    } else if (select.value === `diff_due`) {

        // creo ciclo for per svilupare i box interni alla griglia
        for (let i = 1; i <= 81; i++) {

            // creo una variabile box inserendoci dentro un elemento div creato
            let box = document.createElement('div');

            // aggiungo il testo dei numeri in senso continuo, non random
            box.innerHTML += i;

            // aggiungo una classe al div con dentro box
            box.classList.add('box_2');

            // incolliamo let box e il suo contenuto all'interno del div con id=grid in html
            grid.appendChild(box);

            // funzione al click
            box.addEventListener('click', function () {
                console.log(this);
                this.classList.add('clicked');
                console.log(this.innerHTML);
                let numero = this.innerHTML;
            });

        }

    } else if (select.value === `diff_tre`) {

        // creo ciclo for per svilupare i box interni alla griglia
        for (let i = 1; i <= 49; i++) {

            // creo una variabile box inserendoci dentro un elemento div creato
            let box = document.createElement('div');

            // aggiungo il testo dei numeri in senso continuo, non random
            box.innerHTML += i;

            // aggiungo una classe al div con dentro box
            box.classList.add('box_3');

            // incolliamo let box e il suo contenuto all'interno del div con id=grid in html
            grid.appendChild(box);

            // funzione al click
            box.addEventListener('click', function () {
                console.log(this);
                this.classList.add('clicked');
                console.log(this.innerHTML);
                let numero = this.innerHTML;
            });

        }

    }

    }

)
