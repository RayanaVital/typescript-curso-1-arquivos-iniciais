export abstract class View<T> {

    protected elemento : HTMLElement;

    constructor(seletor: string){
        this.elemento = document.querySelector(seletor)
    }

    update(model: T): void {
        this.elemento.innerHTML = this.template(model);
    }

    abstract template(model: T): string;  //metodo abstrato, não precisa ser definida na classe pai, porém precisa ser implementado na classe filha e deve ser definida pela classe filhas
}