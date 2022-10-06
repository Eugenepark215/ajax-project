var characterList = document.querySelector('#character-list');
var viewCharacters = document.querySelector('#view-characters');
var characterInformation = document.querySelector('#character-information-detail');
var episodeDirectory = document.querySelector('#episode-directory');
var episodeByCharacters = document.querySelector('#characters-by-episode');
var viewCharacterByEpisode = document.querySelector('#view-character-by-episode');
var bookmarks = document.querySelector('#bookmarks');
var viewBookmarks = document.querySelector('#view-bookmarks');
var navBookmarks = document.querySelector('#nav-bookmarks');
var placeHolderBookmark = document.querySelector('#place-holder-bookmark');
var view = document.querySelectorAll('.view');
var navbar = document.querySelector('.navbar');
var portal = document.querySelectorAll('.portal');
var season1 = document.querySelector('#season1');
var season2 = document.querySelector('#season2');
var season3 = document.querySelector('#season3');
var season4 = document.querySelector('#season4');
var season5 = document.querySelector('#season5');
var series = document.querySelectorAll('.series');

var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://rickandmortyapi.com/api/character');
xhr.responseType = 'json';

function createCharacterImageCard(xhrResponse, element, classSelector, columnType, heartClassSelector) {
  const characterObject = xhrResponse;
  var style = document.createElement('div');
  style.setAttribute('class', classSelector);

  var column = document.createElement('div');
  column.setAttribute('class', columnType + ' white-background border-radius');
  style.appendChild(column);

  var characterImage = document.createElement('img');
  characterImage.setAttribute('src', xhrResponse.image);
  characterImage.setAttribute('class', 'image');
  column.appendChild(characterImage);

  var rowNameAndHeart = document.createElement('div');
  rowNameAndHeart.setAttribute('class', 'row justify-space-around');
  column.appendChild(rowNameAndHeart);
  var characterName = document.createElement('p');
  characterName.setAttribute('class', 'character-name');
  characterName.textContent = xhrResponse.name;
  rowNameAndHeart.appendChild(characterName);

  var heart = document.createElement('i');
  heart.setAttribute('class', heartClassSelector);
  heart.addEventListener('click', function () {
    data.bookmarkEntries.push(characterObject);
  });
  rowNameAndHeart.appendChild(heart);
  return style;
}

xhr.addEventListener('load', function () {
  for (var i = 0; i < xhr.response.results.length; i++) {
    characterList.appendChild(createCharacterImageCard(xhr.response.results[i], characterList, 'all-characters flex-basis justify-center padding', 'column-three-fourths', 'fa-regular fa-heart'));
  }
});
xhr.send();

function characterInformationDomReturn(xhrResponse) {
  var characterObject = xhrResponse;
  var style = document.createElement('div');
  style.setAttribute('id', 'style-information');

  var columnFull = document.createElement('div');
  columnFull.setAttribute('class', 'column-full white-background border-radius');
  columnFull.setAttribute('id', 'column-for-information');
  style.appendChild(columnFull);

  var characterImage = document.createElement('img');
  characterImage.setAttribute('src', xhrResponse.image);
  characterImage.setAttribute('class', 'image');
  characterImage.setAttribute('id', 'image-for-information');
  columnFull.appendChild(characterImage);

  var rowName = document.createElement('div');
  rowName.setAttribute('class', 'row justify-center');
  columnFull.appendChild(rowName);

  var characterName = document.createElement('h1');
  characterName.textContent = xhrResponse.name;
  rowName.appendChild(characterName);

  var heart = document.createElement('i');
  heart.setAttribute('class', 'fa-regular fa-heart');
  for (var z = 0; z < data.bookmarkEntries.length; z++) {
    if (event.target.src === data.bookmarkEntries[z].image) {
      heart.setAttribute('class', 'fa-solid fa-heart');
    }
  }
  heart.addEventListener('click', function () {
    data.bookmarkEntries.push(characterObject);
  });
  heart.setAttribute('id', 'heart-information');
  rowName.appendChild(heart);

  var rowStatus = document.createElement('div');
  rowStatus.setAttribute('class', 'row');
  columnFull.appendChild(rowStatus);

  var characterStatus = document.createElement('h2');
  characterStatus.textContent = 'Status: ' + xhrResponse.status;
  characterStatus.setAttribute('class', 'margin-left');
  rowStatus.appendChild(characterStatus);

  var rowSpecies = document.createElement('div');
  rowSpecies.setAttribute('class', 'row');
  columnFull.appendChild(rowSpecies);

  var characterSpecies = document.createElement('h2');
  characterSpecies.textContent = 'Species: ' + xhrResponse.species;
  characterSpecies.setAttribute('class', 'margin-left');
  rowSpecies.appendChild(characterSpecies);

  var rowGender = document.createElement('div');
  rowGender.setAttribute('class', 'row');
  columnFull.appendChild(rowGender);

  var characterGender = document.createElement('h2');
  characterGender.textContent = 'Gender: ' + xhrResponse.gender;
  characterGender.setAttribute('class', 'margin-left');
  rowGender.appendChild(characterGender);

  var rowLocation = document.createElement('div');
  rowLocation.setAttribute('class', 'row');
  columnFull.appendChild(rowLocation);

  var characterLocation = document.createElement('h2');
  characterLocation.textContent = 'Location: ' + xhrResponse.location.name;
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
  for (var l = 0; l < xhrResponse.episode.length; l++) {
    if (l === xhrResponse.episode.length - 1) {
      characterEpisode.textContent += xhrResponse.episode[l].slice(40);
    } else {
      characterEpisode.textContent += xhrResponse.episode[l].slice(40) + ', ';
    }
    characterEpisode.setAttribute('class', 'margin-left');
    rowEpisodes.appendChild(characterEpisode);
  }
  return style;
}

