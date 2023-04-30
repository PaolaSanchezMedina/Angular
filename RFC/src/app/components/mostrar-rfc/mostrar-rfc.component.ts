import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mostrar-rfc',
  templateUrl: './mostrar-rfc.component.html',
  styleUrls: ['./mostrar-rfc.component.css']
})
export class MostrarRfcComponent {
  @Input() listadoRFC: any;
  @Output() deleteRFC = new EventEmitter<number>();
  constructor(){

  }
  ngOnInit(): void{

  }
  eliminarRFC(index: number){
    this.deleteRFC.emit(index);
  }
}
