fetch('http://api.openweathermap.org/data/2.5/weather?q=Sydney&units=metric&appid=d224fbf524bf9e668484a0bbef35cd5f')
  .then(response => response.json())
  .then(data => print(data.weather[0].main));

  


  function print(line) {
    const appDiv = document.getElementById('home');
    const div = document.createElement('div');
    div.innerHTML = line;
    appDiv.appendChild(div)
  }