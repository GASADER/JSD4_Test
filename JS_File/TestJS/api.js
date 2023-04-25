// const apiKey = ''; //your API key
// const city = 'Bangkok'; // replace with the city you want to get weather data for

const id = '0135560026742'

fetch(`https://dataapi.moc.go.th/juristic?juristic_id= ${id}`) 
  .then(response => response.json()) 
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log(error);
  });