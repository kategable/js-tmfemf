// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

function test() {
  var i = 100;
  for (var i =0 ; i<10; i++){
    appDiv.innerHTML +=`<div>${i}</div>`;
  }
}

test()