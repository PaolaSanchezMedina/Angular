import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.scss']
})
export class ResultadoComponent {
  bmi: number = 0;
  resultado: string = "";
  interpretacion: string = "";

  constructor(private route:ActivatedRoute){
    this.bmi=+route.snapshot.paramMap.get('valor')!;
  }
  
  ngOnInit(): void{
    this.getResultado();
  }

  getResultado(){
    if(this.bmi >= 25){
      this.resultado='Exeso de peso';
      this.interpretacion='Hacer un poco más de ejercicio';
    }
    else if(this.bmi >= 18.5){
      this.resultado='Peso normal';
      this.interpretacion='Su peso esta dentro del rango saludable';
    }
    else{
      this.resultado='Bajo peso';
      this.interpretacion='Su peso esta por debajo de lo saludable';
    }
  }
}