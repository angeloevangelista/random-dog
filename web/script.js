const apiUrl = 'https://dog.ceo/api/breeds/image/random';

document.addEventListener("DOMContentLoaded", start);

async function fetchDog() {
  const { message: link } = await (await fetch(apiUrl)).json();

  const image = await (await fetch(link)).blob();

  const imageElement = document.createElement('img');
  imageElement.src = URL.createObjectURL(image);

  const container = document.querySelector('.dogs-container');

  let children = [...container.children];

  children = children.reverse();

  children.push(imageElement);

  container.innerHTML = '';

  children.reverse().forEach(child => container.appendChild(child)
  );
}

function start() {
  const button = document.querySelector('button');

  button.addEventListener('click', fetchDog)
}