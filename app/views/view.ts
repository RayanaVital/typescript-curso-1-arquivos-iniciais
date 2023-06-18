export class View<T> {

    protected elemento : HTMLElement;

    constructor(seletor: string){
        this.elemento = document.querySelector(seletor)
    }

    update(model: T): void {
        this.elemento.innerHTML = this.template(model);
    }

    template(model: T): string {
      throw Error('Classe filha precisa implementar o método template')
        }
}