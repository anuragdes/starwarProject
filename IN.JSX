



function getLukeSkywalker() {
  const url = 'https://swapi.dev/api/people/1/';

  fetch(url)
    .then(response => response.json())
    .then(data => {
      displayLukeSkywalker(data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}




function displayLukeSkywalker(data) {
  const outputElement = document.getElementById('output');
  outputElement.innerHTML = `
    <p><strong>Name:</strong> ${data.name}</p>
    <p><strong>Height:</strong> ${data.height} cm</p>
    <p><strong>Mass:</strong> ${data.mass} kg</p>
    <p><strong>Hair Color:</strong> ${data.hair_color}</p>
    <p><strong>Skin Color:</strong> ${data.skin_color}</p>
    <p><strong>Eye Color:</strong> ${data.eye_color}</p>
    <p><strong>Birth Year:</strong> ${data.birth_year}</p>
    <p><strong>Gender:</strong> ${data.gender}</p>
    <p><strong>Homeworld:</strong> <a href="${data.homeworld}" target="_blank">${data.homeworld}</a></p>
  `;
}