function characterInformationShow(dataView, xhrResponse) {
  if (event.target.tagName === 'IMG' && !characterInformation.hasChildNodes()) {
    dataView.setAttribute('class', 'view hidden');
    characterInformation.setAttribute('class', 'view active');
    for (var i = 0; i < xhrResponse.length; i++) {
      if (xhrResponse[i].image === event.target.src) {
        characterInformation.appendChild(characterInformationDomReturn(xhrResponse[i]));
      }
    }
  } else if (event.target.tagName === 'IMG' && characterInformation.hasChildNodes()) {
    dataView.setAttribute('class', 'view hidden');
    characterInformation.setAttribute('class', 'view active');
    var styleReplace = document.querySelector('#style-information');
    for (var j = 0; j < xhrResponse.length; j++) {
      if (xhrResponse[j].image === event.target.src) {
        styleReplace.replaceWith(characterInformationDomReturn(xhrResponse[j]));
      }
    }
  }
}

characterList.addEventListener('click', function () {
  characterInformationShow(viewCharacters, xhr.response.results);
});

episodeByCharacters.addEventListener('click', function () {
  characterInformationShow(viewCharacterByEpisode, data.charactersByEpisodes);
});

bookmarks.addEventListener('click', function () {
  characterInformationShow(viewBookmarks, data.bookmarkEntries);
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

function episodeDiv(season, xhrResponse, start, end) {
  for (var m = start; m < end; m++) {
    var episodesRow = document.createElement('div');
    episodesRow.setAttribute('class', 'season row');
    season.appendChild(episodesRow);
    var episodes = document.createElement('a');
    episodes.textContent = 'Episode ' + xhrResponse.response.results[m].id + ': ' + xhrResponse.response.results[m].name;
    episodesRow.appendChild(episodes);
  }
}

function loadAndShowEpisodeList(url, index) {
  var newXHRPage = new XMLHttpRequest();
  newXHRPage.open('GET', url);
  newXHRPage.responseType = 'json';
  newXHRPage.addEventListener('load', function () {
    data.episodesPages.push(newXHRPage.response.results);
    if (index === 0) {
      episodeDiv(season1, newXHRPage, 0, 11);
      episodeDiv(season2, newXHRPage, 11, 20);
    }
    if (index === 1) {
      episodeDiv(season2, newXHRPage, 0, 1);
      episodeDiv(season3, newXHRPage, 1, 11);
      episodeDiv(season4, newXHRPage, 11, 20);
    }
    if (index === 2) {
      episodeDiv(season4, newXHRPage, 0, 1);
      episodeDiv(season5, newXHRPage, 1, 11);
    }
  });
  newXHRPage.send();
}
var episodePagesURL = ['https://rickandmortyapi.com/api/episode?page=1', 'https://rickandmortyapi.com/api/episode?page=2', 'https://rickandmortyapi.com/api/episode?page=3'];
window.addEventListener('load', function () {
  for (var i = 0; i < episodePagesURL.length; i++) {
    loadAndShowEpisodeList(episodePagesURL[i], i);
  }
});

var button = document.querySelectorAll('button');

for (var k = 0; k < button.length; k++) {
  button[k].addEventListener('click', function () {
    for (var j = 0; j < series.length; j++) {
      if (series[j].getAttribute('id').includes(event.target.className) && series[j].className.includes('active')) {
        series[j].setAttribute('class', event.target.className + ' season series hidden');
      } else if (series[j].getAttribute('id').includes(event.target.className) && series[j].className.includes('hidden')) {
        series[j].setAttribute('class', event.target.className + ' season series active');
      }
    }
  });
}

function createXHR(url) {
  var newXHR = new XMLHttpRequest();
  newXHR.open('GET', url);
  newXHR.responseType = 'json';
  newXHR.addEventListener('load', function () {
    var characterObject = newXHR.response;
    var styleDocument = document.createElement('div');
    styleDocument.setAttribute('class', 'flex-basis justify-center padding');
    styleDocument.setAttribute('id', 'style');
    episodeByCharacters.appendChild(styleDocument);

    var columnThreeFourths = document.createElement('div');
    columnThreeFourths.setAttribute('class', 'column-three-fourths white-background border-radius');
    styleDocument.appendChild(columnThreeFourths);

    var characterImage = document.createElement('img');
    characterImage.setAttribute('src', newXHR.response.image);
    characterImage.setAttribute('class', 'image');
    columnThreeFourths.appendChild(characterImage);

    var rowNameAndHeart = document.createElement('div');
    rowNameAndHeart.setAttribute('class', 'row justify-space-around');
    columnThreeFourths.appendChild(rowNameAndHeart);

    var characterName = document.createElement('p');
    characterName.setAttribute('class', 'character-name');
    characterName.textContent = newXHR.response.name;
    rowNameAndHeart.appendChild(characterName);

    var heart = document.createElement('i');
    heart.setAttribute('class', 'fa-regular fa-heart');
    for (var z = 0; z < data.bookmarkEntries.length; z++) {
      if (characterName.textContent === data.bookmarkEntries[z].name && characterImage.src === data.bookmarkEntries[z].image) {
        heart.setAttribute('class', 'fa-solid fa-heart');
      }
    }
    heart.addEventListener('click', function () {
      data.bookmarkEntries.push(characterObject);
    });
    heart.setAttribute('id', 'heart-information');
    rowNameAndHeart.appendChild(heart);
    data.charactersByEpisodes.push(characterObject);
  });
  newXHR.send();
}

function showEpisode(page) {
  for (var i = 0; i < page.length; i++) {
    if (page[i].name.includes(event.target.textContent.slice(12))) {
      episodeByCharacters.innerHTML = '';
      for (var j = 0; j < page[i].characters.length; j++) {
        createXHR(page[i].characters[j]);
      }
    }
  }
}
var episodeHeading = document.querySelector('#episode-heading');

episodeDirectory.addEventListener('click', function () {
  if (event.target.tagName === 'A') {
    episodeDirectory.setAttribute('class', 'view hidden');
    viewCharacterByEpisode.setAttribute('class', 'view active');
    episodeHeading.textContent = event.target.textContent;
    showEpisode(data.episodesPages[0]);
    showEpisode(data.episodesPages[1]);
    showEpisode(data.episodesPages[2]);
  }
});

window.addEventListener('click', function () {
  for (var i = 0; i < portal.length; i++) {
    if (event.target.src === 'http://localhost:5500/images/sticker_2060-512x512.png') {
      viewCharacterByEpisode.setAttribute('class', 'view hidden');
      viewBookmarks.setAttribute('class', 'view hidden');
      episodeDirectory.setAttribute('class', 'view active');
    }

  }
  var allCharacters = document.querySelectorAll('.all-characters');
  if (event.target.tagName === 'I' && event.target.closest('.flex-basis') !== null) {
    event.target.className = 'fa-solid fa-heart';
    placeHolderBookmark.setAttribute('class', 'hidden');
    for (var l = 0; l < allCharacters.length; l++) {
      if (allCharacters[l].children[0].children[0].src === event.target.closest('.flex-basis').children[0].children[0].src) {
        allCharacters[l].children[0].children[1].children[1].setAttribute('class', 'fa-solid fa-heart');
      }
    }
  } else if (event.target.tagName === 'I' && event.target.closest('#style-information') !== null) {
    event.target.className = 'fa-solid fa-heart';
    placeHolderBookmark.setAttribute('class', 'hidden');
    for (var k = 0; k < allCharacters.length; k++) {
      if (allCharacters[k].children[0].children[0].src === event.target.closest('#style-information').children[0].children[0].src) {
        allCharacters[k].children[0].children[1].children[1].setAttribute('class', 'fa-solid fa-heart');
      }
    }
  }
});

navBookmarks.addEventListener('click', function () {
  bookmarks.innerHTML = '';
  for (var i = 0; i < data.bookmarkEntries.length; i++) {
    bookmarks.appendChild(createCharacterImageCard(data.bookmarkEntries[i], bookmarks, 'all-characters flex-basis justify-center padding', 'column-three-fourths', 'fa-solid fa-heart'));
  }
});
