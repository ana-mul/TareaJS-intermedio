// EJERCICIO 1
// Creador de Nombres de Bandas Aleatorios:
// Instrucciones: Escribe una función que genere nombres de bandas aleatorios
// y únicos cada vez que se llama. Puedes combinar palabras inusuales,
// colores extravagantes y animales exóticos para hacerlos sonar realmente
// interesantes.

let palabras = [
  "facundia ",
  "palique ",
  "ampuloso ",
  "ñoñería ",
  "rebolico ",
  "fufurufa ",
];
let animales = [
  "plumiferojade ",
  "escamandrilo ",
  "ronrónido ",
  "alalútrico ",
  "colafulgente ",
  "aletezmarino ",
];
let colores = [
  "cianóseo ",
  "amarantina ",
  "indigoquíreo ",
  "esmeraldín ",
  "carmesínico ",
  "aúreo ",
];

let banda = () => {
  let colorRandom = Math.floor(Math.random() * colores.length);
  let palabraRandom = Math.floor(Math.random() * palabras.length);
  let animalesRandom = Math.floor(Math.random() * animales.length);
  return (
    colores[colorRandom] + palabras[palabraRandom] + animales[animalesRandom]
  );
};

console.log(banda());

// EJERCICIO 2
// Conversor de Emociones a Emoji:
// Instrucciones: Crea una función que tome una cadena de texto que exprese
// emociones (como "feliz", "triste", "sorprendido") y la convierta en un emoji
// correspondiente. ¡Añade una dosis de humor a tus emociones!

let emociones = (emocion) => {
  let emoji = "";
  if (emocion === "feliz") {
    console.log("😄");
  } else if (emocion === "triste") {
    console.log("😢");
  } else if (emocion === "sorprendido") {
    console.log("😲");
  } else {
    console.log("none");
  }
  return emoji;
};

console.log(emociones("triste"));

// Generador de Historias Absurdas:
// Desarrolla una función que genere historias absurdas
// combinando elementos inesperados, como pingüinos que hablan francés,
// robots enamorados de plantas y astronautas perdidos en el espacio con una
// mascota alienígena

let personajes = [
  "un elefante jazzista ",
  "un perezoso políglota ",
  "un canario que volaba marcha atrás ",
  "un gato acróbata ",
  "un cienpiés comediante ",
];
let trama = [
  "que decidió formar una banda y organizar un espectáculo para toda la selva ",
  "que encontró una moneda y decidió jugar la lotería ",
  "que hablaba con los árboles, quienes le cuentan los secretos de los otros animales que viven en la selva ",
  "que arreglaba su moto voladora ",
  "que contaba las estrellas para poder dormir ",
];
let desenlace = [
  "y así logró irse de viaje junto con ",
  "y de repente escuchó un ruido fuerte y del miedo fue en busca de compañía hasta la casa de ",
  "y decidió unirse a un circo y viajar por todo el mundo junto con ",
  "y recordaba la vez que participó de un concurso de ronquidos en el cual el ganador fue ",
  "y observaba como los animales de la selva se divertían en la fiesta a la que no fue invitado, organizada por ",
];

let absurda = () => {
  let personajesRandom = Math.floor(Math.random() * personajes.length);
  let tramaRandom = Math.floor(Math.random() * trama.length);
  let desenlaceRandom = Math.floor(Math.random() * desenlace.length);
  let desenlacePersonaje = Math.floor(Math.random() * personajes.length); //otra variable de personajes para que me de uno distinto al primero
  return (
    "Había una vez " +
    personajes[personajesRandom] +
    trama[tramaRandom] +
    desenlace[desenlaceRandom] +
    personajes[desenlacePersonaje] +
    "."
  );
};

console.log(absurda());

// Simulador de Viaje en el Tiempo Musical:
// Instrucciones: Escribe una función que, dado un año, devuelva una
// recomendación de canciones populares de esa época. Puedes mezclar
// diferentes géneros y hacer recomendaciones basadas en eventos históricos
// de ese año.

