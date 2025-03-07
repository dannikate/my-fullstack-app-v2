import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = /*html*/`
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
    <div id="send-call"></div>
    <div id="json-call"></div>
  </div>
`;

setupCounter(document.querySelector('#counter'));

getJsonMsg();

function getJsonMsg() {
  fetch('/api')
  .then(response => {
    if (!response.ok) {
      document.getElementById('json-call').textContent = 'Unable to retrieve JSON response :/'
      throw new Error('Unable to retrieve JSON response :/');
    } 
    return response.json();
  })
  .then((data) => { document.getElementById('json-call').innerHTML = /*html*/`the JSON response from the backend: <span style="color:yellow; font-weight:bold;">${data.message}</span>` });
}