/*Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede */

const ourTeam = [
    {
        'nome':'Wayne Barnett',
        'ruolo':'Founder & CEO',
        'immagine':'wayne-barnett-founder-ceo.jpg'
    },
    {
        'nome':'Angela Caroll',
        'ruolo':'Chief Editor',
        'immagine':'angela-caroll-chief-editor.jpg'
    },
    {
        'nome':'Walter Gordon',
        'ruolo':'Office Manager',
        'immagine':'walter-gordon-office-manager.jpg'
    },
    {
        'nome':'Angela Lopez',
        'ruolo':'Social Media Manager',
        'immagine':'angela-lopez-social-media-manager.jpg'
    },
    {
        'nome':'Scott Estrada',
        'ruolo':'Developer',
        'immagine':'scott-estrada-developer.jpg'
    },
    {
        'nome':'Barbara Ramos',
        'ruolo':'Graphic Designer',
        'immagine':'barbara-ramos-graphic-designer.jpg'
    }
];

console.log(ourTeam);

const containerDom = document.getElementById('container');
let cards = document.getElementById('cards');

for(let i = 0; i < ourTeam.length; i++){
    const members = ourTeam[i];
   cards.innerHTML += ` <div class="m-3" style="width: calc(100% /4) ">
    <img class="card-img-top rounded-2" src="img/${members.immagine}" alt="Card image">
    <div class="card-body">
    <h5 class="card-title mt-2">${members.nome}</h5>
    <p class="card-text">${members.ruolo}</p>
    </div>
    </div>`
}