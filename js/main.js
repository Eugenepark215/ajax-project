var characterList = document.querySelector('#character-list');
var viewCharacters = document.querySelector('#view-characters');
var characterInformation = document.querySelector('#character-information-detail');
var episodeDirectory = document.querySelector('#episode-directory');
var episodeByCharacters = document.querySelector('#characters-by-episode');
var viewCharacterByEpisode = document.querySelector('#view-character-by-episode');
var view = document.querySelectorAll('.view');
var navbar = document.querySelector('.navbar');
var portal = document.querySelector('#portal');

var season1 = document.querySelector('#season1');
var season2 = document.querySelector('#season2');
var season3 = document.querySelector('#season3');
var season4 = document.querySelector('#season4');
var season5 = document.querySelector('#season5');
var series = document.querySelectorAll('.series');

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

        var rowName = document.createElement('div');
        rowName.setAttribute('class', 'row justify-center');
        columnFull.appendChild(rowName);

        var characterName = document.createElement('h1');
        characterName.textContent = xhr.response.results[j].name;
        rowName.appendChild(characterName);

        var rowStatus = document.createElement('div');
        rowStatus.setAttribute('class', 'row');
        columnFull.appendChild(rowStatus);

        var characterStatus = document.createElement('h2');
        characterStatus.textContent = 'Status: ' + xhr.response.results[j].status;
        characterStatus.setAttribute('class', 'margin-left');
        rowStatus.appendChild(characterStatus);

        var rowSpecies = document.createElement('div');
        rowSpecies.setAttribute('class', 'row');
        columnFull.appendChild(rowSpecies);

        var characterSpecies = document.createElement('h2');
        characterSpecies.textContent = 'Species: ' + xhr.response.results[j].species;
        characterSpecies.setAttribute('class', 'margin-left');
        rowSpecies.appendChild(characterSpecies);

        var rowGender = document.createElement('div');
        rowGender.setAttribute('class', 'row');
        columnFull.appendChild(rowGender);

        var characterGender = document.createElement('h2');
        characterGender.textContent = 'Gender: ' + xhr.response.results[j].gender;
        characterGender.setAttribute('class', 'margin-left');
        rowGender.appendChild(characterGender);

        var rowLocation = document.createElement('div');
        rowLocation.setAttribute('class', 'row');
        columnFull.appendChild(rowLocation);

        var characterLocation = document.createElement('h2');
        characterLocation.textContent = 'Location: ' + xhr.response.results[j].location.name;
        characterLocation.setAttribute('class', 'margin-left');
        rowLocation.appendChild(characterLocation);

        var rowEpisodes = document.createElement('div');
        rowEpisodes.setAttribute('class', 'row');
        columnFull.appendChild(rowEpisodes);

        var episodesText = document.createElement('h2');
        episodesText.textContent = 'Episodes:  ';
        episodesText.setAttribute('class', 'margin-left');
        rowEpisodes.appendChild(episodesText);

        var characterEpisode = document.createElement('h2');
        for (var l = 0; l < xhr.response.results[j].episode.length; l++) {
          if (l === xhr.response.results[j].episode.length - 1) {
            characterEpisode.textContent += xhr.response.results[j].episode[l].slice(40);
          } else {
            characterEpisode.textContent += xhr.response.results[j].episode[l].slice(40) + ', ';
          }
          characterEpisode.setAttribute('class', 'margin-left');
          rowEpisodes.appendChild(characterEpisode);
        }
      }
    }
  } else if (event.target.tagName === 'IMG' && characterInformation.hasChildNodes()) {
    viewCharacters.setAttribute('class', 'view hidden');
    characterInformation.setAttribute('class', 'view active');
    for (j = 0; j < xhr.response.results.length; j++) {
      if (xhr.response.results[j].image === event.target.src) {
        var styleDocument = document.querySelector('#style-information');
        var styleReplace = document.createElement('div');
        styleReplace.setAttribute('id', 'style-information');

        columnFull = document.createElement('div');
        columnFull.setAttribute('class', 'column-full whitebackground borderradius');
        columnFull.setAttribute('id', 'column-for-information');
        styleReplace.appendChild(columnFull);

        characterImage = document.createElement('img');
        characterImage.setAttribute('src', xhr.response.results[j].image);
        characterImage.setAttribute('class', 'image');
        characterImage.setAttribute('id', 'image-for-information');
        columnFull.appendChild(characterImage);

        rowName = document.createElement('div');
        rowName.setAttribute('class', 'row justify-center');
        columnFull.appendChild(rowName);

        characterName = document.createElement('h1');
        characterName.textContent = xhr.response.results[j].name;
        rowName.appendChild(characterName);

        rowStatus = document.createElement('div');
        rowStatus.setAttribute('class', 'row');
        columnFull.appendChild(rowStatus);

        characterStatus = document.createElement('h2');
        characterStatus.textContent = 'Status: ' + xhr.response.results[j].status;
        characterStatus.setAttribute('class', 'margin-left');
        rowStatus.appendChild(characterStatus);

        rowSpecies = document.createElement('div');
        rowSpecies.setAttribute('class', 'row');
        columnFull.appendChild(rowSpecies);

        characterSpecies = document.createElement('h2');
        characterSpecies.textContent = 'Species: ' + xhr.response.results[j].species;
        characterSpecies.setAttribute('class', 'margin-left');
        rowSpecies.appendChild(characterSpecies);

        rowGender = document.createElement('div');
        rowGender.setAttribute('class', 'row');
        columnFull.appendChild(rowGender);

        characterGender = document.createElement('h2');
        characterGender.textContent = 'Gender: ' + xhr.response.results[j].gender;
        characterGender.setAttribute('class', 'margin-left');
        rowGender.appendChild(characterGender);

        rowLocation = document.createElement('div');
        rowLocation.setAttribute('class', 'row');
        columnFull.appendChild(rowLocation);

        characterLocation = document.createElement('h2');
        characterLocation.textContent = 'Location: ' + xhr.response.results[j].location.name;
        characterLocation.setAttribute('class', 'margin-left');
        rowLocation.appendChild(characterLocation);

        rowEpisodes = document.createElement('div');
        rowEpisodes.setAttribute('class', 'row');
        columnFull.appendChild(rowEpisodes);

        episodesText = document.createElement('h2');
        episodesText.textContent = 'Episodes:  ';
        episodesText.setAttribute('class', 'margin-left');
        rowEpisodes.appendChild(episodesText);

        characterEpisode = document.createElement('h2');
        for (l = 0; l < xhr.response.results[j].episode.length; l++) {
          if (l === xhr.response.results[j].episode.length - 1) {
            characterEpisode.textContent += xhr.response.results[j].episode[l].slice(40);
          } else {
            characterEpisode.textContent += xhr.response.results[j].episode[l].slice(40) + ', ';
          }
          characterEpisode.setAttribute('class', 'margin-left');
          rowEpisodes.appendChild(characterEpisode);
        }
        styleDocument.replaceWith(styleReplace);
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

function episodeDiv(season, xhr, start, end) {
  for (var m = start; m < end; m++) {
    var episodesRow = document.createElement('div');
    episodesRow.setAttribute('class', 'season row');
    season.appendChild(episodesRow);
    var episodes = document.createElement('p');
    episodes.textContent = 'Episode ' + xhr.response.results[m].id + ': ' + xhr.response.results[m].name;
    episodesRow.appendChild(episodes);
  }
}

function newXHRPage(url) {
  var newXHRPage = new XMLHttpRequest();
  newXHRPage.open('GET', url);
  newXHRPage.responseType = 'json';
  newXHRPage.addEventListener('load', function () {
    data.page.push(newXHRPage.response.results);
    if (url === data.episodes[0]) {
      episodeDiv(season1, newXHRPage, 0, 11);
      episodeDiv(season2, newXHRPage, 11, 20);
    }
    if (url === data.episodes[1]) {
      episodeDiv(season2, newXHRPage, 0, 1);
      episodeDiv(season3, newXHRPage, 1, 11);
      episodeDiv(season4, newXHRPage, 11, 20);
    }
    if (url === data.episodes[2]) {
      episodeDiv(season4, newXHRPage, 0, 1);
      episodeDiv(season5, newXHRPage, 1, 11);
    }
  });
  newXHRPage.send();
}

window.addEventListener('load', function () {
  for (var i = 0; i < data.episodes.length; i++) {
    newXHRPage(data.episodes[i]);
  }
});

var button = document.querySelectorAll('button');

for (var k = 0; k < button.length; k++) {
  button[k].addEventListener('click', function () {
    for (var j = 0; j < series.length; j++) {
      if (series[j].className.includes(event.target.className)) {
        series[j].setAttribute('class', 'season active');
      } else if (series[j].getAttribute('id').includes(event.target.className) && series[j].className === 'active') {
        series[j].setAttribute('class', 'season hidden');
      } else if (series[j].getAttribute('id').includes(event.target.className) && series[j].className === 'hidden') {
        series[j].setAttribute('class', 'season active');
      }
    }
  });
}

function createXHR(url) {
  var newXHR = new XMLHttpRequest();
  newXHR.open('GET', url);
  newXHR.responseType = 'json';
  newXHR.addEventListener('load', function () {
    var style = document.createElement('div');
    style.setAttribute('class', 'flex-basis justify-center padding');
    style.setAttribute('id', 'style');
    episodeByCharacters.appendChild(style);

    var columnThreeFourths = document.createElement('div');
    columnThreeFourths.setAttribute('class', 'column-three-fourths whitebackground borderradius');
    style.appendChild(columnThreeFourths);

    var characterImage = document.createElement('img');
    characterImage.setAttribute('src', newXHR.response.image);
    characterImage.setAttribute('class', 'image');
    columnThreeFourths.appendChild(characterImage);

    var characterName = document.createElement('p');
    characterName.setAttribute('class', 'character-name');
    characterName.textContent = newXHR.response.name;
    columnThreeFourths.appendChild(characterName);
  });
  newXHR.send();
}

function showEpisode(page) {
  for (var i = 0; i < page.length; i++) {
    if (page[i].name.includes(event.target.textContent.slice(12))) {
      for (var j = 0; j < page[i].characters.length; j++) {
        createXHR(page[i].characters[j]);
      }
    }
  }
}
var episodeHeading = document.querySelector('#episode-heading');
episodeDirectory.addEventListener('click', function () {
  if (event.target.tagName === 'P') {
    episodeDirectory.setAttribute('class', 'view hidden');
    viewCharacterByEpisode.setAttribute('class', 'view active');
    episodeHeading.textContent = event.target.textContent;
    showEpisode(data.page[0]);
    showEpisode(data.page[1]);
    showEpisode(data.page[2]);
  }
});

portal.addEventListener('click', function () {
  viewCharacterByEpisode.setAttribute('class', 'view hidden');
  viewCharacters.setAttribute('class', 'view active');
});
