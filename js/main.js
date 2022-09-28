var characterList = document.querySelector('#character-list');
var viewCharacters = document.querySelector('#view-characters');
var characterInformation = document.querySelector('#character-information-detail');
var view = document.querySelectorAll('.view');
var navbar = document.querySelector('.navbar');
// var episodeDirectory = document.querySelector('#episode-list');
var season1 = document.querySelector('#season1list');
var season2 = document.querySelector('#season2list');
var season3 = document.querySelector('#season3list');
var season4 = document.querySelector('#season4list');
var season5 = document.querySelector('#season5list');

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

characterList.addEventListener('click', function () {
  if (event.target.tagName === 'IMG' && !characterInformation.hasChildNodes()) {
    viewCharacters.setAttribute('class', 'view hidden');
    characterInformation.setAttribute('class', 'view active');
    for (var j = 0; j < xhr.response.results.length; j++) {
      if (xhr.response.results[j].image === event.target.src) {
        var style = document.createElement('div');
        style.setAttribute('id', 'style-information');
        characterInformation.appendChild(style);

        var columnFull = document.createElement('div');
        columnFull.setAttribute('class', 'column-full whitebackground borderradius');
        columnFull.setAttribute('id', 'column-for-information');
        style.appendChild(columnFull);

        var characterImage = document.createElement('img');
        characterImage.setAttribute('src', xhr.response.results[j].image);
        characterImage.setAttribute('class', 'image');
        characterImage.setAttribute('id', 'image-for-information');
        columnFull.appendChild(characterImage);

        var row1 = document.createElement('div');
        row1.setAttribute('class', 'row justify-center');
        columnFull.appendChild(row1);

        var characterName = document.createElement('h1');
        characterName.textContent = xhr.response.results[j].name;
        row1.appendChild(characterName);

        var row2 = document.createElement('div');
        row2.setAttribute('class', 'row');
        columnFull.appendChild(row2);

        var characterStatus = document.createElement('h2');
        characterStatus.textContent = 'Status: ' + xhr.response.results[j].status;
        characterStatus.setAttribute('class', 'margin-left');
        row2.appendChild(characterStatus);

        var row3 = document.createElement('div');
        row3.setAttribute('class', 'row');
        columnFull.appendChild(row3);

        var characterSpecies = document.createElement('h2');
        characterSpecies.textContent = 'Species: ' + xhr.response.results[j].species;
        characterSpecies.setAttribute('class', 'margin-left');
        row3.appendChild(characterSpecies);

        var row4 = document.createElement('div');
        row4.setAttribute('class', 'row');
        columnFull.appendChild(row4);

        var characterGender = document.createElement('h2');
        characterGender.textContent = 'Gender: ' + xhr.response.results[j].gender;
        characterGender.setAttribute('class', 'margin-left');
        row4.appendChild(characterGender);

        var row5 = document.createElement('div');
        row5.setAttribute('class', 'row');
        columnFull.appendChild(row5);

        var characterLocation = document.createElement('h2');
        characterLocation.textContent = 'Location: ' + xhr.response.results[j].location.name;
        characterLocation.setAttribute('class', 'margin-left');
        row5.appendChild(characterLocation);

        var row6 = document.createElement('div');
        row6.setAttribute('class', 'row');
        columnFull.appendChild(row6);

        var episodesText = document.createElement('h2');
        episodesText.textContent = 'Episodes:  ';
        episodesText.setAttribute('class', 'margin-left');
        row6.appendChild(episodesText);

        var characterEpisode = document.createElement('h2');
        for (var l = 0; l < xhr.response.results[j].episode.length; l++) {
          if (l === xhr.response.results[j].episode.length - 1) {
            characterEpisode.textContent += xhr.response.results[j].episode[l].slice(40);
          } else {
            characterEpisode.textContent += xhr.response.results[j].episode[l].slice(40) + ', ';
          }
          characterEpisode.setAttribute('class', 'margin-left');
          row6.appendChild(characterEpisode);
        }
      }
    }
  } else if (event.target.tagName === 'IMG' && characterInformation.hasChildNodes()) {
    viewCharacters.setAttribute('class', 'view hidden');
    characterInformation.setAttribute('class', 'view active');
    for (j = 0; j < xhr.response.results.length; j++) {
      if (xhr.response.results[j].image === event.target.src) {
        var styleDocument = document.querySelector('#style-information');
        var style2 = document.createElement('div');
        style2.setAttribute('id', 'style-information');

        columnFull = document.createElement('div');
        columnFull.setAttribute('class', 'column-full whitebackground borderradius');
        columnFull.setAttribute('id', 'column-for-information');
        style2.appendChild(columnFull);

        characterImage = document.createElement('img');
        characterImage.setAttribute('src', xhr.response.results[j].image);
        characterImage.setAttribute('class', 'image');
        characterImage.setAttribute('id', 'image-for-information');
        columnFull.appendChild(characterImage);

        row1 = document.createElement('div');
        row1.setAttribute('class', 'row justify-center');
        columnFull.appendChild(row1);

        characterName = document.createElement('h1');
        characterName.textContent = xhr.response.results[j].name;
        row1.appendChild(characterName);

        row2 = document.createElement('div');
        row2.setAttribute('class', 'row');
        columnFull.appendChild(row2);

        characterStatus = document.createElement('h2');
        characterStatus.textContent = 'Status: ' + xhr.response.results[j].status;
        characterStatus.setAttribute('class', 'margin-left');
        row2.appendChild(characterStatus);

        row3 = document.createElement('div');
        row3.setAttribute('class', 'row');
        columnFull.appendChild(row3);

        characterSpecies = document.createElement('h2');
        characterSpecies.textContent = 'Species: ' + xhr.response.results[j].species;
        characterSpecies.setAttribute('class', 'margin-left');
        row3.appendChild(characterSpecies);

        row4 = document.createElement('div');
        row4.setAttribute('class', 'row');
        columnFull.appendChild(row4);

        characterGender = document.createElement('h2');
        characterGender.textContent = 'Gender: ' + xhr.response.results[j].gender;
        characterGender.setAttribute('class', 'margin-left');
        row4.appendChild(characterGender);

        row5 = document.createElement('div');
        row5.setAttribute('class', 'row');
        columnFull.appendChild(row5);

        characterLocation = document.createElement('h2');
        characterLocation.textContent = 'Location: ' + xhr.response.results[j].location.name;
        characterLocation.setAttribute('class', 'margin-left');
        row5.appendChild(characterLocation);

        row6 = document.createElement('div');
        row6.setAttribute('class', 'row');
        columnFull.appendChild(row6);

        episodesText = document.createElement('h2');
        episodesText.textContent = 'Episodes:  ';
        episodesText.setAttribute('class', 'margin-left');
        row6.appendChild(episodesText);

        characterEpisode = document.createElement('h2');
        for (l = 0; l < xhr.response.results[j].episode.length; l++) {
          if (l === xhr.response.results[j].episode.length - 1) {
            characterEpisode.textContent += xhr.response.results[j].episode[l].slice(40);
          } else {
            characterEpisode.textContent += xhr.response.results[j].episode[l].slice(40) + ', ';
          }
          characterEpisode.setAttribute('class', 'margin-left');
          row6.appendChild(characterEpisode);
        }
        styleDocument.replaceWith(style2);
      }
    }
  }
});

