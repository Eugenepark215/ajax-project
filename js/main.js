var characterList = document.querySelector('#character-list');
var viewCharacters = document.querySelector('#view-characters');

var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20');
xhr.responseType = 'json';
xhr.addEventListener('load', function () {

  for (var i = 0; i < xhr.response.length; i++) {
    var style = document.createElement('div');
    style.setAttribute('class', 'flex-basis justify-center padding');
    characterList.appendChild(style);

    var columnThreeFourths = document.createElement('div');
    columnThreeFourths.setAttribute('class', 'column-three-fourths whitebackground borderradius');
    style.appendChild(columnThreeFourths);

    var characterImage = document.createElement('img');
    characterImage.setAttribute('src', xhr.response[i].image);
    characterImage.setAttribute('class', 'image');
    columnThreeFourths.appendChild(characterImage);

    var characterName = document.createElement('p');
    characterName.setAttribute('class', 'character-name');
    characterName.textContent = xhr.response[i].name;
    columnThreeFourths.appendChild(characterName);
  }
});
xhr.send();

characterList.addEventListener('click', function () {
  if (event.target.tagName === 'IMG') {
    viewCharacters.setAttribute('class', 'hidden');
  }
});