let setentas = [
  " 1970: Let It Be - The Beatles",
  " 1971: Stairway to Heaven - Led Zeppelin",
  " 1972: Superstition - Stevie Wonder",
  " 1973: Angie - The Rolling Stones",
  " 1974: Waterloo - ABBA",
  " 1975: Bohemian Rhapsody - Queen",
  " 1976: Dancing Queen - ABBA",
  " 1977: Hotel California - Eagles",
  " 1978: Y.M.C.A. - Village People",
  " 1979: Another Brick in the Wall - Pink Floyd",
];
let ochentas = [
  " 1980: Crazy Little Thing Called Love - Queen",
  " 1981: Bette Davis Eyes - Kim Carnes",
  " 1982: Billie Jean - Michael Jackson",
  " 1983: Sweet Child o' Mine - Guns N' Roses",
  " 1984: Like a Virgin - Madonna",
  " 1985: Take on Me - a-ha",
  " 1986: Papa Don't Preach - Madonna",
  " 1987: With or Without You - U2",
  " 1988: Sweet Child o' Mine - Guns N' Roses",
  " 1989: Like a Prayer - Madonna",
];
let noventas = [
  " 1990: Vogue - Madonna",
  " 1991: Smells Like Teen Spirit - Nirvana",
  " 1992: I Will Always Love You - Whitney Houston",
  " 1993: Creep - Radiohead",
  " 1994: All I Want for Christmas Is You - Mariah Carey",
  " 1995: Gangsta's Paradise - Coolio",
  " 1996: Wannabe - Spice Girls",
  " 1997: Barbie Girl - Aqua",
  " 1998: Baby One More Time - Britney Spears",
  " 1999: Livin' la Vida Loca - Ricky Martin",
];
let dosmil = [
  " 2000: Beautiful Day - U2",
  " 2001: Drops of Jupiter - Train",
  " 2002: The Middle - Jimmy Eat World",
  " 2003: Crazy in Love - Beyoncé ft. Jay-Z",
  " 2004: Yeah! - Usher ft. Lil Jon, Ludacris",
  " 2005: Hollaback Girl - Gwen Stefani",
  " 2006: Hips Don't Lie - Shakira ft. Wyclef Jean",
  " 2007: Umbrella - Rihanna ft. Jay-Z",
  " 2008: Single Ladies (Put a Ring on It) - Beyoncé",
  " 2009: Poker Face - Lady Gaga",
];
let dosmildiez = [
  " 2010: Rolling in the Deep - Adele",
  " 2011: Someone Like You - Adele",
  " 2012: Gangnam Style - PSY",
  " 2013: Royals - Lorde",
  " 2014: Happy - Pharrell Williams",
  " 2015: Uptown Funk - Mark Ronson ft. Bruno Mars",
  " 2016: Sorry - Justin Bieber",
  " 2017: Shape of You - Ed Sheeran",
  " 2018: Shallow - Lady Gaga, Bradley Cooper",
  " 2019: Old Town Road - Lil Nas X ft. Billy Ray Cyrus",
];

let recomendaciones = (año) => {
  let canciones = "";
  if (año >= 1970 && año < 1980) {
    console.log(
      `El año ${año} fue un gran año para la música. Aquí puedes ver la una de las canciones más sonadas de ese año y también la década de los ´70: \n${setentas.join(
        "\n"
      )}`
    );
  } else if (año >= 1980 && año < 1990) {
    console.log(
      `El año ${año} fue un gran año para la música. Aquí puedes ver la una de las canciones más sonadas de ese año y también la década de los ´80: \n${ochentas.join(
        "\n"
      )}`
    );
  } else if (año >= 1990 && año < 2000) {
    console.log(
      `El año ${año} fue un gran año para la música. Aquí puedes ver la una de las canciones más sonadas de ese año y también la década de los ´90: \n${noventas.join(
        "\n"
      )}`
    );
  } else if (año >= 2000 && año < 2010) {
    console.log(
      `El año ${año} fue un gran año para la música. Aquí puedes ver la una de las canciones más sonadas de ese año y también la década de los 2000: \n${dosmil.join(
        "\n"
      )}`
    );
  } else if (año >= 2010 && año < 2020) {
    console.log(
      `El año ${año} fue un gran año para la música. Aquí puedes ver la una de las canciones más sonadas de ese año y también la década del 2010: \n${dosmildiez.join(
        "\n"
      )}`
    );
  } else {
    console.log(
      `Lo siento! Para el ${año} no tengo ninguna recomendación de canciones. Si quieres vuelve a ingresar otro año.`
    );
  }
  return canciones;
};

