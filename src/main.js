import { imprimeCards } from './data.js';
//arrayEpisodios, dadosRickemorty, testeFilter
import data from './data/rickandmorty/rickandmorty.js';
//DOM, nós, registro de manejadores de eventos (event listeners ou event handlers)

  const listagemCards = document.getElementById("cards");
  listagemCards.innerHTML = imprimeCards(data.results);
  
function listarPersonagens (listaPersonagem){
  let option = ""
  for (let personagem of listaPersonagem){
    option += `<option>${personagem.name}</option>`
  }
  return option
}
const opcoesPersonagens = document.getElementById("personagens")
opcoesPersonagens.innerHTML = listarPersonagens(data.results);

function listarEpisodios (listaEpisodios){
  let option = ""
  for (let episodio of listaEpisodios){
    option += `<option>${episodio.episode.length}</option>`
  }
  return option
}
const opcoesEpisodios = document.getElementById("episodios")
opcoesEpisodios.innerHTML = listarEpisodios(data.results)

function listarEspecies (listaEspecies){
  let option = ""
  for (let especie of listaEspecies){
    option += `<option>${especie.species}</option>`
  }
  return option
}
const opcoesEspecies = document.getElementById("especies")
opcoesEspecies.innerHTML = listarEspecies(data.results)

function listarDimensoes (listaDimensoes){
  let option = ""
  for (let dimensao of listaDimensoes){
    option += `<option>${dimensao.location.name}</option>`
  }
  return option
}
const opcoesDimensoes = document.getElementById("dimensoes");
opcoesDimensoes.innerHTML = listarDimensoes(data.results);

document.getElementById("ordenar-a-z").addEventListener('click', () => {
  const ordemPersonagensAz = (data.results.sort((a, z)=> a.name.localeCompare(z.name)));
  console.log(ordemPersonagensAz);
});

document.getElementById("ordenar-z-a").addEventListener('click', () => {
  const ordemPersonagensZa = (data.results.sort((a, z) => z.name.localeCompare(a.nome)));
  console.log(ordemPersonagensZa);
  imprimeCards(data.results);
});

//const ordemLocaldeOrigemAz = (data.results.sort((a, z)=> a.origin.name.localeCompare(z.origin.name)));

//const ordenarPorEspecieAz = (data.results.sort((a, z)=> a.species.localeCompare(z.species)));