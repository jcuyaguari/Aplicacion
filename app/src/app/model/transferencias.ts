export class Transferencia {
    public monto: any;
    public origen: string;
    public destino: string;
    public concepto: string;

    get getMonto(): any {
        return this.monto;
    }

    set setMonto(newMonto: any){
        this.monto = newMonto;
    }

    get getOrigen(): string {
        return this.origen;
    }

    set setOrigen(newOrigen: string){
        this.origen = newOrigen;
    }

    get getDestino(): string {
        return this.destino;
    }

    set setDestino(newDestino: string){
        this.destino = newDestino;
    }

    get getConcepto(): string {
        return this.concepto;
    }

    set setConcepto(newConcepto: string){
        this.concepto = newConcepto;
    }
}
