const listaDeTeclas = document.querySelectorAll('.tecla');

function tocaSom(idElementoAudio) {
  document.querySelector(idElementoAudio).play();
}

for (let index = 0; index < listaDeTeclas.length; index++) {
  const tecla = listaDeTeclas[index];
  const som = tecla.classList[1];
  const idAudio = `#som_${som}`;

  tecla.onclick = function () {
    tocaSom(idAudio);
  }

}
