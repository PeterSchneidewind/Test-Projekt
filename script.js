let i = 0;
let images = [];
let time = 5000;

images[0] = `./images/mountains-6919328_1280.jpg`;
images[1] = `./images/nature-6752035_1280.jpg`;
images[2] = `./images/snow-3304547_1280.jpg`;
/*images[3] = `./images/snow-616319_1280.jpg`;*/
images[3] = `./images/winter-3097418_1280.jpg`;

function changeImg() {
   let imgElement = document.getElementById('slideshow');   
   imgElement.classList.add('fade-out');

   setTimeout(() => {
      imgElement.src = images[i];
      imgElement.classList.remove('fade-out');
      if (i < images.length - 1) {
         i++;
      } else {
         i = 0;
      }
   }, 1000); // Wartezeit muss mit der Transition-Dauer übereinstimmen (hier 1s)
}

window.onload = function() {   
   setInterval(changeImg, time); 
};

function calcFall() {
   let userInput = document.getElementById('userInput').value;
   let resultDIV = document.getElementById('resultDIV');

   let result = Math.sqrt(2 * userInput / 9.81);
   let roundedresult = result.toFixed(2);

   resultDIV.innerHTML = `<p>"${roundedresult} Sekunden. Bist du überrascht?" Io sieht dich schmunzelnd an. Was bei seinem Gesicht irgendwie gruselig wirkte... "Und jetzt? Wie geht es weiter?"..Was weiß ich, denkst du dir...Fragen über Fragen:) </p><button onclick="again()" class="againBTN">Noch einmal</button>`;
   resultDIV.style.display = `block`;
   
}

function again() {
   document.getElementById('userInput').value = '';
   resultDIV.style.display = `none`;
}