export abstract class View<T> {

    protected elemento : HTMLElement;

    constructor(seletor: string){
        this.elemento = document.querySelector(seletor)
    }

    update(model: T): void {
        this.elemento.innerHTML = this.template(model);
    }

    protected abstract template(model: T): string;  //metodo abstrato, não precisa ser definida na classe pai, porém precisa ser implementado na classe filha e deve ser definida pela classe filhas
        //como o método template esta sendo usado dentro do update não há necessidade de ser possivel implementalo no controller, portando o método deve ser protected na classe pai e filhas de forma que não possa ser instanciado 
}

