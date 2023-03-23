export class movimiento{
    movimiento: string;
    cuenta: string;
    monto: number;
    activosTotal: number;
    pasivosCTotal: number; 
    debe: number;
    haber: number;
    clave: number;

    constructor(clave: number, movimiento: string, cuenta: string, monto: number, activosTotal: number, pasivosCTotal: number, debe: number, haber: number){
        this.movimiento = movimiento;
        this.cuenta = cuenta;
        this.monto = monto;
        this.activosTotal = activosTotal;
        this.pasivosCTotal = pasivosCTotal;
        this.debe = debe;
        this.haber = haber;
        this.clave = clave;
    }
}