var characterList = document.querySelector('#character-list');
var viewCharacters = document.querySelector('#view-characters');
var characterInformation = document.querySelector('#character-information-detail');

var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://rickandmortyapi.com/api/character');
xhr.responseType = 'json';

xhr.addEventListener('load', function () {
  for (var i = 0; i < xhr.response.results.length; i++) {
    var style = document.createElement('div');
    style.setAttribute('class', 'flex-basis justify-center padding');
    characterList.appendChild(style);

    var columnThreeFourths = document.createElement('div');
    columnThreeFourths.setAttribute('class', 'column-three-fourths whitebackground borderradius');
    style.appendChild(columnThreeFourths);

    var characterImage = document.createElement('img');
    characterImage.setAttribute('src', xhr.response.results[i].image);
    characterImage.setAttribute('class', 'image');
    columnThreeFourths.appendChild(characterImage);

    var characterName = document.createElement('p');
    characterName.setAttribute('class', 'character-name');
    characterName.textContent = xhr.response.results[i].name;
    columnThreeFourths.appendChild(characterName);
  }
});
xhr.send();

var xhrEpisodes = new XMLHttpRequest();
xhrEpisodes.open('GET', 'https://rickandmortyapi.com/api/episode');
xhrEpisodes.responseType = 'json';

characterList.addEventListener('click', function () {
  if (event.target.tagName === 'IMG') {
    viewCharacters.setAttribute('class', 'hidden');
    for (var j = 0; j < xhr.response.results.length; j++) {
      if (xhr.response.results[j].image === event.target.src) {
        var style = document.createElement('div');
        style.setAttribute('class', 'flex-basis justify-center padding');
        characterInformation.appendChild(style);

        var columnThreeFourths = document.createElement('div');
        columnThreeFourths.setAttribute('class', 'column-three-fourths whitebackground borderradius');
        style.appendChild(columnThreeFourths);

        var characterImage = document.createElement('img');
        characterImage.setAttribute('src', xhr.response.results[j].image);
        characterImage.setAttribute('class', 'image');
        columnThreeFourths.appendChild(characterImage);

        var row1 = document.createElement('div');
        row1.setAttribute('class', 'row justify-center');
        columnThreeFourths.appendChild(row1);

        var characterName = document.createElement('h1');
        characterName.textContent = xhr.response.results[j].name;
        row1.appendChild(characterName);

        var row2 = document.createElement('div');
        row2.setAttribute('class', 'row');
        columnThreeFourths.appendChild(row2);

        var characterStatus = document.createElement('h3');
        characterStatus.textContent = 'Status: ' + xhr.response.results[j].status;
        row2.appendChild(characterStatus);

        var row3 = document.createElement('div');
        row3.setAttribute('class', 'row');
        columnThreeFourths.appendChild(row3);

        var characterSpecies = document.createElement('h3');
        characterSpecies.textContent = 'Species: ' + xhr.response.results[j].species;
        row3.appendChild(characterSpecies);

        var row4 = document.createElement('div');
        row4.setAttribute('class', 'row');
        columnThreeFourths.appendChild(row4);

        var characterGender = document.createElement('h3');
        characterGender.textContent = 'Gender: ' + xhr.response.results[j].gender;
        row3.appendChild(characterGender);

        var row5 = document.createElement('div');
        row5.setAttribute('class', 'row');
        columnThreeFourths.appendChild(row5);

        var characterLocation = document.createElement('h3');
        characterLocation.textContent = 'Location: ' + xhr.response.results[j].location.name;
        row5.appendChild(characterLocation);
      }
    }
  }
});
