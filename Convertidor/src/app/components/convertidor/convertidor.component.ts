import { Component } from '@angular/core';

@Component({
  selector: 'app-convertidor',
  templateUrl: './convertidor.component.html',
  styleUrls: ['./convertidor.component.scss']
})
export class ConvertidorComponent {
  cantidad: number = 0;
  tengo: string = "USD";
  quiero: String = "USD";
  total: number = 0;
  //Arreglo para usarlo en el maquetado
  monedas: string[] = ['USD', 'EUR', 'GBP', 'YEN', 'CHF', 'PESO MEX', 'HKD', 'CAD', 'YUAN', 'AUD']
  constructor(){

  }
  ngOnInit(): void{

  }
  convertir(): void{
    switch (this.tengo) {
      case 'USD': //1.Dólar estadounidense
        if(this.quiero==='USD'){
          this.total=this.cantidad;
        }
        if(this.quiero==='EUR'){
          this.total=this.cantidad * 0.84;
        }
        if(this.quiero==='GBP'){
          this.total=this.cantidad * 0.83;
        }
        if(this.quiero==='YEN'){
          this.total=this.cantidad * 133.33;
        }
        if(this.quiero==='CHF'){
          this.total=this.cantidad * 0.93;
        }
        if(this.quiero==='PESO MEX'){
          this.total=this.cantidad * 18.96;
        }
        if(this.quiero==='HKD'){
          this.total=this.cantidad * 7.85;
        }
        if(this.quiero==='CAD'){
          this.total=this.cantidad * 1.38;
        }
        if(this.quiero==='YUAN'){
          this.total=this.cantidad * 6.91;
        }
        if(this.quiero==='AUD'){
          this.total=this.cantidad * 1.51;
        }
        break;
      case 'EUR': //2.Euro
        if(this.quiero==='EUR'){
          this.total=this.cantidad;
        }
        if(this.quiero==='USD'){
          this.total=this.cantidad * 1.06;
        }
        if(this.quiero==='GBP'){
          this.total=this.cantidad * 0.88;
        }
        if(this.quiero==='YEN'){
          this.total=this.cantidad * 141.06;
        }
        if(this.quiero==='CHF'){
          this.total=this.cantidad * 0.99;
        }
        if(this.quiero==='PESO MEX'){
          this.total=this.cantidad * 20.06;
        }
        if(this.quiero==='HKD'){
          this.total=this.cantidad * 8.27;
        }
        if(this.quiero==='CAD'){
          this.total=this.cantidad * 1.45;
        }
        if(this.quiero==='YUAN'){
          this.total=this.cantidad * 7.31;
        }
        if(this.quiero==='AUD'){
          this.total=this.cantidad * 1.6;
        }
        break;
      case 'GBP': //3.Libra esterlina
        if(this.quiero==='GBP'){
          this.total=this.cantidad;
        }
        if(this.quiero==='USD'){
          this.total=this.cantidad * 1.21;
        }
        if(this.quiero==='EUR'){
          this.total=this.cantidad * 1.14;
        }
        if(this.quiero==='YEN'){
          this.total=this.cantidad * 160.86;
        }
        if(this.quiero==='CHF'){
          this.total=this.cantidad * 1.13;
        }
        if(this.quiero==='PESO MEX'){
          this.total=this.cantidad * 22.86;
        }
        if(this.quiero==='HKD'){
          this.total=this.cantidad * 9.46;
        }
        if(this.quiero==='CAD'){
          this.total=this.cantidad * 1.66;
        }
        if(this.quiero==='YUAN'){
          this.total=this.cantidad * 8.33;
        }
        if(this.quiero==='AUD'){
          this.total=this.cantidad * 1.82;
        }
        break;
      case 'YEN': //4.Yen japonés
        if(this.quiero==='YEN'){
          this.total=this.cantidad;
        }
        if(this.quiero==='GBP'){
          this.total=this.cantidad * 0.0062;
        }
        if(this.quiero==='USD'){
          this.total=this.cantidad * 0.0075;
        }
        if(this.quiero==='EUR'){
          this.total=this.cantidad * 0.0071;
        }
        if(this.quiero==='CHF'){
          this.total=this.cantidad * 0.0070;
        }
        if(this.quiero==='PESO MEX'){
          this.total=this.cantidad * 0.14;
        }
        if(this.quiero==='HKD'){
          this.total=this.cantidad * 0.059;
        }
        if(this.quiero==='CAD'){
          this.total=this.cantidad * 0.010;
        }
        if(this.quiero==='YUAN'){
          this.total=this.cantidad * 0.052;
        }
        if(this.quiero==='AUD'){
          this.total=this.cantidad * 0.011;
        }
        break;
      case 'CHF': //5.Franco suizo
        if(this.quiero==='CHF'){
          this.total=this.cantidad;
        }
        if(this.quiero==='YEN'){
          this.total=this.cantidad * 142.93;
        }
        if(this.quiero==='GBP'){
          this.total=this.cantidad * 0.89;
        }
        if(this.quiero==='USD'){
          this.total=this.cantidad * 1.07;
        }
        if(this.quiero==='EUR'){
          this.total=this.cantidad * 1.01;
        }
        if(this.quiero==='PESO MEX'){
          this.total=this.cantidad * 20.33;
        }
        if(this.quiero==='HKD'){
          this.total=this.cantidad * 8.41;
        }
        if(this.quiero==='CAD'){
          this.total=this.cantidad * 1.47;
        }
        if(this.quiero==='YUAN'){
          this.total=this.cantidad * 7.40;
        }
        if(this.quiero==='AUD'){
          this.total=this.cantidad * 1.62;
        }
        break;
      case 'PESO MEX': //6.Peso méxicano
        if(this.quiero==='PESO MEX'){
          this.total=this.cantidad;
        }
        if(this.quiero==='CHF'){
          this.total=this.cantidad * 0.049;
        }
        if(this.quiero==='YEN'){
          this.total=this.cantidad * 7.03;
        }
        if(this.quiero==='GBP'){
          this.total=this.cantidad * 0.044;
        }
        if(this.quiero==='USD'){
          this.total=this.cantidad * 0.053;
        }
        if(this.quiero==='EUR'){
          this.total=this.cantidad * 0.050;
        }
        if(this.quiero==='HKD'){
          this.total=this.cantidad * 0.41;
        }
        if(this.quiero==='CAD'){
          this.total=this.cantidad * 0.073;
        }
        if(this.quiero==='YUAN'){
          this.total=this.cantidad * 0.36;
        }
        if(this.quiero==='AUD'){
          this.total=this.cantidad * 0.080;
        }
        break;
      case 'HKD': //7.Dólar hongkonés
        if(this.quiero==='HKD'){
          this.total=this.cantidad;
        }
        if(this.quiero==='PESO MEX'){
          this.total=this.cantidad * 2.42;
        }
        if(this.quiero==='CHF'){
          this.total=this.cantidad * 0.12;
        }
        if(this.quiero==='YEN'){
          this.total=this.cantidad * 16.99;
        }
        if(this.quiero==='GBP'){
          this.total=this.cantidad * 0.11;
        }
        if(this.quiero==='USD'){
          this.total=this.cantidad * 0.13;
        }
        if(this.quiero==='EUR'){
          this.total=this.cantidad * 0.12;
        }
        if(this.quiero==='CAD'){
          this.total=this.cantidad * 0.18;
        }
        if(this.quiero==='YUAN'){
          this.total=this.cantidad * 0.88;
        }
        if(this.quiero==='AUD'){
          this.total=this.cantidad * 0.19;
        }
        break;
      case 'CAD': //8.Dólar canadiense
        if(this.quiero==='CAD'){
          this.total=this.cantidad;
        }
        if(this.quiero==='HKD'){
          this.total=this.cantidad * 5.70;
        }
        if(this.quiero==='PESO MEX'){
          this.total=this.cantidad * 13.79;
        }
        if(this.quiero==='CHF'){
          this.total=this.cantidad * 0.68;
        }
        if(this.quiero==='YEN'){
          this.total=this.cantidad * 96.91;
        }
        if(this.quiero==='GBP'){
          this.total=this.cantidad * 0.60;
        }
        if(this.quiero==='USD'){
          this.total=this.cantidad * 0.73;
        }
        if(this.quiero==='EUR'){
          this.total=this.cantidad * 0.69;
        }
        if(this.quiero==='YUAN'){
          this.total=this.cantidad * 5.02;
        }
        if(this.quiero==='AUD'){
          this.total=this.cantidad * 1.1;
        }
        break;
      case 'YUAN': //9.Yuan chino 
        if(this.quiero==='YUAN'){
          this.total=this.cantidad;
        }
        if(this.quiero==='CAD'){
          this.total=this.cantidad * 0.20;
        }
        if(this.quiero==='HKD'){
          this.total=this.cantidad * 1.14;
        }
        if(this.quiero==='PESO MEX'){
          this.total=this.cantidad * 2.75;
        }
        if(this.quiero==='CHF'){
          this.total=this.cantidad * 0.14;
        }
        if(this.quiero==='YEN'){
          this.total=this.cantidad * 19.31;
        }
        if(this.quiero==='GBP'){
          this.total=this.cantidad * 0.12;
        }
        if(this.quiero==='USD'){
          this.total=this.cantidad * 0.14;
        }
        if(this.quiero==='EUR'){
          this.total=this.cantidad * 0.14;
        }
        if(this.quiero==='AUD'){
          this.total=this.cantidad * 0.22;
        }
        break;
      case 'AUD': //10.Dólar australiano
        if(this.quiero==='AUD'){
          this.total=this.cantidad;
        }
        if(this.quiero==='YUAN'){
          this.total=this.cantidad * 4.57;
        }
        if(this.quiero==='CAD'){
          this.total=this.cantidad * 0.91;
        }
        if(this.quiero==='HKD'){
          this.total=this.cantidad * 5.19;
        }
        if(this.quiero==='PESO MEX'){
          this.total=this.cantidad * 12.56;
        }
        if(this.quiero==='CHF'){
          this.total=this.cantidad * 0.62;
        }
        if(this.quiero==='YEN'){
          this.total=this.cantidad * 88.28;
        }
        if(this.quiero==='GBP'){
          this.total=this.cantidad * 0.55;
        }
        if(this.quiero==='USD'){
          this.total=this.cantidad * 0.66;
        }
        if(this.quiero==='EUR'){
          this.total=this.cantidad * 0.63;
        }
        break;
      default:
        break;
    }
  }
} 