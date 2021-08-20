function weather(city) {
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=cca1f8b5c1a43e6f8324b6feb572149d`)
  .then(res => res.json())
  .then(data => {
    
    const locationName = document.getElementById('location-name');
    locationName.innerText =data.name;
    
    const weatherIcon = document.getElementById('weather-icon');
    weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    
    const temp = document.getElementById('temperature');
    temp.innerText = data.main.temp;
    
    const lead = document.querySelector('.lead');
    lead.innerText = data.weather[0].main;
  })
};

const search = document.getElementById('search');
search.addEventListener('click', function () {
  cityName = document.getElementById('city-name').value;
  if (cityName == '') {
    cityName = 'Dhaka';
  }
  weather(cityName);
});