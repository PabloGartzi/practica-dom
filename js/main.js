/* VARIABLES */
/* capturar elementos DOM */
const imagenBanner = document.querySelector('#bienvenidos img');

/* Acceder al elemento del DOM para crear los artículos de viajes */
const imagenesViajes = document.querySelector('#recomendados .flexContainer');

/* Acceder al elemento del DOM para crear añadir los options */
const opcionesDestino = document.querySelector('#destinos>div>select');
const urlBase = "assets";

const fragment = document.createDocumentFragment();

const arrayBanners = [
    {
        id: 1,
        src: 'assets/banner/1.jpg',
        alt: 'Banner uno'
    },
    {
        id: 2,
        src: 'assets/banner/2.jpg',
        alt: 'Banner uno'
    },
    {
        id: 3,
        src: 'assets/banner/3.jpg',
        alt: 'Banner uno'
    },
    {
        id: 4,
        src: 'assets/banner/4.jpg',
        alt: 'Banner uno'
    },
    {
        id: 5,
        src: 'assets/banner/5.jpg',
        alt: 'Banner uno'
    },
    {
        id: 6,
        src: 'assets/banner/6.jpg',
        alt: 'Banner uno'
    },
    {
        id: 7,
        src: 'assets/banner/7.jpg',
        alt: 'Banner uno'
    },
    {
        id: 8,
        src: 'assets/banner/8.jpg',
        alt: 'Banner uno'
    },
]
const arrayViajes = [
    {
        id: 1,
        src: `${urlBase}/viajes/viajes-1.jpg`,
        alt: 'Banner uno',
        titulo: 'Playa',
        descripcion: 'Hamaca en la playa'
    },
    {
        id: 2,
        src: 'assets/viajes/viajes-2.jpg',
        alt: 'Banner dos',
        titulo: 'Cabaña',
        descripcion: 'cabaña en el mar'
    },
    {
        id: 3,
        src: 'assets/viajes/viajes-3.jpg',
        alt: 'Banner tres',
        titulo: 'Lugares',
        descripcion: 'Lugares a los que viajar'
    },
    {
        id: 4,
        src: 'assets/viajes/viajes-4.jpg',
        alt: 'Banner cuatro',
        titulo: 'Sevilla',
        descripcion: 'Plaza de sevilla'
    },
    {
        id: 5,
        src: 'assets/viajes/viajes-5.jpg',
        alt: 'Banner cinco',
        titulo: 'Sevilla dos',
        descripcion: 'Puente de sevilla'
    },
    {
        id: 6,
        src: 'assets/viajes/viajes-6.jpg',
        alt: 'Banner seis',
        titulo: 'paseo maritimo',
        descripcion: 'paseo maritimo'
    },
    {
        id: 7,
        src: 'assets/viajes/viajes-7.jpg',
        alt: 'Banner siete',
        titulo: 'castillo',
        descripcion: 'castillo en un pueblo'
    },
]
const arrayDestinos = [
    {
        valor: "Burgos",
    },
    {
        valor: "Londres",
    },
    {
        valor: "Paris",
    },
    {
        valor: "Tokyo",
    },
]


/* EVENTOS */

/* FUNCIONES */
const aleatorio = (array) => {
    const indice = Math.floor(Math.random() * (array.length));
    return indice
}

const pintarBanner = () => {

    const indice = aleatorio(arrayBanners)
    const elemento = arrayBanners[indice]

    imagenBanner.src = elemento.src;
    imagenBanner.alt = elemento.alt;
}

function pintarCards(){
    /* recorrer los elementos del array*/
    /* por cada elemento crear:*/
    /* un article   */
    /* un div   */
    /* una imgen asignando sus atributos   */
    /* un h3 asignar su valor   */
    /* un p asignar su valor   */

    /* meter la imagen en el div */
    /* meter el div en el artigle */
    /* meter el h3 y el p en el article */

    /* añadir el artícle fragmento */
    /* dejo de recorrer el array */

    /* añadir el fragmento al div flexContainer */ 
    arrayViajes.forEach((element) => {
        const newArticle = document.createElement("ARTICLE");
        const newDiv = document.createElement("DIV");
        
        const newImg = document.createElement("IMG");
        newImg.src = element.src;
        newImg.alt = element.alt;

        const newH3 = document.createElement("H3");
        newH3.textContent = element.titulo

        const newP = document.createElement("P");
        newP.textContent = element.descripcion

        newDiv.append(newImg);
        newArticle.append(newDiv, newH3, newP);

        fragment.append(newArticle);
    });
    imagenesViajes.append(fragment);
}
function pintarDestinos(){
    arrayDestinos.forEach((element) => {
        var newOpcion = document.createElement("OPTION");
        newOpcion.value = element.valor;
        newOpcion.textContent = element.valor; //el option también tiene una propiedad que es text: newOpcion.text = element.valor;
        fragment.append(newOpcion);
    });
    opcionesDestino.append(fragment);
}



/* INVOCACIÓN A LAS FUNCIONES */
pintarBanner();
pintarCards();
pintarDestinos();