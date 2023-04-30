import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-crear-rfc',
  templateUrl: './crear-rfc.component.html',
  styleUrls: ['./crear-rfc.component.css']
})
export class CrearRfcComponent {
  rfc: string = "";
  nombre: string = "";
  primerApellido: string = "";
  segundoApellido: string = "";
  fecha: string = "";
  homoclave: string = "";

  formularioIncorrecto: boolean = false;
  @Output() nuevoRFC = new EventEmitter<any>();


  constructor() {

  }
  ngOnInit(): void {

  }
  agregarRFC() {
    if (this.nombre == '' || this.fecha == '') {
      this.formularioIncorrecto = true;
      return; //Para salir del método
    }
    this.formularioIncorrecto = false;
    //--------------------Codigo de RFC--------------------
    var primer = '';
    var segundo = '';
    var prinom = '';
    var dia = '';
    var mes = '';
    var anio = '';
    var caracterAux = 0;
    var aux1 = '';
    var aux2 = '';
    var aux3 = '';
    var aux4 = 0;
    var aux5 = 0;
    var aux6 = 0;
    var aux7 = 0;
    var aux8 = '';
    var aux9 = '';
    //----------Primer apellido----------
    primer = this.primerApellido.slice(0, 2).toUpperCase();
    if (primer == 'CH' || primer == 'LL') {
      aux1 = this.primerApellido.slice(0, 1).toUpperCase();
      aux2 = this.primerApellido.slice(2, 3).toUpperCase();
      primer = aux1 + aux2;
    }

    //----------Segundo Apellido----------
    segundo = this.segundoApellido.slice(0, 1).toUpperCase();
    //Si el segundo apellido esta vacio
    if (this.segundoApellido == '') {
      segundo = ' ';
    }

    //----------Nombre----------
    prinom = this.nombre.slice(0, 1).toUpperCase();

    //----------Fecha----------
    anio = this.fecha.slice(2, 4);
    mes = this.fecha.slice(5, 7);
    dia = this.fecha.slice(8, 10);

    //----------Homoclave----------
    aux3 = this.nombre.toUpperCase() + this.primerApellido.toUpperCase() + this.segundoApellido.toUpperCase();
    var caracteres = aux3.split('');
    for (var caracter of caracteres) {
      switch (caracter) {
        case 'A':
          caracterAux = 11;
          break;
        case 'B':
          caracterAux = 24;
          break;
        case 'C':
          caracterAux = 39;
          break;
        case 'D':
          caracterAux = 56;
          break;
        case 'E':
          caracterAux = 75;
          break;
        case 'F':
          caracterAux = 96;
          break;
        case 'G':
          caracterAux = 119;
          break;
        case 'H':
          caracterAux = 144;
          break;
        case 'I':
          caracterAux = 171;
          break;
        case 'J':
          caracterAux = 21;
          break;
        case 'K':
          caracterAux = 44;
          break;
        case 'L':
          caracterAux = 69;
          break;
        case 'M':
          caracterAux = 96;
          break;
        case 'N':
          caracterAux = 125;
          break;
        case 'Ñ':
          caracterAux = 10;
          break;
        case 'O':
          caracterAux = 156;
          break;
        case 'P':
          caracterAux = 189;
          break;
        case 'Q':
          caracterAux = 224;
          break;
        case 'R':
          caracterAux = 261;
          break;
        case 'S':
          caracterAux = 64;
          break;
        case 'T':
          caracterAux = 99;
          break;
        case 'U':
          caracterAux = 136;
          break;
        case 'V':
          caracterAux = 175;
          break;
        case 'W':
          caracterAux = 216;
          break;
        case 'X':
          caracterAux = 259;
          break;
        case 'Y':
          caracterAux = 304;
          break;
        case 'Z':
          caracterAux = 351;
          break;
      }
      aux4 = aux4 + caracterAux;
    }
    aux5 = aux4 % 1000;
    aux6 = Math.floor(aux5 / 34);
    aux7 = Math.floor(aux5 % 34);

    switch (aux6) {
      case 0:
        aux8 = '1'
        break;
      case 1:
        aux8 = '2'
        break;
      case 2:
        aux8 = '3'
        break;
      case 3:
        aux8 = '4'
        break;
      case 4:
        aux8 = '5'
        break;
      case 5:
        aux8 = '6'
        break;
      case 6:
        aux8 = '7'
        break;
      case 7:
        aux8 = '8'
        break;
      case 8:
        aux8 = '9'
        break;
      case 9:
        aux8 = 'A'
        break;
      case 10:
        aux8 = 'B'
        break;
      case 11:
        aux8 = 'C'
        break;
      case 12:
        aux8 = 'D'
        break;
      case 13:
        aux8 = 'E'
        break;
      case 14:
        aux8 = 'F'
        break;
      case 15:
        aux8 = 'G'
        break;
      case 16:
        aux8 = 'H'
        break;
      case 17:
        aux8 = 'I'
        break;
      case 18:
        aux8 = 'J'
        break;
      case 19:
        aux8 = 'K'
        break;
      case 20:
        aux8 = 'L'
        break;
      case 21:
        aux8 = 'M'
        break;
      case 22:
        aux8 = 'N'
        break;
      case 23:
        aux8 = 'P'
        break;
      case 24:
        aux8 = 'Q'
        break;
      case 25:
        aux8 = 'R'
        break;
      case 26:
        aux8 = 'S'
        break;
      case 27:
        aux8 = 'T'
        break;
      case 28:
        aux8 = 'U'
        break;
      case 29:
        aux8 = 'V'
        break;
      case 30:
        aux8 = 'W'
        break;
      case 31:
        aux8 = 'X'
        break;
      case 32:
        aux8 = 'Y'
        break;
      case 33:
        aux8 = 'Z'
        break;
    }


    switch (aux7) {
      case 0:
        aux9 = '1'
        break;
      case 1:
        aux9 = '2'
        break;
      case 2:
        aux9 = '3'
        break;
      case 3:
        aux9 = '4'
        break;
      case 4:
        aux9 = '5'
        break;
      case 5:
        aux9 = '6'
        break;
      case 6:
        aux9 = '7'
        break;
      case 7:
        aux9 = '8'
        break;
      case 8:
        aux9 = '9'
        break;
      case 9:
        aux9 = 'A'
        break;
      case 10:
        aux9 = 'B'
        break;
      case 11:
        aux9 = 'C'
        break;
      case 12:
        aux9 = 'D'
        break;
      case 13:
        aux9 = 'E'
        break;
      case 14:
        aux9 = 'F'
        break;
      case 15:
        aux9 = 'G'
        break;
      case 16:
        aux9 = 'H'
        break;
      case 17:
        aux9 = 'I'
        break;
      case 18:
        aux9 = 'J'
        break;
      case 19:
        aux9 = 'K'
        break;
      case 20:
        aux9 = 'L'
        break;
      case 21:
        aux9 = 'M'
        break;
      case 22:
        aux9 = 'N'
        break;
      case 23:
        aux9 = 'P'
        break;
      case 24:
        aux9 = 'Q'
        break;
      case 25:
        aux9 = 'R'
        break;
      case 26:
        aux9 = 'S'
        break;
      case 27:
        aux9 = 'T'
        break;
      case 28:
        aux9 = 'U'
        break;
      case 29:
        aux9 = 'V'
        break;
      case 30:
        aux9 = 'W'
        break;
      case 31:
        aux9 = 'X'
        break;
      case 32:
        aux9 = 'Y'
        break;
      case 33:
        aux9 = 'Z'
        break;
    }


    this.rfc = primer + segundo + prinom + '-' + anio + mes + dia + aux8 + aux9;
    //Creamos un objeto para enviarselo al padre
    const RFCNuevo =
    {
      rfc: this.rfc,
      nombre: this.nombre,
      primerApellido: this.primerApellido,
      segundoApellido: this.segundoApellido,
      fecha: this.fecha,
      homoclave: this.homoclave
    }
    this.nuevoRFC.emit(RFCNuevo);
    this.resetCampos();
  }
  //Inicializamos
  resetCampos() {
    this.nombre = '';
    this.primerApellido = '';
    this.segundoApellido = '';
    this.fecha = '';
    this.homoclave = '';
  }
}