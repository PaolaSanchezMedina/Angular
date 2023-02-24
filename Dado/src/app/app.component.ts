import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dadoIzquierdo = '../assets/img/D1';
  dadoDerecho = '../assets/img/2';
  
  numero1: number = 0;
  numero2: number = 0;
  
  tirarDados(): void
  {
    this.numero1 = Math.round(Math.random()*5) + 1;
    this.numero2 = Math.round(Math.random()*5) + 1;
    this.dadoIzquierdo = '../assets/img/D' + this.numero1 + '.png';
    this.dadoDerecho = '../assets/img/' + this.numero2 + '.png';
  }
}
