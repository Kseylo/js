'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
//AJAX call old school way
const request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.com/v3.1/name/russia');
request.send();

request.addEventListener('load', function () {
  console.log(this.responseText);
});