navbar.addEventListener('click', function () {
  if (event.target.tagName === 'A') {
    for (var k = 0; k < view.length; k++) {
      if (event.target.getAttribute('data-view') === view[k].getAttribute('data-view')) {
        view[k].setAttribute('class', 'view active');
      } else {
        view[k].setAttribute('class', 'view hidden');
      }
    }
  }
});

// ep1-20 (season 1 1-11) (season 2 12-20)
var xhrEpisodePage1 = new XMLHttpRequest();
xhrEpisodePage1.open('GET', 'https://rickandmortyapi.com/api/episode?page=1');
xhrEpisodePage1.responseType = 'json';

xhrEpisodePage1.addEventListener('load', function () {
  for (var m = 0; m < 11; m++) {
    var episodesRow = document.createElement('div');
    episodesRow.setAttribute('class', 'season1 row view hidden');
    season1.appendChild(episodesRow);

    var episodes = document.createElement('p');
    episodes.textContent = 'Episode ' + (m + 1) + ': ' + xhrEpisodePage1.response.results[m].name;
    episodesRow.appendChild(episodes);
  }
  for (m = 12; m < 20; m++) {
    episodesRow = document.createElement('div');
    episodesRow.setAttribute('class', 'season2 row view hidden');
    season2.appendChild(episodesRow);

    episodes = document.createElement('p');
    episodes.textContent = 'Episode ' + (m + 1) + ': ' + xhrEpisodePage1.response.results[m].name;
    episodesRow.appendChild(episodes);

  }
});
xhrEpisodePage1.send();

