import { negociacaoController } from "./controllers/negociacao-controller.js";

const controller = new negociacaoController();
const form = document.querySelector('.form');
if(form){
    form.addEventListener('submit', event => {
        event.preventDefault();
        controller.adiciona();
    });
}else {
    throw Error ('Não foi possivel iniciar a aplicação. Verifique se o form existe.')
}

