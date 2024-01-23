// EJERCICIO 1
// Creador de Nombres de Bandas Aleatorios:
// Instrucciones: Escribe una función que genere nombres de bandas aleatorios
// y únicos cada vez que se llama. Puedes combinar palabras inusuales,
// colores extravagantes y animales exóticos para hacerlos sonar realmente
// interesantes.

let palabras = ["facundia ", "palique ", "ampuloso ", "ñoñería ", "rebolico ", "fufurufa"];
let animales = ["plumiferojade ", "escamandrilo ", "ronrónido ", "alalútrico ", "colafulgente ", "aletezmarino "];
let colores = ["cianóseo ", "amarantina ", "indigoquíreo ", "esmeraldín ", "carmesínico ", "aúreo "];

let banda = () => {
  let colorRandom = Math.floor(Math.random() * colores.length);
  let palabraRandom =Math.floor(Math.random() * palabras.length);
  let animalesRandom = Math.floor(Math.random() * animales.length);
   return (colores[colorRandom] +  palabras[palabraRandom] + animales[animalesRandom]);
};

console.log(banda())

// EJERCICIO 2
// Conversor de Emociones a Emoji:
// Instrucciones: Crea una función que tome una cadena de texto que exprese
// emociones (como "feliz", "triste", "sorprendido") y la convierta en un emoji
// correspondiente. ¡Añade una dosis de humor a tus emociones!

let emociones = (emocion)=>{
  let emoji = ""; //esto lo hice porque sino en consola veia el emoji y por debajo undefined
  if (emocion === "feliz"){
    console.log ("😄")
  } else if (emocion === "triste"){
    console.log ("😢")
  } else if (emocion === "sorprendido"){
    console.log ("😲")
  }else {
    console.log ("none")
  }
  return emoji
};

console.log (emociones("triste"));


