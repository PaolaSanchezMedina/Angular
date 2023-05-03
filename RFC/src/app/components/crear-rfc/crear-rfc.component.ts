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
    var aux1 = '';
    var aux2 = '';
    var aux3 = '';
    var aux4 = '';
    var aux5 = '';
    var aux6 = '0';
    var aux7 = 0;
    var aux8 = 1;
    var aux9 = 0;
    var aux10 = 0;
    var aux11 = 0;
    var aux12 = 0;
    var aux13 = 0;
    var aux14 = '';
    var aux15 = '';
    var aux16 = '';
    var aux17 = '';
    var aux18 = 0;
    var aux19 = 13;
    var aux20 = 0;
    var aux21 = 0;
    var aux22 = 0;
    var aux23 = 0;
    var caracterAux = '';

    //----------Nombre, primer y segundo apellido----------
    primer = this.primerApellido.slice(0, 2).toUpperCase();
    segundo = this.segundoApellido.slice(0, 1).toUpperCase();
    prinom = this.nombre.slice(0, 1).toUpperCase();

    //Si el primer apellido comienza con CH o LL
    if (primer == 'CH' || primer == 'LL') {
      aux1 = this.primerApellido.slice(0, 1).toUpperCase();
      aux2 = this.primerApellido.slice(2, 3).toUpperCase();
      primer = aux1 + aux2;
    }
    //Si no tiene primer apellido
    if (this.primerApellido == '') {
      primer = '';
      segundo = this.segundoApellido.slice(0, 2).toUpperCase();
      prinom = this.nombre.slice(0, 2).toUpperCase();
      if (this.nombre.toLowerCase().startsWith("maria ") || this.nombre.toLowerCase().startsWith("maría ")) {
        if (this.nombre.length >= 8) {
          prinom = this.nombre.slice(6, 8).toUpperCase();
        }
      }
      if (this.nombre.toLowerCase().startsWith("jose ") || this.nombre.toLowerCase().startsWith("josé ")) {
        if (this.nombre.length >= 7) {
          prinom = this.nombre.slice(5, 7).toUpperCase();
        }
      }
    }
    //Si no tiene segundo apellido
    if (this.segundoApellido == '') {
      segundo = '';
      prinom = this.nombre.slice(0, 2).toUpperCase();
      if (this.nombre.toLowerCase().startsWith("maria ") || this.nombre.toLowerCase().startsWith("maría ")) {
        if (this.nombre.length >= 8) {
          prinom = this.nombre.slice(6, 8).toUpperCase();
        }
      }
      if (this.nombre.toLowerCase().startsWith("jose ") || this.nombre.toLowerCase().startsWith("josé ")) {
        if (this.nombre.length >= 7) {
          prinom = this.nombre.slice(5, 7).toUpperCase();
        }
      }
    }
    //Si el primer apellido solo tiene una o dos letras
    if (this.primerApellido.length == 1 || this.primerApellido.length == 2) {
      primer = this.primerApellido.slice(0, 1).toUpperCase();
      prinom = this.nombre.slice(0, 2).toUpperCase();
      if (this.nombre.toLowerCase().startsWith("maria ") || this.nombre.toLowerCase().startsWith("maría ")) {
        if (this.nombre.length >= 8) {
          prinom = this.nombre.slice(6, 8).toUpperCase();
        }
      }
      if (this.nombre.toLowerCase().startsWith("jose ") || this.nombre.toLowerCase().startsWith("josé ")) {
        if (this.nombre.length >= 7) {
          prinom = this.nombre.slice(5, 7).toUpperCase();
        }
      }
    }
    //Si el primer apellido empieza con de, del, de la, de las
    if (this.primerApellido.toLowerCase().startsWith('de ')) {
      primer = this.primerApellido.slice(3, 5).toUpperCase();
    }
    if (this.primerApellido.toLowerCase().startsWith('del ')) {
      primer = this.primerApellido.slice(4, 6).toUpperCase();
    }
    if (this.primerApellido.toLowerCase().startsWith('de la ')) {
      primer = this.primerApellido.slice(6, 8).toUpperCase();
    }
    if (this.primerApellido.toLowerCase().startsWith('de las ')) {
      primer = this.primerApellido.slice(7, 9).toUpperCase();
    }
    //Si el segundo apellido empieza con de, del, de la, de las
    if (this.segundoApellido.toLowerCase().startsWith('de ')) {
      segundo = this.segundoApellido.slice(3, 4).toUpperCase();
    }
    if (this.segundoApellido.toLowerCase().startsWith('del ')) {
      segundo = this.segundoApellido.slice(4, 5).toUpperCase();
    }
    if (this.segundoApellido.toLowerCase().startsWith('de la ')) {
      segundo = this.segundoApellido.slice(6, 7).toUpperCase();
    }
    if (this.segundoApellido.toLowerCase().startsWith('de las ')) {
      segundo = this.segundoApellido.slice(7, 8).toUpperCase();
    }
    //Si el primer apellido contiene ', "
    if (this.primerApellido.includes('\'')) {
      primer = this.primerApellido.slice(2, 4).toUpperCase();
    }
    if (this.primerApellido.includes('\"')) {
      primer = this.primerApellido.slice(4, 6).toUpperCase();
    }
    //Si el nombre empieza con Ing., Lic, Gral.
    if (this.nombre.startsWith('Ing. ') || this.nombre.startsWith('Lic. ')) {
      prinom = this.nombre.slice(5, 6).toUpperCase();
    }
    if (this.nombre.startsWith('Gral. ')) {
      prinom = this.nombre.slice(6, 7).toUpperCase();
    }
    //Si el nombre comienza con una inicial seguida de un punto, ej: B. Juan
    if (this.nombre.charAt(1) === '.') {
      prinom = this.nombre.slice(3, 4).toUpperCase();
    }
    //Si el nombre comienza con María
    if (this.nombre.toLowerCase().startsWith("maria ") || this.nombre.toLowerCase().startsWith("maría ")) {
      if (this.nombre.length >= 7) {
        prinom = this.nombre.slice(6, 7).toUpperCase();
      }
    }
    //Si el nombre comienza con José
    if (this.nombre.toLowerCase().startsWith("jose ") || this.nombre.toLowerCase().startsWith("josé ")) {
      if (this.nombre.length >= 6) {
        prinom = this.nombre.slice(5, 6).toUpperCase();
      }
    }

    aux4 = primer + segundo + prinom;
    aux3 = aux4;

    if (aux3.includes('BATO') || aux3.includes('CACO') || aux3.includes('COGE') || aux3.includes('COJO')
      || aux3.includes('BOFE') || aux3.includes('CAGA') || aux3.includes('COJA') || aux3.includes('CULO')
      || aux3.includes('BUEI') || aux3.includes('CAGO') || aux3.includes('CAJE') || aux3.includes('FETO')
      || aux3.includes('BUEY') || aux3.includes('CAKA') || aux3.includes('CAJI') || aux3.includes('FOCA')
      || aux3.includes('CACA') || aux3.includes('CAKO') || aux3.includes('RUIN') || aux3.includes('GATA')
      || aux3.includes('GUEY') || aux3.includes('KACA') || aux3.includes('KAGA') || aux3.includes('KOGE')
      || aux3.includes('JOTO') || aux3.includes('KACO') || aux3.includes('KAGO') || aux3.includes('COJO')
      || aux3.includes('SAPO') || aux3.includes('PENE') || aux3.includes('KAKO') || aux3.includes('KULO')
      || aux3.includes('LOBA') || aux3.includes('LOCA') || aux3.includes('LOCO') || aux3.includes('LOKA')
      || aux3.includes('MALA') || aux3.includes('LORA') || aux3.includes('LORO') || aux3.includes('LOKO')
      || aux3.includes('MAME') || aux3.includes('MAMO') || aux3.includes('MEAR') || aux3.includes('MEAS')
      || aux3.includes('MION') || aux3.includes('MEON') || aux3.includes('VACA') || aux3.includes('MEAR')
      || aux3.includes('MOCO') || aux3.includes('MULA') || aux3.includes('PEDA') || aux3.includes('PEDO')
      || aux3.includes('PUTA') || aux3.includes('PUTO') || aux3.includes('QULO') || aux3.includes('RATA')
      || aux3.includes('ROBE') || aux3.includes('ROBO') || aux3.includes('VAGA') || aux3.includes('VAGO')) {
      const auxiliar = aux3.split('');
      auxiliar[3] = 'X';
      const auxiliar2 = auxiliar.join('');
      aux4 = auxiliar2;
    }

    //----------Fecha----------
    anio = this.fecha.slice(2, 4);
    mes = this.fecha.slice(5, 7);
    dia = this.fecha.slice(8, 10);

    //----------Homoclave----------
    aux5 = this.primerApellido.toUpperCase() + ' ' + this.segundoApellido.toUpperCase() + ' ' + this.nombre.toUpperCase();
    var caracteres = aux5.split('');
    for (var caracter of caracteres) {
      switch (caracter) {
        case ' ':
          caracterAux = '00';
          break;
        case 'A':
          caracterAux = '11';
          break;
        case 'B':
          caracterAux = '12';
          break;
        case 'C':
          caracterAux = '13';
          break;
        case 'D':
          caracterAux = '14';
          break;
        case 'E':
          caracterAux = '15';
          break;
        case 'F':
          caracterAux = '16';
          break;
        case 'G':
          caracterAux = '17';
          break;
        case 'H':
          caracterAux = '18';
          break;
        case 'I':
          caracterAux = '19';
          break;
        case 'J':
          caracterAux = '21';
          break;
        case 'K':
          caracterAux = '22';
          break;
        case 'L':
          caracterAux = '23';
          break;
        case 'M':
          caracterAux = '24';
          break;
        case 'N':
          caracterAux = '25';
          break;
        case 'Ñ':
          caracterAux = '10';
          break;
        case 'O':
          caracterAux = '26';
          break;
        case 'P':
          caracterAux = '27';
          break;
        case 'Q':
          caracterAux = '28';
          break;
        case 'R':
          caracterAux = '29';
          break;
        case 'S':
          caracterAux = '32';
          break;
        case 'T':
          caracterAux = '33';
          break;
        case 'U':
          caracterAux = '34';
          break;
        case 'V':
          caracterAux = '35';
          break;
        case 'W':
          caracterAux = '36';
          break;
        case 'X':
          caracterAux = '37';
          break;
        case 'Y':
          caracterAux = '38';
          break;
        case 'Z':
          caracterAux = '39';
          break;
      }
      aux6 = aux6 + caracterAux;
    }
    //console.log(aux6);
    var caracteresSeparados = aux6.split('');
    for (let i = 1; i < caracteresSeparados.length; i++) {
      aux9 = (parseInt(caracteresSeparados[aux7] + caracteresSeparados[aux8])) * parseInt(caracteresSeparados[aux8]);
      aux7++;
      aux8++;
      aux10 = aux10 + aux9;
    }
    //console.log(aux10);

    aux11 = aux10 % 1000;
    aux12 = Math.floor(aux11 / 34);
    aux13 = Math.floor(aux11 % 34);
    // console.log(aux11);
    // console.log(aux12); //Cociente
    // console.log(aux13); //Residuo

    switch (aux12) {
      case 0:
        aux14 = '1'
        break;
      case 1:
        aux14 = '2'
        break;
      case 2:
        aux14 = '3'
        break;
      case 3:
        aux14 = '4'
        break;
      case 4:
        aux14 = '5'
        break;
      case 5:
        aux14 = '6'
        break;
      case 6:
        aux14 = '7'
        break;
      case 7:
        aux14 = '8'
        break;
      case 8:
        aux14 = '9'
        break;
      case 9:
        aux14 = 'A'
        break;
      case 10:
        aux14 = 'B'
        break;
      case 11:
        aux14 = 'C'
        break;
      case 12:
        aux14 = 'D'
        break;
      case 13:
        aux14 = 'E'
        break;
      case 14:
        aux14 = 'F'
        break;
      case 15:
        aux14 = 'G'
        break;
      case 16:
        aux14 = 'H'
        break;
      case 17:
        aux14 = 'I'
        break;
      case 18:
        aux14 = 'J'
        break;
      case 19:
        aux14 = 'K'
        break;
      case 20:
        aux14 = 'L'
        break;
      case 21:
        aux14 = 'M'
        break;
      case 22:
        aux14 = 'N'
        break;
      case 23:
        aux14 = 'P'
        break;
      case 24:
        aux14 = 'Q'
        break;
      case 25:
        aux14 = 'R'
        break;
      case 26:
        aux14 = 'S'
        break;
      case 27:
        aux14 = 'T'
        break;
      case 28:
        aux14 = 'U'
        break;
      case 29:
        aux14 = 'V'
        break;
      case 30:
        aux14 = 'W'
        break;
      case 31:
        aux14 = 'X'
        break;
      case 32:
        aux14 = 'Y'
        break;
      case 33:
        aux14 = 'Z'
        break;
    }


    switch (aux13) {
      case 0:
        aux15 = '1'
        break;
      case 1:
        aux15 = '2'
        break;
      case 2:
        aux15 = '3'
        break;
      case 3:
        aux15 = '4'
        break;
      case 4:
        aux15 = '5'
        break;
      case 5:
        aux15 = '6'
        break;
      case 6:
        aux15 = '7'
        break;
      case 7:
        aux15 = '8'
        break;
      case 8:
        aux15 = '9'
        break;
      case 9:
        aux15 = 'A'
        break;
      case 10:
        aux15 = 'B'
        break;
      case 11:
        aux15 = 'C'
        break;
      case 12:
        aux15 = 'D'
        break;
      case 13:
        aux15 = 'E'
        break;
      case 14:
        aux15 = 'F'
        break;
      case 15:
        aux15 = 'G'
        break;
      case 16:
        aux15 = 'H'
        break;
      case 17:
        aux15 = 'I'
        break;
      case 18:
        aux15 = 'J'
        break;
      case 19:
        aux15 = 'K'
        break;
      case 20:
        aux15 = 'L'
        break;
      case 21:
        aux15 = 'M'
        break;
      case 22:
        aux15 = 'N'
        break;
      case 23:
        aux15 = 'P'
        break;
      case 24:
        aux15 = 'Q'
        break;
      case 25:
        aux15 = 'R'
        break;
      case 26:
        aux15 = 'S'
        break;
      case 27:
        aux15 = 'T'
        break;
      case 28:
        aux15 = 'U'
        break;
      case 29:
        aux15 = 'V'
        break;
      case 30:
        aux15 = 'W'
        break;
      case 31:
        aux15 = 'X'
        break;
      case 32:
        aux15 = 'Y'
        break;
      case 33:
        aux15 = 'Z'
        break;
    }

    //Se juntan los doce digitos obtenidos
    aux16 = aux4 + anio + mes + dia + aux14 + aux15;
    var caracteresFormula = aux16.split('');
    for (var caracterFormula of caracteresFormula) {
      switch (caracterFormula) {
        case '0':
          aux17 = '0';
          break;
        case '1':
          aux17 = '1';
          break;
        case '2':
          aux17 = '2';
          break;
        case '3':
          aux17 = '3';
          break;
        case '4':
          aux17 = '4';
          break;
        case '5':
          aux17 = '5';
          break;
        case '6':
          aux17 = '6';
          break;
        case '7':
          aux17 = '7';
          break;
        case '8':
          aux17 = '8';
          break;
        case '9':
          aux17 = '9';
          break;
        case 'A':
          aux17 = '10';
          break;
        case 'B':
          aux17 = '11';
          break;
        case 'C':
          aux17 = '12';
          break;
        case 'D':
          aux17 = '13';
          break;
        case 'E':
          aux17 = '14';
          break;
        case 'F':
          aux17 = '15';
          break;
        case 'G':
          aux17 = '16';
          break;
        case 'H':
          aux17 = '17';
          break;
        case 'I':
          aux17 = '18';
          break;
        case 'J':
          aux17 = '19';
          break;
        case 'K':
          aux17 = '20';
          break;
        case 'L':
          aux17 = '21';
          break;
        case 'M':
          aux17 = '22';
          break;
        case 'N':
          aux17 = '23';
          break;
        case 'Ñ':
          aux17 = '24';
          break;
        case 'O':
          aux17 = '25';
          break;
        case 'P':
          aux17 = '26';
          break;
        case 'Q':
          aux17 = '27';
          break;
        case 'R':
          aux17 = '28';
          break;
        case 'S':
          aux17 = '29';
          break;
        case 'T':
          aux17 = '30';
          break;
        case 'U':
          aux17 = '31';
          break;
        case 'V':
          aux17 = '32';
          break;
        case 'W':
          aux17 = '33';
          break;
        case 'X':
          aux17 = '34';
          break;
        case 'Y':
          aux17 = '35';
          break;
        case 'Z':
          aux17 = '36';
          break;
      }
      aux18 = parseInt(aux17) * aux19;
      aux20 = aux20 + aux18;
      // console.log(aux20);
      // console.log(aux19);
      aux19--;
    }
    
    aux21 = Math.floor(aux20%11); //Residuo
    aux22 = 11 - aux21;
    // console.log(aux21);
    // console.log(aux22);
    if(aux21 = 0){
      aux22 = 0;
    }
    


    this.rfc = aux4 + '-' + anio + mes + dia + aux14 + aux15 + aux22;

    //Creamos un objeto para enviarselo al padre
    const RFCNuevo =
    {
      rfc: this.rfc,
      nombre: this.nombre + ' ' + this.primerApellido + ' ' + this.segundoApellido,
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