// ep21-40 (season 2 21) (season 3 22-31) (season 4 32-40)
var xhrEpisodePage2 = new XMLHttpRequest();
xhrEpisodePage2.open('GET', 'https://rickandmortyapi.com/api/episode?page=2');
xhrEpisodePage2.responseType = 'json';

xhrEpisodePage2.addEventListener('load', function () {
  for (var m = 0; m < 1; m++) {
    var episodesRow = document.createElement('div');
    episodesRow.setAttribute('class', 'season2 row view hidden');
    season2.appendChild(episodesRow);

    var episodes = document.createElement('p');
    episodes.textContent = 'Episode ' + (m + 21) + ': ' + xhrEpisodePage2.response.results[m].name;
    episodesRow.appendChild(episodes);
  }
  for (m = 1; m < 11; m++) {
    episodesRow = document.createElement('div');
    episodesRow.setAttribute('class', 'season3 row view hidden');
    season3.appendChild(episodesRow);

    episodes = document.createElement('p');
    episodes.textContent = 'Episode ' + (m + 21) + ': ' + xhrEpisodePage2.response.results[m].name;
    episodesRow.appendChild(episodes);
  }
  for (m = 11; m < 20; m++) {
    episodesRow = document.createElement('div');
    episodesRow.setAttribute('class', 'season4 row view hidden');
    season4.appendChild(episodesRow);

    episodes = document.createElement('p');
    episodes.textContent = 'Episode ' + (m + 21) + ': ' + xhrEpisodePage2.response.results[m].name;
    episodesRow.appendChild(episodes);
  }
});
xhrEpisodePage2.send();

// ep41-51 (season 4 41) (season 5 42-51)
var xhrEpisodePage3 = new XMLHttpRequest();
xhrEpisodePage3.open('GET', 'https://rickandmortyapi.com/api/episode?page=3');
xhrEpisodePage3.responseType = 'json';

xhrEpisodePage3.addEventListener('load', function () {
  for (var m = 0; m < 1; m++) {
    var episodesRow = document.createElement('div');
    episodesRow.setAttribute('class', 'season4 row view hidden');
    season4.appendChild(episodesRow);

    var episodes = document.createElement('p');
    episodes.textContent = 'Episode ' + (m + 41) + ': ' + xhrEpisodePage3.response.results[m].name;
    episodesRow.appendChild(episodes);
  }
  for (m = 1; m < 11; m++) {
    episodesRow = document.createElement('div');
    episodesRow.setAttribute('class', 'season5 row view hidden');
    season5.appendChild(episodesRow);

    episodes = document.createElement('p');
    episodes.textContent = 'Episode ' + (m + 41) + ': ' + xhrEpisodePage3.response.results[m].name;
    episodesRow.appendChild(episodes);
  }
});
xhrEpisodePage3.send();

// episodeDirectory.addEventListener('click', function () {
// if (event.target.tagName === 'BUTTON') {
// for (var m = 0; m<button.length; m++) {
//       if(button[m].getAttribute('id') === )
//    }

//   }
//  })
