const lukeSkywalkerInfoContainer = document.getElementById("lukeSkywalkerInfo");
const darthVaderButton = document.getElementById("dartVaderButton");

function getLukeSkywalkerInfo() {
  fetch("https://swapi.co/api/people/1")
    .then(response => response.json())
    .then(parsedResponse => {
      lukeSkywalkerInfoContainer.innerHTML = parsedResponse.slip.advice;
    });
}

function getDarthvaderInfo() {
  fetch("https://swapi.co/api/people/4/ ")
    .then(response => response.json())
    .then(parsedResponse => {
      darthVaderButton.innerHTML = parsedResponse.slip.advice;
    });

  darthVaderButton.addEventListener("click", function() {
    getDarthvaderInfo();
  });
}
