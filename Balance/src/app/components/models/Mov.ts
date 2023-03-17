export class movimiento{
    movimiento: string;
    cuenta: string;
    monto: number;

    constructor(movimiento: string, cuenta: string, monto: number){
        this.movimiento = movimiento;
        this.cuenta = cuenta;
        this.monto = monto;
    }
}