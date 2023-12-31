import { inspect } from "../decorators/inspect.js";
import { logTimeExecution } from "../decorators/log-time-execution.js";

export abstract class View<T> {

    protected elemento : HTMLElement;
    
    //parametros opcionais não podem ser seguidos de parametros required, os required devem vir primeiro, seguidos dos opcionais
    constructor(seletor: string){
        const elemento = document.querySelector(seletor);
        if(elemento){
            this.elemento = elemento as HTMLElement
        } else {
        throw Error (`Seletor ${seletor} não existe no DOM. Verifique.`)
        }
        
    }

    @inspect
    @logTimeExecution(true)
    public update(model: T): void {
        const t1 = performance.now()
        let template = this.template(model);
       
        this.elemento.innerHTML = this.template(model);
        const t2 = performance.now()
        console.log((t2-t1)/1000)
    }

    protected abstract template(model: T): string;  //metodo abstrato, não precisa ser definida na classe pai, porém precisa ser implementado na classe filha e deve ser definida pela classe filhas
        //como o método template esta sendo usado dentro do update não há necessidade de ser possivel implementalo no controller, portando o método deve ser protected na classe pai e filhas de forma que não possa ser instanciado 
}

