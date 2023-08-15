/* Este es el listado de la información de las cartas  */
const listadoCartas = [
    {
        id: 1,
        nombre: "FIFA mobile",
        imagen: "./imagenesplaystore/fifamobile.webp",
        descripcion: "FIFA Mobile, conocido también como FIFA, o simplemente Fifa,​ es un juego de plataforma móvil desarrollado por la compañía Electronic Arts. Se puede descargar en Google Play, y App Store. Contiene micropago. Es posible jugar teniendo la opción de escoger entre más de 40 ligas, 1000 equipos y 50000 jugadores reales."
    },
    {
        id: 2,
        nombre: "stumble guys",
        imagen: "./imagenesplaystore/stumbleguys.webp",
        descripcion: "¡Stumble Guys es un juego multijugador masivo de eliminación en grupo en el que hasta 32 jugadores podrán competir en línea avanzando ronda tras ronda en un caos cada vez mayor para intentar convertirse en el último superviviente! Si caes, tendrás que empezar de nuevo y correr lo más rápido que puedas.",
    },
    {
        id: 3,
        nombre: "pokemon go",
        imagen: "./imagenesplaystore/pokemongo.jpeg",
        descripcion: "Es un videojuego gratuito pero contiene microtransacciones.​ El juego consiste en buscar y capturar personajes de la saga Pokémon escondidos en ubicaciones del mundo real y luchar con ellos, lo que implica desplazarse físicamente por las calles de la ciudad para progresar.",
    },
    {
        id: 4,
        nombre: "minecraft",
        imagen: "./imagenesplaystore/minecraft.jpeg",
        descripcion: "Minecraft es un videojuego de construcción de tipo «mundo abierto» o en inglés sandbox creado originalmente por el sueco Markus Persson, que creo posteriormente Mojang Studios.​​",
    },
    {
        id: 5,
        nombre: "rocket leauge side swipe",
        imagen: "./imagenesplaystore/unnamed.png",
        descripcion: "Rocket League Sideswipe is a mobile spinoff of Rocket League for iOS and Android. It was announced on March 24, 2021, and released on November 15, 2021 for Australia and New Zealand. In other regions, the game was released on November 29.",
    },
]


/* Selección de los NODOS HTML (etiquetas/elementos html) */
const contenedorCartas = document.querySelector(".listadoCartas")



/* Función que recorre el listado de las cartas */

function recorrercarta() {
    contenedorCartas.innerHTML = ""
    listadoCartas.forEach(
        (carta) => contenedorCartas.innerHTML += `
        <article class="card">
                    <img src=${carta.imagen} alt="Imagen del proyecto">
                    <div class="info">
                        <h2>${carta.nombre} </h2>
                        <p>${carta.descripcion}</p>
                      </div>
                </article>`
    )
}

/*funcion que añade cartas */

function agregarcartas() {
      const nombre = prompt ("nombre")
      const imagen = prompt ("imagen")
      const descripcion = prompt ("descripcion")
      const carta = {nombre,imagen,descripcion}

      listadoCartas.push(carta)
      recorrercarta()
}

recorrercarta()


 


