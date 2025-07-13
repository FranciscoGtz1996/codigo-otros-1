

const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const n = document.querySelector('.name'); /*Agregue . para seleccionar el elemento html y elimine el $ de la const n*/
const b = document.querySelector('.blog'); /*Agregue . para seleccionar el elemento del html y elimine el $ de la const b*/
const l = document.querySelector('.location'); /*Elimine el $ de la constante l */

async function displayUser(username) { /* Agregue la palabra async function, para que fuera función promesa*/
  n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  const data = await response.json(); /*Agregue data json() */
  console.log(data);
  n.textContent = `${data.name}`; /*Agregue backticks */
  b.textContent = `${data.blog}`; /**Agregue backticks */
  l.textContent = `${data.location}`; /*Agregue backticks */
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);