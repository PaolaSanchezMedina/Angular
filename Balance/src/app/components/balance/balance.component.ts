import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { movimiento } from '../models/Mov';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent {
  movForm: FormGroup;
  keyStorage: string='todos';
  listMovimientos: movimiento[] = [];
  activos: number = 0;
  pasivos: number = 0;
  capital: number = 0;
  totalA: number = 0;
  totalPC: number = 0;
  haber: number = 0;
  debe: number = 0;
  balance: string = 'Balance';

  constructor(private mvt: FormBuilder){
    this.movForm = this.mvt.group({
      movimiento: ['', Validators.required],
      cuenta: ['', Validators.required],
      monto: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    const localStorageItem = localStorage.getItem(this.keyStorage);
    if(!localStorageItem){
      localStorage.setItem(this.keyStorage, JSON.stringify([]));
    }
    else{
      this.listMovimientos = JSON.parse(localStorageItem);
    }
  }

  agregarMovimiento(){ 
    const mov: movimiento = {
    movimiento: this.movForm.get('movimiento')?.value,
    cuenta: this.movForm.get('cuenta')?.value,
    monto: this.movForm.get('monto')?.value
    }
    //Agregar el objeto al arreglo
    this.listMovimientos.push(mov);
    //Guardar en local storage
    localStorage.setItem(this.keyStorage, JSON.stringify(this.listMovimientos));
  }
  eliminarMovimiento(index: number): void 
  {
    this.listMovimientos.splice(index,1);
    localStorage.setItem(this.keyStorage, JSON.stringify(this.listMovimientos));
  }
  actualizarBalance(){ 
    if(this.movForm.get('movimiento')?.value==='Activo'){
      this.activos = this.movForm.get('monto')?.value;
      this.totalA = this.totalA +  this.activos;
    }
    if(this.movForm.get('movimiento')?.value==='PasivoCapital'){
      this.pasivos = this.movForm.get('monto')?.value;
      this.totalPC = this.totalPC +  this.pasivos;
    }
    this.debe = this.totalA;
    this.haber = this.totalPC;
    if(this.debe===this.haber){
      this.balance="Balance cuadra"
    }else{
      this.balance="Balance no cuadra"
    }
  }
}