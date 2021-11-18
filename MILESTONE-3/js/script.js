
// ARRAYS

const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

// SELEZIONO I CONTAINER CHE DOVRO' POPOLARE

 const mainContainer = document.querySelector('.main-img-container');


const imgText = document.querySelector('.img-text');


const  thumbContainer = document.querySelector('.thumbnails');


// controllo l'array immagini -testo e paragrafo con un ciclo for

for (let i = 0; i < items.length; i++){
    imgPath = items[i];
    titlePath = title[i];
    textPath = text[i];

     

    // creo la costante che popolerà l'html del main container

    const mainContent = `
     <div class="main-img "> 
            <img src="${imgPath}" alt="main img"> 

                      
         <div class="img-text"> 
            <h2>${titlePath}</h2> 
                <p>${textPath}</p>
        </div>
    `;

    // popolo il contenitore selezionato in precedenza

    mainContainer.innerHTML += mainContent;  

    // creo la costante che mi popolerà il thumb

    const thumbCOntent =`
    <div class="single-thumbnail "> 
            <img src="${imgPath}" alt="img thumb">
    </div>
    `;

    // vado ad appendere la costante creata nell'html

    thumbContainer.innerHTML += thumbCOntent;




}
// fine ciclo for

// ora creo una variabile per tutte le immagini del main e del thumbnails utilizzando classNAme che genera una lista tipo array

const imgList = document.getElementsByClassName('main-img');
console.log(imgList);
const thumbList = document.getElementsByClassName('single-thumbnail');
console.log(thumbList);

// adesso aggiungo le classi active alle due costanti precedenti
// creo una variabile 
let activeClass = 0;

imgList[activeClass].classList.add('active');

thumbList[activeClass].classList.add('on');


// ora devo generare un evento che al click vada ad aggiungere ad ogni elemnto della lista la classe active

// creo una variabile per le frecce
const arrowDown = document.querySelector('.down');
console.log(arrowDown);

arrowDown.addEventListener('click',function(){
    // rimuovo le classi active e on alle prime immagini

    imgList[activeClass].classList.remove('active');
    thumbList[activeClass].classList.remove('on');
    
    // ora incremento activeClass di 1

    activeClass++;

    // ora aggiungo la classe all'immagine successiva

    imgList[activeClass].classList.add('active');

    thumbList[activeClass].classList.add('on');


    

});