console.log(recomendaciones(2010));

// Creador de Recetas Culinarias del Futuro:
// Instrucciones: Escribe una función que genere recetas culinarias futuristas
// combinando ingredientes inusuales y técnicas de cocina avanzadas. ¡Haz
// que la comida del futuro sea emocionante y deliciosa!

let recetas = {
  ingredientes: [
    "polvo de algas espaciales",
    "quinoa extraterrestre",
    "aceite de nubes",
    "perlas de luna",
    "hongos de Júpiter",
    "caviar de Plutón",
    "miel de meteorito",
    "sal de Saturno",
    "harina de asteroides",
    "especias de luz solar",
    "salsa de lava",
    "agua de luna",
    "polvo de gravedad cero",
    "tomates de exploplanetas",
    "ajo de Venus",
    "sal de estrellas",
    "pimienta de Urano",
    "vinagre de Saturno",
  ],

  tecnicasFuturistas: [
    "criolizar",
    "cuarzulizar",
    "nanoinfusionar",
    "fusionar gravitacionalmente",
    "biotransferenciar",
  ],
  tecnicasClasicas: [
    "mezclar",
    "batir",
    "integrar",
    "agregar",
    "espolvorear",
    "tamizar",
  ],
  nombreReceta: [
    "Estofado de Nebulosa Brillante",
    "Ñoquis de Gravedad Cero",
    "Sinfonía de Microgravedad",
    "Ensalada de Aurora",
    "Pastel de Luna",
  ],
};

let titulo = () =>{
  let nombreRandom = Math.floor(Math.random() * recetas.nombreReceta.length);
  return recetas.nombreReceta[nombreRandom]
}
let tecnicasC = ()=>{
  let tecnicaRandomClasica = Math.floor(Math.random() * recetas.tecnicasClasicas.length);
  return recetas.tecnicasClasicas[tecnicaRandomClasica] 
}
let tecnicasF = ()=>{
    let tecnicaRandomFuturista = Math.floor(Math.random() * recetas.tecnicasFuturistas.length);
  return recetas.tecnicasFuturistas[tecnicaRandomFuturista]
}

let ingrediente = ()=>{
  let ingredienteRandom = Math.floor(Math.random() * recetas.ingredientes.length);
  return recetas.ingredientes[ingredienteRandom]
}
let mayus = (palabra) =>{
  if (typeof palabra !== 'string' || palabra.length === 0) {
    return palabra;
  }
  return palabra.charAt(0).toUpperCase() + palabra.slice(1);
}

let generarReceta = () =>{
  let randomReceta ="";
  console.log(`Te recomendamos que hagas la siguiente receta: ${titulo()}. Para la cual vas a necesitar realizar los siguientes pasos:
  1-${mayus(tecnicasC())} ${ingrediente()} junto con ${ingrediente()}
  2-Luego ${tecnicasF()} por 15 minutos
  3-Agregar paulatinamente ${ingrediente()} y ${ingrediente()}
  4-Junto con ${ingrediente()} ${tecnicasC()} opcionalmente ${ingrediente()}
  5-Finalmente ${tecnicasF()} y servir`)
  return randomReceta
};

console.log(generarReceta());