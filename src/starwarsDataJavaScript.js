const lukeSkywalkerInfoContainer = document.getElementById("lukeSkywalkerInfo");
const darthVaderButton = document.getElementById("darthVaderButton");

// blocked by CORS policy: No 'Access-Control-Allow-Origin'
function getLukeSkywalkerInfo() {
  fetch("https://swapi.co/api/people/1")
    .then(response => response.json())
    .then(parsedResponse => {
      console.log(parsedResponse);
      lukeSkywalkerInfoContainer.innerHTML = parsedResponse.name;
    });
}
getLukeSkywalkerInfo();

darthVaderButton.addEventListener("click", function() {
  getDarthvaderInfo();
});

function getDarthvaderInfo() {
  fetch("https://swapi.co/api/people/4/ ")
    .then(response => response.json())
    .then(parsedResponse => {
      console.log(parsedResponse);
      lukeSkywalkerInfoContainer.innerHTML = parsedResponse.name;
    });
}
