import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listRFC: any[]=[];
  agregarRFC(rfc: any){
    this.listRFC.push(rfc);
  }
  eliminarRFClistado(index: number){
    this.listRFC.splice(index, 1);
  }
}
