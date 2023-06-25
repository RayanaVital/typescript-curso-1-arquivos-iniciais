export class Negociacao {

    

    constructor(private _data: Date, public readonly quantidade: number, public readonly valor: number) {
    }

    public get data(){
        const data = new Date(this._data.getTime());
        return data;
    }
    
    public get volume(): number{
        return this.quantidade * this.valor;
    }

    public static createOf(dateString: string, quantityString: string, valueString: string ): Negociacao{
        const exp = /-/g;
        const date = new Date(dateString.replace(exp, ','))
        const quantidade = parseInt(quantityString);
        const valor = parseInt(valueString);
        return new Negociacao(
            date, 
            quantidade, 
            valor
            );
        
    }
    //metodos estaticos podem ser chamados diretamente na classe sem ser estanciados

}