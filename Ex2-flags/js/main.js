import flags from './model/flags.js';

function createFlagCard(flag) {
    const div = document.createElement('div');
    div.id = flag.id;
    div.className = "flag col-2 my-2 text-center";

    const img = document.createElement('img');
    img.src = flag.img;
    img.alt = flag.nome;

    const p = document.createElement('p');
    p.textContent = flag.nome;

    div.appendChild(img);
    div.appendChild(p);

    return div;
}

const main = document.querySelector('main');
flags.forEach(flag => main.appendChild(createFlagCard(flag)));
