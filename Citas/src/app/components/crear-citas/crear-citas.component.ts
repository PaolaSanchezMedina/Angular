import { Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-crear-citas',
  templateUrl: './crear-citas.component.html',
  styleUrls: ['./crear-citas.component.css']
})
export class CrearCitasComponent {
  nombre: string = "";
  fecha: string = "";
  hora: string = "";
  sintomas: string = "";

  formularioIncorrecto: boolean = false;
  @Output() nuevaCita = new EventEmitter<any>();


  constructor(){

  }
  ngOnInit(): void{

  }
  agregarCita()
  {
    if(this.nombre=='' || this.fecha=='' || this.hora=='' || this.sintomas==''){
      this.formularioIncorrecto = true;
      return; //Para salir del método
    }
    this.formularioIncorrecto = false;
    //Creamos un objeto para enviarselo al padre
    const CITA =
    {
      nombre: this.nombre,
      fecha: this.fecha,
      hora: this.hora,
      sintomas: this.sintomas 
    }
    console.log('Soy el hijo');
    this.nuevaCita.emit(CITA);
    this.resetCampos();
  }
  //Inicializamos
  resetCampos(){
    this.nombre = ' ';
    this.fecha = ' ';
    this.hora = ' ';
    this.sintomas = ' ';
  }
}