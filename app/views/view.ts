export abstract class View<T> {

    protected elemento : HTMLElement;
    private escape = false;

    //parametros opcionais não podem ser seguidos de parametros required, os required devem vir primeiro, seguidos dos opcionais
    constructor(seletor: string, escape?: boolean){
        this.elemento = document.querySelector(seletor)
        if(escape){
            this.escape = escape;
        }
    }

    public update(model: T): void {
        let template = this.template(model);
        if(this.escape) {
            template = template.replace(/<script>[\s\S]*?<script>/, '')
        }
        this.elemento.innerHTML = this.template(model);
    }

    protected abstract template(model: T): string;  //metodo abstrato, não precisa ser definida na classe pai, porém precisa ser implementado na classe filha e deve ser definida pela classe filhas
        //como o método template esta sendo usado dentro do update não há necessidade de ser possivel implementalo no controller, portando o método deve ser protected na classe pai e filhas de forma que não possa ser instanciado 
}

