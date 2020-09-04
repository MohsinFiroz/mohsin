fetch('http://api.openweathermap.org/data/2.5/weather?q=Sydney&appid=d224fbf524bf9e668484a0bbef35cd5f')
  .then(response => response.json())
  .then(data => console.log(data));