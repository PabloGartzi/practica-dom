/* VARIABLES */
/* capturar elementos DOM */
const imagenBanner = document.querySelector('#bienvenidos img');

/* Acceder al elemento del DOM para crear los artículos de viajes */
const imagenesViajes = document.querySelector('.flexContainer');

/* Acceder al elemento del DOM para crear añadir los options */
const opcionesDestino = document.querySelector('#destinos>div>select');

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
        src: 'assets/viajes/viajes-1.jpg',
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
const aleatorio = () => {
    const indice = Math.floor(Math.random() * (arrayBanners.length));
    return indice
}

const pintarBanner = () => {

    const indice = aleatorio()
    const elemento = arrayBanners[indice]

    imagenBanner.setAttribute('src', elemento.src)
    imagenBanner.alt = elemento.alt
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
    var fragmento = document.createDocumentFragment();
    arrayViajes.forEach((element) => {
        var newArticle = document.createElement("article");
        var newDiv = document.createElement("div");
        
        var newImg = document.createElement("img");
        newImg.setAttribute('src', element.src);
        newImg.alt= element.alt; //Preguntar diferencia.

        var newH3 = document.createElement("h3");
        newH3.textContent = element.titulo

        var newP = document.createElement("p");
        newP.textContent = element.descripcion

        newDiv.append(newImg);
        newArticle.append(newDiv, newH3, newP);

        fragmento.append(newArticle);
    });
    imagenesViajes.append(fragmento);
}
function pintarDestinos(){
    var fragmento = document.createDocumentFragment();
    arrayDestinos.forEach((element) => {
        var newOpcion = document.createElement("option");
        newOpcion.setAttribute('value',element.valor);
        newOpcion.textContent = element.valor;
        fragmento.append(newOpcion);
    });
    opcionesDestino.append(fragmento);
}



/* INVOCACIÓN A LAS FUNCIONES */
pintarBanner();
pintarCards();
pintarDestinos();